import { createSlice } from '@reduxjs/toolkit'

async function getData() {
  try {
    const response = await fetch('https://localhost:3001/users', {
      method: 'GET',
    })
    const data = response.json()
    return data
  } catch (error) {
    console.error('Não foi possível buscar os dados' + error)
    return []
  }
}

const initialState = await getData()

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
})

export default usersSlice.reducer
