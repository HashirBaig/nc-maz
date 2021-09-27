import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = false

export const viewSignUpSlice = createSlice({
    name: 'view_sign_up',
    initialState: { value: INITIAL_STATE },
    reducers: {
        openSignUpModal: (state, action) => {
            state.value = action.payload
        },
        closeSignUpModal: (state) => {
            state.value = INITIAL_STATE
        }
    }
})
export const { openSignUpModal, closeSignUpModal } = viewSignUpSlice.actions
export default viewSignUpSlice.reducer