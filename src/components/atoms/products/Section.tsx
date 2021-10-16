import SectionTitle from 'components/atoms/SectionTitle'
import { LegacyRef } from 'react'

const Section = ({
  children,
  title = '',
  showChildren,
  // @ts-ignore
  noDataText = '',
  _ref,
}: {
  _ref?: LegacyRef<HTMLDivElement> | undefined
  showChildren?: boolean
  children: React.ReactNode
  title: string
  noDataText?: string
}) => {
  return (
    <div ref={_ref} className="py-16 ">
      <h2 className="sr-only">{title}</h2>
      <SectionTitle title={title} />

      {showChildren ? (
        <div className=" grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {children}
        </div>
      ) : (
        <p className="text-xl font-light mt-8 tracking-tight dark:text-gray-400 text-gray-900">
          {/* eslint-disable-next-line quotes */}
          {noDataText || "Uh oh! We coudn't find any products for this user"}
        </p>
      )}
    </div>
  )
}

export default Section
