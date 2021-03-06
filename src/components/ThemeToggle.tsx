import { Switch } from '@headlessui/react'
import { classNames } from 'utils/classNames'

const Toggle = ({
  enabled,
  setEnabled,
  text,
  subText,
  className,
}: {
  enabled: boolean
  setEnabled: React.Dispatch<React.SetStateAction<boolean>>
  text: string
  subText?: string
  className?: string
}) => {
  // to set value to local star --- useState
  // to set value to storage --- localStorage

  // #1 - First load storage value
  // #2 - if value is 'dark' set value to true and add 'dark' class
  // #3 - if value is 'light' set value to false and remove 'dark' class
  // for on change values
  // #4 - if current value is 'dark' set value to false and remove 'dark' class and change value from localStorage
  // #4 - if current value is 'light' set value to true and add  'dark' class and change value from localStorage

  const changeTheme = () => {
    const html = document.querySelector('html')

    if (enabled) {
      setEnabled(false)
      html?.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    } else {
      setEnabled(true)
      html?.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    }
  }

  return (
    <Switch.Group
      as="div"
      className={`flex items-center justify-between ${className}`}
    >
      <span className="flex-grow flex flex-col items-start">
        <Switch.Label
          as="span"
          className="text-sm font-medium dark:text-white text-gray-900"
          passive
        >
          {text}
        </Switch.Label>
        <Switch.Description as="span" className="text-xs text-gray-500">
          {subText}
        </Switch.Description>
      </span>
      <Switch
        checked={enabled}
        onChange={changeTheme}
        className={classNames(
          enabled
            ? 'bg-gradient-to-r from-pink-500 to-yellow-500'
            : 'bg-gray-900',
          'relative inline-flex flex-shrink-0 h-4 w-9 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            enabled ? 'translate-x-5' : 'translate-x-0',
            'pointer-events-none inline-block h-3 w-3 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200'
          )}
        />
      </Switch>
    </Switch.Group>
  )
}
export default Toggle
