import React from 'react';
import "./CardStyle.css"

const Card = ({ name, img}) => {
    return (
        <div className="container">
            <div className="card">
                <img src={`https://image.tmdb.org/t/p/original${img}`} alt="image"/>{name}
            </div>
        </div>
    );
};

export default Card;