import React from "react";
import chef1 from "../assets/images/chef_1.jpg";
import chef2 from "../assets/images/chef_2.jpg";
import chef3 from "../assets/images/chef_3.jpg";
import chef4 from "../assets/images/chef_4.jpg";

const Chefs = () => {
    const chefs = [
        { img: chef1, name: "Maria Smith", role: "Top Chef" },
        { img: chef2, name: "William Jones", role: "Sauce Chef" },
        { img: chef3, name: "Julien Williams", role: "Sushi Chef" },
        { img: chef4, name: "Suzie James", role: "Sauce Chef" },
    ];

    return (
        <div className="chefs">
            <div className="container">
                <div className="row">
                    <div className="col text-center">
                        <div className="section_title_container">
                            <div className="section_subtitle page_subtitle">
                                Something new
                            </div>
                            <div className="section_title">
                                <h1>Meet the Chefs</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row chefs_text_row">
                    <div className="col-lg-6">
                        <div className="chefs_text">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="chefs_text">
                            <p>
                                Sit amet, consectetur adipiscing elit. Donec malesuada lorem maximus mauris scelerisque, at rutrum nulla dictum.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="row chefs_row row-eq-height">
                    {chefs.map((chef, index) => (
                        <div
                            key={index}
                            className="col-xl-3 col-md-6 chef_col d-flex flex-column align-items-center justify-content-end"
                        >
                            <div className="chef">
                                <div className="chef_image">
                                    <img src={chef.img} alt={chef.name} />
                                </div>
                                <div className="chef_content text-center">
                                    <div className="chef_name">{chef.name}</div>
                                    <div className="chef_subtitle">{chef.role}</div>
                                    <div className="chef_button ml-auto mr-auto trans_400">
                                        <a href="#">see more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Chefs;