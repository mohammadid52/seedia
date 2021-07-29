import Button from 'components/atoms/Button'
import FormInput from 'components/atoms/FormInput'
import Selector from 'components/atoms/Selector'
import Loading from 'components/Loading'
import Layout from 'containers/Layout'
import useForm from 'hooks/useForm'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { wait } from 'utils/wait'

const StudentSecondStep = () => {
  const [isLoaded, setIsLoaded] = useState(false)
  const history = useHistory()

  //capture inputs

  const jobList = [
    { id: '1', name: 'Web Developer' },
    { id: '2', name: 'Web Designer' },
  ]
  const INITIAL_FIELDS = {
    jobTitle: '',
    jobType: { id: '', name: '' },
    latestCompany: '',
  }

  const ERROR_INITIAL_FIELDS = {
    jobTitle: '',
    latestCompany: '',
  }

  const { fields, onChange, errors, setFields, setErrors } = useForm(
    INITIAL_FIELDS,
    ERROR_INITIAL_FIELDS
  )

  const validateForm = () => {
    let isValid = true

    const trimmedLen = (field) => fields[field].trim().length

    if (trimmedLen('jobTitle') <= 0) {
      isValid = false
      errors.jobTitle = 'Job title could not be empty.'
    } else {
      isValid = true
      errors.jobTitle = ''
    }

    if (trimmedLen('latestCompany') <= 0) {
      isValid = false
      errors.latestCompany = 'This field is important.'
    } else {
      isValid = true
      errors.latestCompany = ''
    }

    setErrors({ ...errors })

    return isValid
  }

  setTimeout(() => {
    setIsLoaded(true)
  }, 1000)

  const [saving, setSaving] = useState(false)

  const nextStep = () => {
    const isValid = validateForm()
    if (isValid) {
      setSaving(true)
      wait(3000).then(() => {
        setSaving(false)
        return history.push('/account/personal/edit-profile/location')
      })
    } else {
    }
  }

  const goBack = () => {
    history.push('/signup')
  }

  return !isLoaded ? (
    <Loading />
  ) : (
    <Layout
      title="Company Information"
      subtitle={
        <p>
          Your profile helps you find new people and <br /> oppurtunites
        </p>
      }
    >
      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow-md sm:rounded-lg sm:px-10">
          <div className="space-y-6">
            <FormInput
              label="Most recent job title"
              id="jobTitle"
              name="jobTitle"
              onChange={onChange}
              required
              type="text"
              error={errors.jobTitle}
              value={fields.jobTitle}
            />
            <div className="mt-6">
              <Selector
                label={'Job Type'}
                list={jobList}
                selectedItem={
                  fields.jobType.id
                    ? fields.jobType
                    : { id: 0, name: 'Select One' }
                }
                onSelect={(item) =>
                  setFields({
                    ...fields,
                    jobType: { id: item.id, name: item.name },
                  })
                }
              />
            </div>
            <FormInput
              label="Latest Company"
              id="latestCompany"
              name="latestCompany"
              onChange={onChange}
              error={errors.latestCompany}
              required
              value={fields.latestCompany}
            />

            <div>
              <Button
                onClick={nextStep}
                fullWidth
                rounded="rounded-lg"
                gradient
                loading={saving}
                label="Next Step"
              />
            </div>
          </div>
        </div>
        <div className="my-4">
          <Button
            onClick={goBack}
            rounded="rounded-lg"
            gradient
            size="sm"
            label="Go back"
          />
        </div>
      </div>
    </Layout>
  )
}

export default StudentSecondStep