import { RadioGroup } from '@headlessui/react'
import Error from 'components/alerts/Error'
import AnimatedDiv from 'components/animation/AnimatedDiv'
import Button from 'components/atoms/Button'
import Modal from 'components/atoms/Modal'
import { links } from 'constants/Links'
import Layout from 'containers/Layout'
import { useUserContext } from 'context/UserContext'
import { getAccessToken, network } from 'helpers'
import { IParent } from 'interfaces/UniversalInterface'
import { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'
import { classNames } from 'utils/classNames'

const settings = [
  {
    name: 'Template One',
    description: '',
  },
  {
    name: 'Template Two',
    description: '',
  },
]

const ChooseTemplate = ({ user }: { user: IParent }) => {
  const [selected, setSelected] = useState(settings[0])

  const redirection = () => {
    if (user) {
      if (!user?.other?.accountFilled) {
        if (user && user.other) {
          console.log('get the accountType and redirect as per account type')
          // get the accountType and redirect as per account type
          return
        }
      } else {
        //  redirect to dashboard
        console.log('redirect to dashboard')
        return history.push(links.FEED)
      }
    }
  }

  useEffect(() => {
    redirection()
  }, [])

  const history = useHistory()

  const [loading, setLoading] = useState(false)

  const [errors, setErrors] = useState<string[]>([])

  const { setValues } = useUserContext()

  const onNext = async () => {
    if (selected) {
      try {
        setLoading(true)

        const token = getAccessToken()

        const updatedData = {
          ...user,
          other: {
            ...user.other,
            accountFilled: true,
            accountFinishedStep: 'chooseTemplate',
            template: selected?.name === 'Template One' ? 1 : 2,
          },
        }

        await network.post(
          '/user/update',
          {
            ...updatedData,
          },
          {
            headers: { Authorization: token },
          }
        )
        setValues({ ...updatedData })

        setErrors([])
        window.location.reload()
        history.push(links.FEED)
      } catch (error) {
        setErrors(['Oops! Something went wrong'])
        console.error(error)
        setErrors([])
      } finally {
        setLoading(false)
      }
    } else {
      setErrors(['Please select a template'])
    }
  }

  const [showModal, setShowModal] = useState({ show: false, idx: 1 })

  return (
    <div>
      <Modal
        open={showModal.show}
        disableBackdropClose={false}
        setOpen={() => setShowModal({ show: false, idx: 1 })}
        header={'Preview'}
      >
        <div className="max-h-screen" style={{ maxWidth: '100vw' }}>
          <img
            alt=""
            src={process.env.PUBLIC_URL + `/template${showModal.idx}.png`}
            className="h-full rounded-xl w-full"
          />
        </div>
      </Modal>
      <Layout title="Choose profile template" subtitle="">
        <AnimatedDiv className="mt-4 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white dark:border-gray-700 border border-white dark:bg-gray-900 py-8 px-4 shadow-md sm:rounded-lg sm:px-6">
            <RadioGroup value={selected} onChange={setSelected}>
              <RadioGroup.Label className="sr-only">
                Privacy setting
              </RadioGroup.Label>
              <div className="bg-white dark:bg-gray-900 rounded-md space-y-4">
                {settings.map((setting, settingIdx) => (
                  <RadioGroup.Option
                    key={setting.name}
                    value={setting}
                    className={({ checked }) =>
                      classNames(
                        checked
                          ? 'bg-pink-50 dark:bg-gray-900 rounded-md dark:border-pink-700 border-pink-200 z-10'
                          : 'border-gray-200 dark:border-gray-700 rounded-md',
                        'relative items-center justify-between border p-4 transition-all duration-200 flex overflow-hidden cursor-pointer focus:outline-none'
                      )
                    }
                  >
                    {({ active, checked }) => (
                      <>
                        <div className="flex items-center justify-center">
                          <span
                            className={classNames(
                              checked
                                ? 'bg-pink-600 border-transparent'
                                : 'bg-white border-gray-300',
                              active
                                ? 'ring-2 ring-offset-2 ring-pink-500'
                                : '',
                              'h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center'
                            )}
                            aria-hidden="true"
                          >
                            <span className="rounded-full bg-white w-1.5 h-1.5" />
                          </span>
                          <div className="ml-3 flex flex-col items-center justify-between">
                            <RadioGroup.Label
                              as="span"
                              className={classNames(
                                checked
                                  ? 'gradient-text'
                                  : 'dark:text-white text-gray-900',
                                'block text-sm font-medium mb-2'
                              )}
                            >
                              {setting.name}
                            </RadioGroup.Label>
                          </div>
                        </div>
                        <div
                          onClick={(e: any) => {
                            e.stopPropagation()
                            setShowModal({ show: true, idx: settingIdx + 1 })
                          }}
                          className="dark:text-gray-400 text-xs"
                        >
                          See Preview
                          {/* <img
                            alt=""
                            src={
                              process.env.PUBLIC_URL +
                              `/template${settingIdx + 1}.png`
                            }
                            className="h-8 w-8"
                          /> */}
                        </div>
                      </>
                    )}
                  </RadioGroup.Option>
                ))}
              </div>
            </RadioGroup>
            <Button
              loading={loading}
              fullWidth
              label="Next"
              className="mt-4"
              gradient
              onClick={onNext}
            />
            <div className="mt-4">
              {errors.length > 0 && <Error errors={errors} />}
            </div>
          </div>
        </AnimatedDiv>
      </Layout>
    </div>
  )
}

export default ChooseTemplate
