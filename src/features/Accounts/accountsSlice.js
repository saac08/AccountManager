import { createSlice } from '@reduxjs/toolkit'

const initialState = []

export const accountSlice = createSlice({
    name: 'accounts',
    initialState,
    reducers: {
        addAccount: (state, action) => {
            state.push(action.payload);

        },
        editAccount: (state, action) => {
            const { id, title, link, password } = action.payload

            const fountAccount = state.find(account => account.id === id)
            if (fountAccount) {
                fountAccount.title = title
                fountAccount.link = link
                fountAccount.password = password
            }
        },
        deleteAccount: (state, action) => {
            const accountFound = state.find(account => account.id === action.payload)
            if (accountFound) {
                state.splice(state.indexOf(accountFound), 1)
            }
        },

    }
})

export const { addAccount, deleteAccount, editAccount } = accountSlice.actions
export default accountSlice.reducer