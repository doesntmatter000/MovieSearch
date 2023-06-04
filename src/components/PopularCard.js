import React from 'react';
import './DynamicCardStyle.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';


const PopularCard = ({img2, img, title, vote, releaseDate, text}) => {
    return (
        <Link to={`/details${img2}/${title}`} className="popCard">
            <LazyLoadImage effect="blur" src={`https://image.tmdb.org/t/p/original${img}`} alt="image"/>
            <div className="card-info">
                <h2>{title}</h2>
                <div className="card-flex">
                    <span>{vote} <FontAwesomeIcon icon={faStar} /></span>
                    <span>{releaseDate}</span>
                </div>
                <p>{text}</p>
            </div>
        </Link>
    );
};

export default PopularCard;