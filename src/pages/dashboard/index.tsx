import Loading from 'components/Loading'
import Sidebar from 'components/Sidebar'
import SideCard from 'components/SideCard'
import useUser from 'hooks/useUser'
import { IParent, NavProps } from 'interfaces/UniversalInterface'
import ListPosts from 'pages/dashboard/ListPosts'
import DashboardHeader from 'pages/DashboardHeader'
import DashboardLayout from 'pages/DashboardLayout'
import PersonalCard from './AboutMe'
import PostInput from './PostInput'

interface DashboardProps extends NavProps {
  userData: IParent
}

const Dashboard = ({ userData }: DashboardProps) => {
  const { isFetched, isLoading, iAmOwnerOfThisProfile } = useUser(
    userData._id,
    userData
  )

  if (isLoading && !isFetched) {
    return <Loading />
  }

  return (
    <div className="relative  dark:bg-gray-900 bg-gray-100 min-h-screen ">
      <DashboardHeader userData={userData} />

      <Sidebar />

      <div
        className={`h-auto pt-4 relative flow-root  transition-all duration-500 `}
      >
        <DashboardLayout
          firstColClass={`max-h-152 lg:block  xl:block w-full  `}
          firstCol={
            <div className="flex flex-col gap-y-12">
              <PersonalCard
                authUser={iAmOwnerOfThisProfile}
                userData={userData}
              />
              {/* <GroupList secondary userId={userData._id} /> */}
            </div>
          }
          secondCol={
            <div className="flex gap-y-4 mx-auto lg:max-w-2xl  flex-col">
              <PostInput
                fullName={userData.fullName}
                profilePicture={userData?.profilePicture}
              />
              <ListPosts userData={userData} />
            </div>
          }
          thirdCol={
            <div className="space-y-12">
              <SideCard />
              <SideCard />
            </div>
          }
        />
      </div>
    </div>
    // </Sidebar>
  )
}

export default Dashboard
