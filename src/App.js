import { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import './App.css'

//Importing Components
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/Login'
import SignupModal from './components/UserCredModals/SignupModal'
import UserDashboard from './pages/UserDashboardPage/UserDashboard'
import MenuBar from './components/MenuBarComponent/MenuBar'

//Importing Routes
import ProtectedRoute from './routes/ProtectedRoutes/ProtectedRoute'
import { publicRoutes, protectedRoutes } from './routes/ConfigRoutes/configRoutes'

function App() {
  const openModal = useSelector((state) => state.viewSignUpModal.value)
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path={publicRoutes.landingPage} component={HomePage}></Route>
          <Route
            exact path={publicRoutes.userLoginPage}
            render={props =>
              <>
                <MenuBar />
                {
                  (openModal) ? <SignupModal /> : <LoginPage />
                }
              </>
            }
          >
          </Route>
          <Route exact path={publicRoutes.userSignUpPage} component={SignupModal}></Route>
          <ProtectedRoute exact path={protectedRoutes.userDashboardPage} component={UserDashboard} />
        </Switch>
      </Router>
    </Fragment >
  )
}

export default App
