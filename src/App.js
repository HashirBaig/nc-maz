import { Fragment } from 'react'
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage/HomePage'
import LoginPage from './pages/LoginPage/Login'
import UserDashboard from './pages/UserDashboardPage/UserDashboard'


function App() {
  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path='/' component={HomePage}></Route>
          <Route exact path='/user/login' component={LoginPage}></Route>
          <Route exact path='/user/dashboard' component={UserDashboard}></Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
