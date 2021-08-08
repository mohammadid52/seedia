import React, { lazy, useEffect } from 'react'
// import 'bootstrap/dist/css/bootstrap.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
// import Loading from 'components/Loading'
import Dashboard from 'pages/dashboard'
import NotFound from 'pages/NotFound'
import BusinessStepOne from 'pages/account/business/StepOne'
import BusinessStepTwo from 'pages/account/business/StepTwo'
import ChooseAccount from 'pages/account/other/ChooseAccount'
import { useUserContext } from 'context/UserContext'
// import BusinessStepTwo from 'pages/account/business/StepTwo'

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

  return (
    <Router>
      <Switch>
        {/* This is common page */}
        <Route exact path="/" component={Welcome} />
        <Route exact path="/login">
          <Login setToken={() => {}} />
        </Route>

        <Route exact path="/signup" component={Signup} />
        <Route exact path="/dashboard" component={Dashboard} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/choose-account" component={ChooseAccount} />
        {/* <Route exact path="/email-verification" component={EmailVerification} /> */}

        {/* Personal Account routes */}
        <Route
          path="/account/personal/edit-profile/company"
          component={PersonalSecondStep}
        />
        <Route path="/account/personal/edit-profile/location">
          <LocationStep accountType="personal" />
        </Route>

        {/* Student Account routes */}
        <Route
          path="/account/student/edit-profile/education"
          component={EducationStep}
        />
        <Route path="/account/student/edit-profile/location">
          <LocationStep accountType="student" />
        </Route>

        {/* Business Account routes */}
        <Route
          path="/account/business/edit-profile/stepOne"
          component={BusinessStepOne}
        />
        <Route
          path="/account/business/edit-profile/stepTwo"
          component={BusinessStepTwo}
        />

        {/* Error Page */}
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App
