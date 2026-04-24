import React from "react";

const Hamburger = ({ isOpen, toggleMenu }) => {
    return (
        <div className="hamburger_bar trans_400 d-flex flex-row align-items-center justify-content-start">
            <div className="hamburger" onClick={toggleMenu}>
                <div className="menu_toggle d-flex flex-row align-items-center justify-content-start">
                    <span>menu</span>

                    <div className="hamburger_container">
                        <div className={`menu_hamburger ${isOpen ? "active" : ""}`}>
                            <div className="line_1 hamburger_lines"></div>
                            <div className="line_2 hamburger_lines"></div>
                            <div className="line_3 hamburger_lines"></div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Hamburger;