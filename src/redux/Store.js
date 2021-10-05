import { configureStore } from '@reduxjs/toolkit'

//Importing reducers
import viewSignUpModalReducer from './features/view_sign_up'
import userLoginStatusReducer from './features/user_login_status'
import userGetStartedFreeTrial from './features/getting_started_free_trial'

const store = configureStore({
    reducer: {
        viewSignUpModal: viewSignUpModalReducer,
        userLoginStatus: userLoginStatusReducer,
        getStarted: userGetStartedFreeTrial,
    }
})
export default store