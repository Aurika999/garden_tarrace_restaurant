import Header from "../components/Header";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";


function Layout() {
    return (
        <>
            <Header />
            <MobileMenu/>
            <main>
                <Outlet />
            </main>
           <Footer/>
        </>
    );
}

export default Layout;