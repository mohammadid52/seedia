import Button from 'components/atoms/Button'
import NormalFormInput from 'components/atoms/NormalFormInput'
import { useField } from 'formik'
import { map } from 'lodash'
import remove from 'lodash/remove'
import { nanoid } from 'nanoid'
import { useState } from 'react'
import { BiTrashAlt } from 'react-icons/bi'
const List = ({
  name,
  label,
  placeholder,
}: {
  placeholder?: string
  name: string
  label?: string
}) => {
  const [field, meta, helpers] = useField(name)

  const [features, setFeatures] = useState<{ name: string; id: string }[]>([])

  const { setTouched, setError: $setError, setValue } = helpers
  const [error, setError] = useState('')

  const [featureField, setFeatureField] = useState('')
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFeatureField(e.target.value)
    $setError(``)
    setError(``)
  }

  const onFeatureAdd = () => {
    if (featureField.length >= 10) {
      setError('')
      setFeatures((prev) => [...prev, { name: featureField, id: nanoid(4) }])
      setValue(features)
      setTouched(true)
      $setError(undefined)
      setFeatureField('')
    } else {
      setError(`${name} text must be at least 10 characters`)
    }
  }

  const onFeatureRemove = (featureId: string) => {
    remove(features, (f) => f.id === featureId)
    setFeatures((prev) => [...prev])
  }

  return (
    <div>
      {features && features.length > 0 && (
        <ol className="space-y-4 border dark:border-gray-700 border-gray-200 rounded-lg p-4  list-disc ">
          {map(features, (feature) => (
            <li
              className="flex items-center on-hover-container relative text-gray-900 dark:text-white  cursor-pointer text-left"
              key={feature.id}
            >
              <div className="">
                <span className="block text-gray-900 dark:text-gray-400 text-sm font-normal">
                  {feature.name}
                </span>
              </div>

              <span
                onClick={() => onFeatureRemove(feature.id)}
                className="absolute on-hover-item  pr-4 right-0"
              >
                <BiTrashAlt className="hover:bg-gray-700 p-2 h-8 w-8  rounded-md text-red-500" />
              </span>
            </li>
          ))}
        </ol>
      )}
      <div
        className={`flex mt-4 justify-start  ${
          !error ? 'items-end' : 'items-center'
        } rounded-md  gap-2`}
      >
        <NormalFormInput
          error={error}
          label={`Add ${label || name}`}
          value={featureField}
          id="tags"
          placeholder={`Enter ${placeholder || name}`}
          fullWidth
          className="w-full capitalize"
          onChange={onChange}
        />

        <Button
          onClick={onFeatureAdd}
          size="lg"
          invert
          className="w-32"
          gradient
          label="+ Add"
        />
      </div>
    </div>
  )
}

export default List
