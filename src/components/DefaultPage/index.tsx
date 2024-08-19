import { Outlet } from 'react-router-dom'
import Header from '../Header'
import Footer from '../Footer'
import WarningModal from '../WarningModal'
import MaintenanceLabel from '../MaintenanceLabel'

export default function DefaultPage() {
  return (
    <div className="flex min-h-[100vh] flex-col justify-between">
      <header>
        <Header />
      </header>

      <main>
        <Outlet />
        <WarningModal />
        <MaintenanceLabel />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  )
}
