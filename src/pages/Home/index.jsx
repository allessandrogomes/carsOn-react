import '../../styles.css'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import Header from "../../components/Header"
import Banner from "../../components/Main/Banner"
import SessionFilters from '../../components/Main/SessionFilters'
import SessionCars from '../../components/Main/SessionCars'
import Footer from '../../components/Footer'
import { useState } from 'react'
import ModalRegister from '../../components/Main/ModalRegister'

export default function Home() {

    const [openModalRegister, setOpenModalRegister] = useState(false)

    return (
        <div className="flex flex-col">
            <header>
                <Header openModalRegister={() => setOpenModalRegister(true)}/>
            </header>

            <main>
                {openModalRegister && <ModalRegister onClose={() => setOpenModalRegister(false)}/>}
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