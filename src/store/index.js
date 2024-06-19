import { configureStore } from '@reduxjs/toolkit'
import usersSlice from './reducers/users'
import advertisementsSlice from './reducers/advertisements'
import clickeAdSlice from './reducers/clickedAd'
import searchValueSlice from './reducers/searchValue'


const store = configureStore({
    reducer: {
        users: usersSlice,
        advertisements: advertisementsSlice,
        clickedAd: clickeAdSlice,
        searchValue: searchValueSlice
    }
})

export default store