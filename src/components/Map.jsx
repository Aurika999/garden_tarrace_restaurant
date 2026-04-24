import React from "react";

const Map = () => {
    return (
        <div className="contact_map">
            <div className="map_container">
                <iframe
                    title="The Garden Terrace Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10065.201429534252!2d4.204827357282314!3d50.89965827866388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c07bf8979945%3A0xf297a87e775cfaa9!2sKruiskouter%204%2C%201730%20Asse%2C%20Belgia!5e0!3m2!1sro!2sro!4v1774010542063!5m2!1sro!2sro"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>
        </div>
    );
};

export default Map;