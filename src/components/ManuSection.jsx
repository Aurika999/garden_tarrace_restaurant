import React from "react";
import Dish from "./Dish";

const MenuSection = ({ title, dishes, image }) => {
    return (
        <div className="col-lg-4">

            <img src={image} alt={title} className="img-fluid"/>

            <h3 className="mt-3">{title}</h3>

            {dishes.map((dish, index) => (
                <Dish key={index} dish={dish} />
            ))}

        </div>
    );
};

export default MenuSection;