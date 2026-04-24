import React from "react";

const Dish = ({ dish }) => {
    return (
        <div className="dish mb-4">

            <div className="d-flex justify-content-between">
                <h5>{dish.name}</h5>
                <span>${dish.price}</span>
            </div>

            <ul className="d-flex gap-2 list-unstyled">
                {dish.ingredients.map((ing, i) => (
                    <li key={i}>{ing}</li>
                ))}
            </ul>

            <button className="btn btn-primary btn-sm">
                Order Now
            </button>

        </div>
    );
};

export default Dish;