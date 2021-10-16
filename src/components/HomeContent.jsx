import { Fragment } from 'react'

const HomeContent = () => {
  return (
    <Fragment>
      <div className="dark:bg-gray-900">
        <div className="text-center pt-12 pb-4 flex items-center flex-col">
          <img
            alt="13RMS"
            src={process.env.PUBLIC_URL + '/logo.png'}
            className="m-0 h-36"
          />
          <p className="dark:text-gray-300 max-w-xl mt-5 mx-auto text-base text-gray-500">
            The place to sell your products, services and build business
            relationships
          </p>
        </div>
      </div>
    </Fragment>
  )
}

export default HomeContent
