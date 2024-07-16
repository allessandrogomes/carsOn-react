import '../../styles.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import Banner from '../../components/Main/Banner'
import SessionFilters from '../../components/Main/SessionFilters'
import SessionCars from '../../components/Main/SessionCars'

export default function Home() {
  return (
    <div className="flex flex-col">
      <Banner />
      <div className="flex">
        <SessionFilters />
        <SessionCars />
      </div>
    </div>
  )
}
