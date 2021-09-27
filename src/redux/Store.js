import { configureStore } from '@reduxjs/toolkit'
import viewSignUpModalReducer from './features/view_sign_up'
import userLoginStatusReducer from './features/user_login_status'

const store = configureStore({
    reducer: {
        viewSignUpModal: viewSignUpModalReducer,
        userLoginStatus: userLoginStatusReducer,
    }
})
export default store