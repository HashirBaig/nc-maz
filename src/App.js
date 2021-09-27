import { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

//Importing Components
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/Login'
import SignupModal from './components/UserCredModals/SignupModal'
import UserDashboard from './pages/UserDashboardPage/UserDashboard'
import ProtectedRoute from './routes/ProtectedRoutes/ProtectedRoute'

function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/" component={HomePage}></Route>
          <Route exact path="/user/login" component={LoginPage}></Route>
          <Route exact path="/user/sign-up" component={SignupModal}></Route>
          <ProtectedRoute exact path='/user/dashboard' component={UserDashboard} />
        </Switch>
      </Router>
    </Fragment>
  )
}

export default App
