import React from "react";

const Hero = ({ title, subtitle, image, dark }) => {
  return (
    <div className="home">
      <div
        className="home_container"
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
            padding: "120px 0",
        }}
      >
        <div className={`container text-center ${dark ? "text-dark" : "text-white"}`}>
          {subtitle && <div className="home_subtitle page_subtitle">{subtitle}</div>}
          {title && (
            <div className="home_title">
              <h1>{title}</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Hero;