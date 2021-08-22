import Card from 'components/atoms/Card'
import { Fragment, useEffect, useState } from 'react'
import Section from 'components/atoms/Section'
import { CgDetailsMore } from 'react-icons/cg'
import { AiOutlineEdit, AiOutlineEye } from 'react-icons/ai'
import Button from 'components/atoms/Button'
import { isEmpty, map, remove, update } from 'lodash'
import Modal from 'components/atoms/Modal'
import { IBackground, IExperience } from 'interfaces/UniversalInterface'
import NormalFormInput from 'components/atoms/NormalFormInput'
import { isAvailable } from 'utils/wait'
import { useUserContext } from 'context/UserContext'
import { network } from 'helpers'
import Selector from 'components/atoms/Selector'
import { yearList } from 'values/values'
import { nanoid } from 'nanoid'
import Divider from 'components/atoms/Divider'
import { BiTrashAlt } from 'react-icons/bi'
import { PlusIcon } from '@heroicons/react/solid'
import EmptyState from 'components/atoms/EmptyState'

const ModalContentByType = ({
  type,
  localFields,
  onChange,
  onExperienceSelectUpdate,
  onExperienceFieldUpdate,
  getValue,
  onInterestAdd,
  onExperienceRemove,
  addNewExperience,
}: {
  type: string
  localFields: ILocalFields
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  onInterestAdd: () => void
  getValue: (fieldName: string, idx: number) => string
  onExperienceFieldUpdate: (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => void
  onExperienceSelectUpdate: (
    fieldName: string,
    itemName: string,
    idx: number
  ) => void
  onExperienceRemove: (id: string) => void
  addNewExperience: () => void
}) => {
  switch (type) {
    case 'summary':
      return (
        <Section
          sectionTitle="Summary"
          Icon={CgDetailsMore}
          content={
            <>
              <NormalFormInput
                value={localFields.summary}
                id={'summary'}
                textarea
                gridClass="col-span-2"
                onChange={onChange}
                placeholder="Tell everyone about yourself"
              />
            </>
          }
        />
      )
    case 'interests':
      return (
        <Section
          sectionTitle="Interests"
          Icon={CgDetailsMore}
          content={
            <>
              <div className="flex flex-col items-start gap-y-4">
                <div className="gap-x-4 gap-y-4 flex items-center flex-wrap">
                  {localFields.interests && localFields.interests.length > 0 ? (
                    map(localFields.interests, (interest: any, idx: number) => (
                      <Button
                        key={interest + '-' + idx}
                        gradient
                        invert
                        bgColor="pink"
                        label={interest.name}
                      />
                    ))
                  ) : (
                    <p className="text-gray-600 dark:text-gray-400">
                      Please add interest
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-x-4 ">
                  <NormalFormInput
                    value={localFields.interest}
                    id="interest"
                    placeholder="Enter interest name"
                    gridClass="col-span-2"
                    onChange={onChange}
                  />
                  <Button
                    gradient
                    size="sm"
                    className=""
                    onClick={onInterestAdd}
                    bgColor="pink"
                    label={'+ Add'}
                  />
                </div>
              </div>
            </>
          }
        />
      )
    case 'experiences':
      return (
        <Section
          sectionTitle="Experiences"
          key="experience-edit-tab-52"
          Icon={CgDetailsMore}
          content={
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {localFields.experiences && localFields.experiences.length > 0 ? (
                <>
                  {map(localFields.experiences, (experience, idx: number) => (
                    <Fragment key={idx}>
                      <NormalFormInput
                        id={`jobTitle-${idx}`}
                        required
                        name="jobTitle"
                        value={getValue('jobTitle', idx)}
                        label={'Job title'}
                        placeholder="What was/is your role in the company? "
                        onChange={(e) => onExperienceFieldUpdate(e, idx)}
                      />
                      <NormalFormInput
                        id="companyName"
                        required
                        name="companyName"
                        value={getValue('companyName', idx)}
                        label={'Company name'}
                        placeholder="What was/is the company name? "
                        onChange={(e) => onExperienceFieldUpdate(e, idx)}
                      />
                      <Selector
                        key="joinDate"
                        required
                        selectedItem={getValue('joinDate', idx)}
                        list={yearList}
                        label={'Join date'}
                        placeholder="Started from"
                        onSelect={(item) => {
                          onExperienceSelectUpdate('joinDate', item.name, idx)
                        }}
                      />
                      <Selector
                        key="leaveDate"
                        required
                        selectedItem={getValue('leaveDate', idx)}
                        list={yearList}
                        label={'Leave date'}
                        placeholder="Left on"
                        onSelect={(item) => {
                          onExperienceSelectUpdate('leaveDate', item.name, idx)
                        }}
                      />
                      <div className="col-span-2">
                        <NormalFormInput
                          id="description"
                          textarea
                          value={getValue('description', idx)}
                          name="description"
                          label={'Description'}
                          placeholder="Add a short description"
                          onChange={(e) => onExperienceFieldUpdate(e, idx)}
                        />
                      </div>
                      <div className="col-span-2 ">
                        <Divider
                          withButton
                          Icon={BiTrashAlt}
                          onBtnClick={() => onExperienceRemove(experience.id)}
                        />
                      </div>
                    </Fragment>
                  ))}
                </>
              ) : null}
              <div className="col-span-2">
                <Button
                  className="mx-auto"
                  onClick={addNewExperience}
                  label="Add new experience"
                  bgColor="yellow"
                  size="sm"
                />
              </div>
            </div>
          }
        />
      )
    default:
      return <div>Error</div>
  }
}

interface ILocalFields extends IBackground {
  interest: string
}

const Background = ({ userData }: { userData: any }) => {
  const [showModal, setShowModal] = useState({ show: false, type: '' })

  const { setValues, values } = useUserContext()

  const [saving, setSaving] = useState(false)

  const onChange = (e: any) => {
    setUnsavedChanges(true)
    const { value, id } = e.target
    setLocalFields({ ...localFields, [id]: value })
  }

  const { about = {}, company = {} } = isEmpty(values) ? {} : values

  const initialState = {
    interest: '',
    interests: [],
    summary: '',
    experiences: [],
  }
  const [localFields, setLocalFields] = useState<ILocalFields>(initialState)

  const onInterestAdd = () => {
    if (localFields.interest) {
      setUnsavedChanges(true)
      setLocalFields({
        ...localFields,
        interests: [
          ...localFields.interests,
          { name: localFields.interest, id: nanoid(12) },
        ],
        interest: '',
      })
    }
  }

  const addOnTrigger = (type: string) => {
    if (type === 'summary') {
      setLocalFields({ ...localFields, summary: about?.summary || '' })
    } else if (type === 'interests') {
      setLocalFields({ ...localFields, interests: about?.interests || [] })
    } else if (type === 'experiences') {
      setLocalFields({
        ...localFields,
        experiences: company?.experiences || [],
      })
    }
  }

  const addNewExperience = () => {
    const newExperience: IExperience = {
      id: nanoid(6),
      jobTitle: '',
      companyName: '',
      joinDate: '',
      leaveDate: '',
      description: '',
    }
    setLocalFields({
      ...localFields,
      experiences: [...localFields.experiences, newExperience],
    })
  }

  const onSave = async () => {
    try {
      setSaving(true)
      const { summary, interests } = localFields

      let updatedData = { ...userData }
      if (showModal.type === 'summary') {
        updatedData = {
          ...userData,
          about: {
            ...about,
            summary,
          },
        }
      } else if (showModal.type === 'interests') {
        updatedData = {
          ...userData,
          about: {
            ...about,
            interests,
          },
        }
      } else if (showModal.type === 'experiences') {
        updatedData = {
          ...userData,

          company: {
            ...company,
            experiences:
              localFields.experiences && localFields.experiences.length > 0
                ? [...localFields.experiences]
                : company.experiences,
          },
        }
      }

      delete updatedData._id

      setValues({ ...updatedData })

      await network.post('/user/update', {
        ...updatedData,
      })

      // add data to local state
      setShowModal({ ...showModal, show: false })
      setUnsavedChanges(false)
      if (!showModal.show) {
        setLocalFields(initialState)
      }
    } catch (error) {
      console.error(error)
    } finally {
      setSaving(false)
    }
  }

  const onCancel = () => {
    if (unsavedChanges) {
      setShowUnsaveModal(true)
    } else {
      setShowUnsaveModal(false)

      setUnsavedChanges(false)
      if (!showModal.show) {
        setLocalFields(initialState)
      }
    }
    setShowModal({ ...showModal, show: false })
  }

  const [unsavedChanges, setUnsavedChanges] = useState(false)

  const [showUnsaveModal, setShowUnsaveModal] = useState(false)

  const onExperienceFieldUpdate = (
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) => {
    const { value, id } = e.target
    setUnsavedChanges(true)
    update(localFields.experiences[idx], `${id}`, () => value)
    setLocalFields({ ...localFields })
  }

  const onExperienceSelectUpdate = (
    fieldName: string,
    name: string,
    idx: number
  ) => {
    setUnsavedChanges(true)
    update(localFields.experiences[idx], `${fieldName}`, () => name)
    setLocalFields({ ...localFields })
  }

  const getValue = (fieldName: string, idx: number): string => {
    // @ts-ignore
    return localFields.experiences[idx][fieldName]
  }

  const onExperienceRemove = (id: string) => {
    setUnsavedChanges(true)
    remove(localFields.experiences, (item) => item.id === id)
    setLocalFields({ ...localFields })
  }

  return (
    <>
      <Modal
        disableBackdropClose={false}
        open={showModal.show}
        onClose={onCancel}
        setOpen={() => setShowModal({ show: false, type: '' })}
        header="Edit Background"
      >
        <div>
          <div
            style={{
              minHeight: '15rem',
            }}
            className="overflow-y-hidden min-w-256 p-2 custom-scroll-mini darker my-4 max-h-full"
          >
            <div className="space-y-12 ">
              <ModalContentByType
                addNewExperience={addNewExperience}
                onChange={onChange}
                onExperienceSelectUpdate={onExperienceSelectUpdate}
                onExperienceFieldUpdate={onExperienceFieldUpdate}
                onExperienceRemove={onExperienceRemove}
                localFields={localFields}
                onInterestAdd={onInterestAdd}
                getValue={getValue}
                type={showModal.type}
              />
            </div>
          </div>

          <div className="mt-5 sm:mt-4 flex justify-end space-x-4 items-center">
            <Button gradient label="Save" onClick={onSave} loading={saving} />
          </div>
        </div>
      </Modal>
      <Card
        cardTitle="Background"
        content={
          <div className="space-y-10">
            <Section
              sectionTitle="Summary"
              Icon={CgDetailsMore}
              withSectionHeadings={
                about.summary && (
                  <div>
                    <Button
                      secondary
                      invert
                      bgColor="gray"
                      onClick={() => {
                        addOnTrigger('summary')
                        setShowModal({ show: true, type: 'summary' })
                      }}
                      Icon={AiOutlineEdit}
                      size="sm"
                      label={'Edit'}
                    />
                  </div>
                )
              }
              content={
                <div>
                  {isAvailable('summary', about) ? (
                    <p>{about.summary}</p>
                  ) : (
                    <EmptyState
                      title="No summary found"
                      subtitle="Add something about yourself."
                      btnText="Add summary"
                      onBtnClick={() =>
                        setShowModal({ show: true, type: 'summary' })
                      }
                      BtnIcon={PlusIcon}
                      iconUrl={'/summary.png'}
                    />
                  )}
                </div>
              }
            />
            <Section
              sectionTitle="Interests"
              Icon={CgDetailsMore}
              withSectionHeadings={
                about.interests &&
                about.interests.length > 0 && (
                  <div>
                    <Button
                      secondary
                      invert
                      bgColor="gray"
                      onClick={() => {
                        addOnTrigger('interests')
                        setShowModal({ show: true, type: 'interests' })
                      }}
                      Icon={AiOutlineEdit}
                      size="sm"
                      label={'Edit'}
                    />
                  </div>
                )
              }
              content={
                <div>
                  {about.interests && about.interests.length > 0 ? (
                    <div className="flex items-center flex-wrap justify-start gap-x-4">
                      {map(about.interests, (interest: any, idx: number) => (
                        <Button
                          key={interest.id}
                          className="pointer-events-none"
                          gradient
                          invert
                          bgColor="pink"
                          label={interest.name}
                        />
                      ))}
                    </div>
                  ) : (
                    <EmptyState
                      title="No interests added"
                      subtitle="Get started by adding your interests to your profile."
                      btnText="Add interests"
                      BtnIcon={PlusIcon}
                      iconUrl={'/interest.png'}
                      onBtnClick={() =>
                        setShowModal({ show: true, type: 'interests' })
                      }
                    />
                  )}
                </div>
              }
            />
            <Section
              sectionTitle="Experiences"
              Icon={CgDetailsMore}
              withSectionHeadings={
                company.experiences &&
                company.experiences.length > 0 && (
                  <div>
                    <Button
                      secondary
                      invert
                      bgColor="gray"
                      onClick={() => {
                        addOnTrigger('experiences')
                        setShowModal({ show: true, type: 'experiences' })
                      }}
                      Icon={AiOutlineEdit}
                      size="sm"
                      label={'Edit'}
                    />
                  </div>
                )
              }
              content={
                <div className="space-y-8">
                  {company.experiences && company.experiences.length > 0 ? (
                    map(company.experiences, (exp, idx: number) => {
                      return (
                        <div
                          key={idx}
                          className={` ${
                            idx !== 1
                              ? 'border-b border-gray-200 dark:border-gray-600 pb-4'
                              : ''
                          }`}
                        >
                          <h4 className="job_title font-medium dark:text-white text-gray-900">
                            {exp.jobTitle}
                          </h4>
                          <h5 className="company_name link-hover block text-left cursor-pointer ">
                            {exp.companyName}
                          </h5>
                          <span className="job_duration text-gray-300 font-semibold text-sm">
                            {exp.joinDate} - {exp.leaveDate}
                          </span>
                          <p className="company_description text-gray-400 mt-3">
                            {exp.description}
                          </p>
                        </div>
                      )
                    })
                  ) : (
                    <EmptyState
                      title="No experience"
                      subtitle="Get started by adding a new experience to your profile."
                      btnText="Add experience"
                      BtnIcon={PlusIcon}
                      onBtnClick={() => {
                        if (
                          company?.experiences &&
                          company.experiences.length === 0
                        ) {
                          addNewExperience()
                        }
                        setShowModal({ show: true, type: 'experiences' })
                      }}
                      iconUrl={'/experience.png'}
                    />
                  )}
                </div>
              }
            />
          </div>
        }
      />

      <Modal open={showUnsaveModal} setOpen={setShowUnsaveModal}>
        <>
          <h1 className="text-lg dark:text-white text-gray-900 min-w-96">
            You have unsaved changes
          </h1>
          <p className="text-gray-500 ">Do you want to save it?</p>

          <div className="mt-5 sm:mt-4 flex justify-end space-x-4 items-center">
            <Button
              gradient
              onClick={() => {
                setShowUnsaveModal(false)
                setShowModal({ ...showModal, show: true })
              }}
              invert
              label="No thanks"
            />
            <Button
              gradient
              label="Discard"
              onClick={() => {
                setShowUnsaveModal(false)
                setLocalFields(initialState)
              }}
              loading={saving}
            />
          </div>
        </>
      </Modal>
    </>
  )
}

export default Background
