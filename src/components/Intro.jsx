import React from "react";
import aboutIntro from "../assets/images/restaurant_cafe.jpeg";
import "../styles/about_responsive.css";

const Intro = () => {
    return (
            <div className="intro">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="intro_content">
                                <div className="intro_subtitle page_subtitle_intro">
                                    O experienta extraordinara.
                                </div>
                                <div className="intro_text">
                                    <p>
                                        Descoperiți rafinamentul gusturilor!
                                        La restaurantul nostru, vă oferim o experiență culinară deosebită, unde preparatele fine se îmbină cu o atmosferă elegantă și primitoare.
                                        Organizăm evenimente private:
                                        Zile de naștere, Nunți, Botezuri.
                                        Vă așteptăm să savurați momente speciale și servicii de calitate!
                                    </p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-lg-8">
                                    <div className="intro_image">
                                        <img src={aboutIntro} alt="About Intro"/>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            );
            };

            export default Intro;