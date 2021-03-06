import Badge from 'components/atoms/Badge'
import Button from 'components/atoms/Button'
import Modal from 'components/atoms/Modal'
import { useNotifications } from 'context/NotificationContext'
import { useUserContext } from 'context/UserContext'
import { getAccessToken, network } from 'helpers'
import { ICompany, IParent } from 'interfaces/UniversalInterface'
import React, { useState } from 'react'
import { BiUserCircle } from 'react-icons/bi'
import { avatarPlaceholder } from 'state/Redux/constants'

const Cover = ({
  company,
  userData,
  authUser,
  isBusiness,
}: {
  company?: ICompany
  userData?: IParent
  isBusiness: boolean
  authUser: boolean
}) => {
  const [showImageModal, setShowImageModal] = useState({
    type: '',
    show: false,
  })
  const token = getAccessToken()

  const accountType = userData?.other?.accountType || 'personal'

  const [saving, setSaving] = useState(false)

  const [_image, setImage] = useState('')

  const onImageSelect = (e: any, type: string) => {
    const img = e.target.files[0]
    setImage(img)
    setShowImageModal({ type, show: true })
  }

  const { setValues } = useUserContext()
  const { setNotification } = useNotifications()

  const onSave = async (e: any) => {
    e.preventDefault()
    setSaving(true)

    const fd = new FormData()
    fd.append('image', _image)

    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: token,
      },
    }

    try {
      const { data } = await network.post('/uploadImage', fd, config)

      if (data && data.data && data.data.location) {
        const updatedData = {
          ...userData,
          [isCover ? 'coverPicture' : 'profilePicture']: data.data.location,
        }
        //@ts-ignore
        delete updatedData.password

        setValues({ ...updatedData })

        await network.post(
          '/user/update',
          {
            ...updatedData,
          },
          {
            headers: { Authorization: token },
          }
        )
        setShowImageModal({ show: false, type: '' })
        setNotification({
          show: true,
          title: `${isCover ? 'Cover' : 'Profile'} photo changed successfully`,
        })
      }
    } catch (error) {
      // @ts-ignore
      console.error(error.message)
    }
    setSaving(false)
  }

  const coverImageSelectorRef = React.useRef()
  const profileImageSelectorRef = React.useRef()

  //@ts-ignore
  const showFileExplorerForCover = () => coverImageSelectorRef?.current?.click()
  const showFileExplorerForProfile = () =>
    //@ts-ignore
    profileImageSelectorRef?.current?.click()

  const coverImageStyles =
    'max-h-72 rounded-md sm:overflow-hidden w-full  object-cover'
  const profileImageStyles = 'md:h-32 md:w-32 sm:h-12 sm:w-12 rounded-full'
  const isCover = showImageModal.type === 'cover'

  return (
    <>
      <Modal
        header={`${isCover ? 'Cover' : 'Profile'} Photo`}
        disableBackdropClose
        open={showImageModal.show}
        setOpen={() => setShowImageModal({ show: false, type: '' })}
      >
        <div
          className={`${
            isCover
              ? ' lg:min-w-256 sm:min-w-172 min-w-32'
              : 'sm:min-w-64 sm:min-h-64'
          }`}
        >
          <div
            className={`relative ${
              isCover
                ? 'sm:min-h-72 min-h-48'
                : 'min-h-48 flex items-center justify-center'
            } `}
          >
            {_image && (
              <img
                className={`shadow-xl ${
                  isCover ? coverImageStyles : profileImageStyles
                }`}
                // @ts-ignore
                src={URL.createObjectURL(_image)}
                alt=""
              />
            )}
          </div>
          <div className="mt-5 sm:mt-4 flex justify-end  items-center">
            <Button
              gradient
              loading={saving}
              disabled={saving}
              onClick={onSave}
              type="submit"
              label="Save"
            />
          </div>
        </div>
      </Modal>

      {/* HIDDEN IMAGE INPUT */}
      <input
        // @ts-ignore
        ref={coverImageSelectorRef}
        className="hidden"
        type="file"
        onChange={(e: any) => onImageSelect(e, 'cover')}
        accept="image/x-png,image/jpeg"
      />
      {/* HIDDEN IMAGE INPUT */}
      <input
        // @ts-ignore
        ref={profileImageSelectorRef}
        className="hidden"
        type="file"
        onChange={(e: any) => onImageSelect(e, 'profile')}
        accept="image/x-png,image/jpeg"
      />

      <main className="">
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 " />
          <div className="sm:px-0 px-8">
            <div className="relative shadow-xl rounded-md sm:overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src={
                    userData?.coverPicture
                      ? userData?.coverPicture
                      : 'https://source.unsplash.com/1600x900/?nature,water'
                  }
                  alt="People working on laptops"
                />
                <div className="absolute inset-0 bg-gray-400 mix-blend-multiply" />
              </div>
              <div className="relative px-4  py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 flex items-center flex-col justify-center">
                <div className="relative">
                  <img
                    src={
                      userData?.profilePicture
                        ? userData?.profilePicture
                        : avatarPlaceholder
                    }
                    className="md:h-32 md:w-32 sm:h-12 border-gradient border-transparent border-4 shadow-xl sm:w-12 rounded-full"
                    alt="user"
                  />
                </div>
                <h1 className="my-6 relative text-center text-2xl font-extrabold tracking-tight sm:text-2xl lg:text-4xl">
                  <span className="block text-white">
                    {userData?.fullName}{' '}
                    <Badge
                      className={`${
                        accountType === 'business'
                          ? 'bg-pink-100 text-pink-800'
                          : accountType === 'personal'
                          ? 'bg-yellow-100 text-yellow-800'
                          : 'bg-blue-100 text-blue-800'
                      } absolute -right-20 top-0 `}
                      label={accountType}
                      textSize="xs"
                      rounded=""
                    />
                  </span>
                  <span className="block text-white text-base tracking-wide font-medium">
                    {accountType === 'personal'
                      ? company?.jobTitle
                      : userData?.business?.name}
                  </span>
                </h1>

                <div className="flex items-center w-auto text-xl sm:border-t  border-white flex-col sm:flex-row border-t-none">
                  <div className="sm:border-r border-r-none border-white px-8 py-4 sm:border-b-none border-b">
                    <div className="text-center  text-white tracking-wide font-bold">
                      {userData?.pwvpCount || 0}
                    </div>
                    <div className="text-gray-300 font-medium uppercase text-base mt-1 tracking-tight ">
                      profile views
                    </div>
                  </div>
                  {isBusiness && (
                    <div className="sm:border-r  border-r-none border-white px-8 py-4 sm:border-b-none border-b">
                      <div className="text-center text-white tracking-wide font-bold">
                        {userData?.business?.projects?.length || 0}
                      </div>
                      <div className="text-gray-300 font-medium uppercase text-base mt-1 tracking-tight ">
                        projects
                      </div>
                    </div>
                  )}
                  <div className="px-8 py-4 sm:border-b-none border-b">
                    <div className="text-center text-white tracking-wide font-bold ">
                      {userData?.following?.length || 0}
                    </div>
                    <div className="text-gray-300 font-medium uppercase text-base mt-1 tracking-tight ">
                      connections
                    </div>
                  </div>
                </div>
              </div>
              {/* <----------- Edit Button -------------> */}
              {authUser && (
                <div className="absolute flex items-center gap-x-4 bottom-0 right-0 p-4">
                  <Button
                    gradient
                    onClick={showFileExplorerForProfile}
                    Icon={BiUserCircle}
                    size="sm"
                    label={'Change profile photo'}
                  />
                  <Button
                    gradient
                    onClick={showFileExplorerForCover}
                    Icon={BiUserCircle}
                    size="sm"
                    label={'Change cover photo'}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Cover
