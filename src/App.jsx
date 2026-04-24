import {BrowserRouter, Routes, Route} from "react-router-dom";

import Layout from "./layout/Layout";
import Home from "./components/Home";
import Contact from "./pages/Contact";
import MenuPage from "./pages/ManuPage";
import "./styles/main_styles.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import About from "./pages/About";
import Blog from "./pages/Blog";

function App() {
    return (
        <BrowserRouter>

            <Routes>

                <Route path="/" element={<Layout />}>

                    <Route index element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="menu" element={<MenuPage />} />
                    <Route path="contact" element={<Contact />} />
                    <Route path="/blog" element ={<Blog />}/>

                </Route>

            </Routes>

        </BrowserRouter>
    );
}

export default App;