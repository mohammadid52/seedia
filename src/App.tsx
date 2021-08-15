import { lazy, useEffect } from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { IProfileOne, IProfileTwo } from 'interfaces/UniversalInterface'
import Dashboard from 'pages/dashboard'
import NotFound from 'pages/NotFound'
import BusinessStepOne from 'pages/account/business/StepOne'
import BusinessStepTwo from 'pages/account/business/StepTwo'
import ChooseAccount from 'pages/account/other/ChooseAccount'
import { useUserContext } from 'context/UserContext'
import ProfileTwo from 'pages/profile/ProfileTwo'
import DashboardHeader from 'pages/DashboardHeader'
import { useRouter } from 'hooks/useRouter'
import Navigation from 'components/Navigation'
import faker from 'faker'
import { isEmpty, map } from 'lodash'
import PrivateRoute from 'routes/PrivateRoute'
import AuthContainer from 'containers/AuthContainer'
import { getAuth } from 'helpers'
import { useSelector } from 'react-redux'

const Welcome = lazy(() => import('pages/Welcome'))
const Profile = lazy(() => import('pages/profile'))
const Signup = lazy(() => import('pages/Signup'))
const Login = lazy(() => import('pages/Login'))
const PersonalSecondStep = lazy(
  () => import('pages/account/personal/CompanyStep')
)
const LocationStep = lazy(() => import('pages/account/personal/LocationStep'))
const EducationStep = lazy(() => import('pages/account/student/EducationStep'))

library.add(fas)

const profileOne: IProfileOne = {
  about: {
    fullName: faker.name.findName(),
    email: faker.internet.email(),
    companyName: faker.company.companyName(),
    currentCompany: faker.company.companyName(),
    previousCompany: faker.company.companyName(),
    livesIn: faker.address.cityName(),
    maritalStatus: 'Married',
    coverPicture: faker.image.nature(),
    userImage: faker.image.avatar(),
    jobTitle: faker.name.jobTitle(),
    profileViews: faker.datatype.number(6000),
    projects: faker.datatype.number(100),
    connections: faker.datatype.number(10000),
    companyAddress: faker.address.streetAddress(),
  },

  background: {
    interests: [
      { name: 'Branding' },
      { name: 'Web Design' },
      { name: 'Mobile Design' },
      { name: 'Development' },
    ],
    summary: faker.lorem.paragraph(),
    experience: [
      {
        jobTitle: faker.name.jobTitle(),
        companyName: faker.company.companyName(),
        startedAt: faker.date.past().getFullYear().toString(),
        endedAt: faker.date.past().getFullYear().toString(),
        description: faker.lorem.paragraph(2),
        companyAddress: '',
      },
      {
        jobTitle: faker.name.jobTitle(),
        companyName: faker.company.companyName(),
        startedAt: faker.date.past().getFullYear().toString(),
        endedAt: faker.date.past().getFullYear().toString(),
        description: faker.lorem.paragraph(2),
        companyAddress: '',
      },
    ],
  },

  peopleAlsoViewed: [
    {
      image: faker.image.avatar(),
      fullName: faker.name.findName(),
      jobType: faker.name.jobType(),
    },
    {
      image: faker.image.avatar(),
      fullName: faker.name.findName(),
      jobType: faker.name.jobType(),
    },
    {
      image: faker.image.avatar(),
      fullName: faker.name.findName(),
      jobType: faker.name.jobType(),
    },
    {
      image: faker.image.avatar(),
      fullName: faker.name.findName(),
      jobType: faker.name.jobType(),
    },
    {
      image: faker.image.avatar(),
      fullName: faker.name.findName(),
      jobType: faker.name.jobType(),
    },
    {
      image: faker.image.avatar(),
      fullName: faker.name.findName(),
      jobType: faker.name.jobType(),
    },
    {
      image: faker.image.avatar(),
      fullName: faker.name.findName(),
      jobType: faker.name.jobType(),
    },
    {
      image: faker.image.avatar(),
      fullName: faker.name.findName(),
      jobType: faker.name.jobType(),
    },
  ],
  recommendation: {
    received: [
      {
        text: faker.lorem.paragraph(2),
        user: {
          fullName: faker.name.findName(),
          userImage: faker.image.avatar(),
        },
      },
      {
        text: faker.lorem.paragraph(2),
        user: {
          fullName: faker.name.findName(),
          userImage: faker.image.avatar(),
        },
      },
    ],
    given: [
      {
        text: faker.lorem.paragraph(2),
        user: {
          fullName: faker.name.findName(),
          userImage: faker.image.avatar(),
        },
      },
      {
        text: faker.lorem.paragraph(2),
        user: {
          fullName: faker.name.findName(),
          userImage: faker.image.avatar(),
        },
      },
    ],
  },
}

const poAbout = profileOne.about

