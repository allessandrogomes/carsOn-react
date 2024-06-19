import { Outlet } from "react-router-dom";
import ModalRegister from "../Main/ModalRegister";
import Header from "../Header";
import Footer from "../Footer";
import { useState } from "react";

export default function DefaultPage() {

    const [openModalRegister, setOpenModalRegister] = useState(false)

    return (
        <div className="flex flex-col min-h-[100vh] justify-between">
            <header>
                <Header openModalRegister={() => setOpenModalRegister(true)} />
            </header>

            <main>
                {openModalRegister && <ModalRegister onClose={() => setOpenModalRegister(false)} />}
                <Outlet />
            </main>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}