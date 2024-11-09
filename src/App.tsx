import { Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./components/Header/Header.tsx";
import { Main } from "./views/main/Main.tsx";
import { Map } from "./views/map/Map.tsx";
import "./i18n";
import "leaflet/dist/leaflet.css";

function App() {
    return (
        <BrowserRouter
            future={{
                v7_relativeSplatPath: true,
                v7_startTransition: true,
            }}
        >
            <Header />
            <Suspense fallback={<div />}>
                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path="/map" element={<Map />} />
                </Routes>
            </Suspense>
        </BrowserRouter>
    );
}

export default App;
