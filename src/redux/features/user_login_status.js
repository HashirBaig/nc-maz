import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = false

export const userLoginStatusSlice = createSlice({
    name: 'user_login_status',
    initialState: { value: INITIAL_STATE },
    reducers: {
        isUserLoggedIn: (state, action) => {
            state.value = action.payload
        },
        isUserLoggedOut: (state) => {
            state.value = INITIAL_STATE
        }
    }
})
export const { isUserLoggedIn, isUserLoggedOut } = userLoginStatusSlice.actions
export default userLoginStatusSlice.reducer