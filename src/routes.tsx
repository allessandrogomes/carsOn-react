import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Advertisement from './pages/Advertisement'
import DefaultPage from './components/DefaultPage'
import Register from './pages/Register'
import './styles.css'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path="/advertisement" element={<Advertisement />} />
        </Route>
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  )
}
