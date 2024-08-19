import axios from 'axios'

const apiService = axios.create({
  baseURL: 'https://carson-api.vercel.app',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
})

export default apiService
