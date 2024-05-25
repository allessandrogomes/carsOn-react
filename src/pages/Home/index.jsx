import '../../styles.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import Header from "../../componentes/Header"
import Banner from "../../componentes/Main/Banner"
import SessionFilters from '../../componentes/Main/SessionFilters'
import SessionCars from '../../componentes/Main/SessionCars'
import Footer from '../../componentes/Footer'

export default function Home() {
    return (
        <div className="flex flex-col">
            <header>
                <Header />
            </header>

            <main>
                <Banner />
                <div className="flex">
                    <SessionFilters />
                    <SessionCars />
                </div>
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}