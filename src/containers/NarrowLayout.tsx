import { IParent } from 'interfaces/UniversalInterface'
import DashboardHeader from 'pages/DashboardHeader'
import CustomFooter from 'components/CustomFooter'
import Sidebar from 'components/Sidebar'

import React from 'react'

const NarrowLayout = ({
  children,
  userData,
  className = '',
  customMaxWidth = 'max-w-3xl',
  customParentMaxWidth = 'max-w-7xl',
}: {
  children: React.ReactNode
  className?: string
  customMaxWidth?: string
  customParentMaxWidth?: string
  userData?: IParent
}) => {
  return (
    <>
      <Sidebar />
      <div className="bg-gray-100 dark:bg-gray-900 py-24">
        {userData && <DashboardHeader userData={userData} />}

        <section
          className={`${className} ${customParentMaxWidth} mx-auto px-4  sm:px-6 lg:px-8 min-h-screen bg-gray-100 dark:bg-gray-900`}
        >
          {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
          <div className={`${customMaxWidth} py-12 mx-auto`}>{children}</div>
        </section>
        <CustomFooter />
      </div>
    </>
  )
}

export default NarrowLayout
