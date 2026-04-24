// import React, { useState } from "react";
// import Hamburger from "./Hamburger";
// import { Link } from "react-router-dom";
// import "../styles/menu.css";
//
// const MobileMenu = () => {
//     const [isOpen, setIsOpen] = useState(false);
//
//     const toggleMenu = () => {
//         setIsOpen(!isOpen);
//     };
//
//     return (
//         <>
//             <Hamburger isOpen={isOpen} toggleMenu={toggleMenu} />
//
//             <div className={`menu ${isOpen ? "active" : ""}`}>
//                 <div className="menu_content text-center">
//                     <ul>
//                         <li><Link to="/">Acasă</Link></li>
//                         <li><Link to="/about">Despre noi</Link></li>
//                         <li><Link to="/menu">Meniu</Link></li>
//                         <li><Link to="/delivery">Livrare</Link></li>
//                         <li><Link to="/blog">Blog</Link></li>
//                         <li><Link to="/contact">Contact</Link></li>
//                     </ul>
//                 </div>
//
//                 <div className="menu_reservations_phone">
//                     Rezervări: +40 123 456 789
//                 </div>
//             </div>
//         </>
//     );
// };
//
// export default MobileMenu;

import React from "react";
import { Link } from "react-router-dom";
const MobileMenu = ({ isOpen, closeMenu }) => {
    return (
        <div className={`menu ${isOpen ? "active" : ""}`}>
            <div className="menu_content d-flex flex-column align-items-center justify-content-center text-center">
                <ul>
                    <li><Link to="/" onClick={closeMenu}>Acasă</Link></li>
                    <li><Link to="/about" onClick={closeMenu}>Despre noi</Link></li>
                    <li><Link to="/menu" onClick={closeMenu}>Meniu</Link></li>
                    <li><Link to="/blog" onClick={closeMenu}>Blog</Link></li>
                    <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
                </ul>
            </div>

            <div className="menu_reservations_phone">
                Rezervări: +40 123 456 789
            </div>
        </div>
    );
};

export default MobileMenu;