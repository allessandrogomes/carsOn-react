import { configureStore } from '@reduxjs/toolkit'
import usersSlice from './reducers/users'
import advertisementsSlice from './reducers/advertisements'


const store = configureStore({
    reducer: {
        users: usersSlice,
        advertisements: advertisementsSlice
    }
})

export default store