import React from "react";
import signatureDish from "../assets/images/poza_dish1.jpeg";
import "../styles/signature.css";

const SignatureDish = () => {
    return (
        <div className="sig">

            {/* CONTENT */}
            <div className="sig_content_container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">

                            <div className="sig_content">
                                {/*<div className="sig_subtitle page_subtitle">*/}
                                {/*    Ceva nou*/}
                                {/*</div>*/}

                                {/*<div className="sig_title">*/}
                                {/*    <h1>Preparatul nostru special</h1>*/}
                                {/*</div>*/}
                                <div className="intro_subtitle page_subtitle_intro">
                                   Platou pentru masa festiva.
                                </div>

                                <div className="rating_r sig_rating rating_r_5">
                                    <i></i><i></i><i></i><i></i><i></i>
                                </div>

                                {/*<div className="sig_name_container d-flex flex-row align-items-start justify-content-start">*/}
                                  <div className="sig_content_list">
                                <div>
                                        Un platou tradițional, bogat și apetisant, este așezat cu grijă pe o masă festivă. În centrul lui se află friptură din carne de porc, frumos rumenită, cu o crustă aurie și ușor crocantă. Feliile sunt tăiate uniform, dezvăluind un interior suculent, bine condimentat, în care aromele de usturoi și mirodenii se îmbină perfect.
                                        Alături, bucăți generoase de șoric proaspăt atrag privirea prin textura lor lucioasă și elastică, fiind ușor sărate și incredibil de fragede.
                                        Nu lipsesc cârnații bine condimentați, care completează armonios platoul prin culoarea lor apetisantă și aroma intensă.
                                        Preparatele sunt decorate cu frunze proaspete de pătrunjel și salată verde, iar în mijloc tronează un mic ornament din morcov sculptat, însoțit de o măslină, care adaugă un plus de eleganță și rafinament.
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
            </div>

            {/* IMAGE */}
            <div className="sig_image_container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7 offset-lg-5">

                            <div className="sig_image">

                                {/* 🔥 FUNDAL IMPORTANT */}
                                <div
                                    className="background_image"
                                    style={{ backgroundImage: `url(${signatureDish})` }}
                                ></div>

                                {/* fallback (ascuns din CSS) */}
                                <img src={signatureDish} alt="Signature Dish" />

                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignatureDish;