import { createSlice } from '@reduxjs/toolkit'

const INITIAL_STATE = null

export const gettingStartedFreeTrialSlice = createSlice({
    name: 'getting_started_free_trial',
    initialState: { value: INITIAL_STATE },
    reducers: {
        gettingStartedClicked: (state, action) => {
            state.value = action.payload
        },
        resetGettingStarted: (state) => {
            state.value = INITIAL_STATE
        }
    }
})
export const { gettingStartedClicked, resetGettingStarted } = gettingStartedFreeTrialSlice.actions
export default gettingStartedFreeTrialSlice.reducer