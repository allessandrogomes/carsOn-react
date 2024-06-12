import { createSlice } from "@reduxjs/toolkit";

async function getData() {
    try {
        const response = await fetch('https://localhost:3001/advertisements', {
            method: 'GET'
        })
        const data = response.advertisements.json()
        return data
    } catch (error) {
        console.error('Não foi possível buscar os dados' + error)
        return []
    }
}

const initialState = await getData()

const advertisementsSlice = createSlice({
    name: 'advertisements',
    initialState,
    reducers: {

    }
})

export default advertisementsSlice.reducer