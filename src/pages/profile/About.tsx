import Card from 'components/atoms/Card'
import React from 'react'
import faker from 'faker'
import Button from 'components/atoms/Button'
import { AiOutlineEdit } from 'react-icons/ai'

const About = () => {
  return (
    <Card
      cardTitle="About"
      withCardHeadings={
        <>
          <Button
            secondary
            className="mr-3"
            invert
            bgColor="gray"
            Icon={AiOutlineEdit}
            size="sm"
            label={'Edit'}
          />
        </>
      }
      content={
        <div className="space-y-4">
          <div className="current-company">
            <span className="title block text-gray-400 text-sm">Current</span>
            <span className="data block text-sm  text-gray-900 dark:text-white ">
              {faker.company.companyName()}
            </span>
          </div>
          <div className="current-company">
            <span className="title block text-gray-400 text-sm">Previous</span>
            <span className="data block text-sm  text-gray-900 dark:text-white">
              {faker.company.companyName()}
            </span>
          </div>

          <div className="current-company">
            <span className="title block text-gray-400 text-sm">Education</span>
            <span className="data block text-sm  text-gray-900 dark:text-white">
              {faker.name.jobArea()}
            </span>
          </div>
          <div className="current-company">
            <span className="title block text-gray-400 text-sm">Lives In</span>
            <span className="data block text-sm  text-gray-900 dark:text-white">
              {faker.address.secondaryAddress()}
            </span>
          </div>
          <div className="current-company">
            <span className="title block text-gray-400 text-sm">
              Marital Status
            </span>
            <span className="data block text-sm  text-gray-900 dark:text-white">
              Married
            </span>
          </div>
        </div>
      }
    />
  )
}

export default About
