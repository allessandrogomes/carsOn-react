import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Advertisement from "./pages/Advertisement";
import DefaultPage from "./components/DefaultPage";


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultPage />}>
                    <Route index element={<Home />} />
                    <Route path="/advertisement" element={<Advertisement />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}