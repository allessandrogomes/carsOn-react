import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'

export default function DefaultPage() {
  return (
    <div className="flex min-h-[100vh] flex-col justify-between">
      <header>
        <Header />
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}
