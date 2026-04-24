import React from "react";
import testimonialsBg from "../assets/images/testimonials.jpg";
import quoteImg from "../assets/images/quote.png";

const Testimonials = () => {
    return (
        <div className="testimonials">
            <div
                className="parallax_background"
                style={{
                    backgroundImage: `url(${testimonialsBg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            ></div>

            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <div className="section_title_container">
                            <div className="page_subtitle_intro">
                                Ce spun clientii
                            </div>
                            <div className="section_title">
                                <h2>Testimoniale</h2>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row testimonials_row">
                    <div className="col-lg-10 offset-lg-1">
                        <div className="test_slider_container">
                            <div className="text-center">
                                <div className="quote ml-auto mr-auto">
                                    <img src={quoteImg} alt="quote" />
                                </div>

                                <div className="test_text">
                                    <p>
                                        "Am avut onoarea să ne sărbătorim nunta la acest restaurant și nu putem decât să recomandăm cu toată inima! Atmosfera a fost magică, decorul impecabil, iar personalul extrem de atent și profesionist. Meniul a fost delicios, servirea ireproșabilă, iar fiecare detaliu a fost gestionat cu grijă. A făcut ca ziua noastră specială să fie cu adevărat de neuitat. Mulțumim întregii echipe pentru o experiență perfectă!”
                                    </p>
                                </div>

                                <div className="test_info">
                                    Aliona, <span>voi reveni si pentru alte evenimente</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;