const profileTwo: IProfileTwo = {
  about: {
    fullName: poAbout.fullName,
    email: poAbout.email,
    companyName: poAbout.companyName,
    companyAddress: poAbout.companyAddress,
    jobTitle: poAbout.jobTitle,
    userImage: poAbout.userImage,
  },
  languages: [
    {
      langName: 'English',
      langLevel: 'Full Professional Profiency',
    },
    { langName: 'French', langLevel: 'Intermediate' },
    { langName: 'Spanish', langLevel: 'Intermediate' },
    { langName: 'Polish', langLevel: 'Full Professional Profiency' },
  ],

  awards: [
    {
      awardName: 'Behance Interaction Featured',
      awardFor: 'User Interface Design',
    },
    { awardName: 'Behance Product Design Featured', awardFor: 'Web Design' },
    { awardName: 'Site Of The Month by Awwwards', awardFor: 'Web Design' },
    {
      awardName: 'CSS Beauty Award',
      awardFor: 'UI / User Experience Design',
    },
  ],
  skills: [
    {
      id: faker.datatype.uuid(),
      name: 'User Interface Design',
    },
    {
      id: faker.datatype.uuid(),
      name: 'Web Design',
    },
    {
      id: faker.datatype.uuid(),
      name: 'Mobile Design',
    },
    {
      id: faker.datatype.uuid(),
      name: 'User Experience Knowledge',
    },
    {
      id: faker.datatype.uuid(),
      name: 'CSS / HTML',
    },
    {
      id: faker.datatype.uuid(),
      name: 'Fast Learning',
    },
  ],

  experience: map(profileOne.background.experience, (exp) => ({
    ...exp,
    companyAddress: faker.address.streetAddress(),
  })),
  peopleAlsoViewed: [...profileOne.peopleAlsoViewed],
  education: [
    {
      from: `${faker.date.past().getFullYear()}`,
      to: `${faker.date.past().getFullYear()}`,
      name: `Massachusetts Institue of Technology (MIT)`,
      degree:
        'Master of Fine Arts,Design and Technology, 77 Massachusetts Ave, USA',
    },
    {
      from: `${faker.date.past().getFullYear()}`,
      to: `${faker.date.past().getFullYear()}`,
      name: `Stanford University`,
      degree: 'Bachelor of Fine Arts,Stanford, USA',
    },
  ],
}

const App = () => {
  const { setDarkMode } = useUserContext()

  useEffect(() => {
    const loadTheme = () => {
      const theme = localStorage.getItem('theme')

      const html = document.querySelector('html')

      if (theme) {
        if (theme === 'dark') {
          setDarkMode(true)
          html?.classList.add('dark')
        } else {
          setDarkMode(false)
          html?.classList.remove('dark')
        }
      }
    }
    loadTheme()
    return () => loadTheme()
  }, [setDarkMode])

  const RenderNav = ({ isUser }: { isUser?: boolean }) => {
    const router = useRouter()
    const atHome = router.pathname === '/'
    const atAuthPages =
      router.pathname.includes('account') ||
      router.pathname.includes('edit-profile')
    return atHome ? (
      <Navigation isUser={isUser} />
    ) : atAuthPages ? null : (
      <DashboardHeader about={profileOne.about} />
    )
  }

  const auth = useSelector((state) => getAuth(state))

  const isUser = !isEmpty(auth.user)

  return (
    <Router>
      <AuthContainer>
        <>
          <RenderNav isUser={isUser} />
          <Switch>
            {/* This is common page */}
            <Route exact path="/" component={Welcome} />

            {/* @ts-ignore */}
            <PrivateRoute isPublic isUser={isUser} exact path="/login">
              <Login />
            </PrivateRoute>

            <PrivateRoute
              isPublic
              isUser={isUser}
              // @ts-ignore
              exact
              path="/signup"
            >
              <Signup />
            </PrivateRoute>
            <PrivateRoute
              // @ts-ignore
              exact
              isUser={isUser}
              path="/dashboard"
            >
              <Dashboard user={profileOne} />
            </PrivateRoute>
            {/* @ts-ignore */}
            <PrivateRoute isUser={isUser} exact path="/profile/1">
              <Profile user={profileOne} />
            </PrivateRoute>
            {/* @ts-ignore */}
            <PrivateRoute isUser={isUser} exact path="/profile/2">
              <ProfileTwo user={profileTwo} />
            </PrivateRoute>
            <PrivateRoute
              // @ts-ignore
              exact
              isUser={isUser}
              path="/choose-account"
              component={ChooseAccount}
            />
            {/* <Route exact path="/email-verification" component={EmailVerification} /> */}

            {/* Personal Account routes */}
            <PrivateRoute
              // @ts-ignore
              path="/account/personal/edit-profile/company"
              isUser={isUser}
              component={PersonalSecondStep}
            />
            {/* @ts-ignore */}
            <PrivateRoute path="/account/personal/edit-profile/location">
              <LocationStep accountType="personal" />
            </PrivateRoute>

            {/* Student Account routes */}
            <PrivateRoute
              // @ts-ignore
              path="/account/student/edit-profile/education"
              isUser={isUser}
              component={EducationStep}
            />
            <PrivateRoute
              // @ts-ignore
              path="/account/student/edit-profile/location"
              isUser={isUser}
            >
              <LocationStep accountType="student" />
            </PrivateRoute>

            {/* Business Account routes */}
            <PrivateRoute
              // @ts-ignore
              path="/account/business/edit-profile/stepOne"
              isUser={isUser}
              component={BusinessStepOne}
            />
            <PrivateRoute
              // @ts-ignore
              path="/account/business/edit-profile/stepTwo"
              component={BusinessStepTwo}
              isUser={isUser}
            />

            {/* Error Page */}
            <Route component={NotFound} />
          </Switch>
        </>
      </AuthContainer>
    </Router>
  )
}

export default App
