import Navbar from "../components/header/Navbar";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";

function MainLayout() {
    return (
        <>
            <Navbar />
            <Outlet /> {/* Renders the nested route content */}
            <Footer />
        </>
    );
}

export default MainLayout;
