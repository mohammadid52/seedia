import React from 'react'

const Card = ({
  cardTitle,
  content,
  disablePadding = false,
  withCardHeadings = false,
  cardTitleStyles = '',
  className = '',
  id = '',
  secondary = false,
  style,
}: {
  cardTitle?: string
  className?: string
  content?: React.ReactNode
  withCardHeadings?: boolean | React.ReactNode
  disablePadding?: boolean
  cardTitleStyles?: string
  id?: string
  secondary?: boolean
  style?: any
}) => {
  return (
    <div
      style={{ ...style }}
      id={id}
      className={`${
        disablePadding ? 'py-6' : 'p-6'
      }  bg-white dark:bg-gray-700 h-full rounded-md ${className}`}
    >
      {cardTitle && (
        <>
          <div className="flex items-center justify-between">
            <h4
              className={`${disablePadding ? 'px-6' : ''}  leading-6 ${
                secondary
                  ? 'uppercase tracking-wider text-xs text-gray-400 font-medium'
                  : 'text-lg font-medium text-gray-900 dark:text-white'
              }   ${cardTitleStyles}`}
            >
              {cardTitle}
            </h4>
            {withCardHeadings ? (
              <div className="flex-shrink-0 flex">{withCardHeadings}</div>
            ) : (
              <div className="w-auto" />
            )}
          </div>
          <hr
            className={`${
              disablePadding ? 'mx-6' : ''
            } gradient-border bottom text-gray-500 my-4`}
          />
        </>
      )}
      {content}
    </div>
  )
}

export default React.memo(Card)
