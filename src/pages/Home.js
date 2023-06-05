import React, {useEffect} from 'react';
import InputComponent from "../components/InputComponent";
import {useSelector} from "react-redux";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import "./HomeStyle.css"
import {faCalendar, faHourglass, faStar, faThumbsUp} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Skeleton from "react-loading-skeleton";

const Home = () => {
    let isLoading = useSelector(state => state.popular1.isLoading)
    const data = useSelector(state => state.popular1.titleDetail)

    return (
        <>
            <InputComponent/>
            <div className="content">
                <div className="content-left">
                    <h2 className="content-title">{data.Title}</h2>
                    <div className="content-ratings">
                        <div>
                            <span>IMDB Rating: {data.imdbRating}</span>
                            <span><FontAwesomeIcon icon={faStar} /></span>
                        </div>
                        <div>
                            <span>IMDB Votes: {data.imdbVotes}</span>
                            <span><FontAwesomeIcon icon={faThumbsUp} /></span>
                        </div>
                        <div>
                            <span>RunTime: {data.Runtime}</span>
                            <span><FontAwesomeIcon icon={faHourglass} /></span>
                        </div>
                        <div>
                            <span>Year: {data.Year}</span>
                            <span><FontAwesomeIcon icon={faCalendar}/></span>
                        </div>
                    </div>
                    <p className="content-text">{data.Plot}</p>
                    <div className="content-description">
                        <div  className="content-description-item">
                            <span>Director</span>
                            <span>{data.Director}</span>
                        </div>
                        <div className="content-description-item">
                            <span>Stars</span>
                            <span>{data.Actors}</span>
                        </div>
                        <div className="content-description-item">
                            <span>Generes</span>
                            <span>{data.Genre}</span>
                        </div>
                        <div className="content-description-item">
                            <span>Languages</span>
                            <span>{data.Language}</span>
                        </div>
                        <div className="content-description-item">
                            <span>Awards</span>
                            <span>{data.Awards}</span>
                        </div>
                    </div>
                </div>
                {isLoading ? (<Skeleton width={300} height={400}/>) : (<div className="content-right"><LazyLoadImage src={data.Poster} alt="Img"/></div>)}

            </div>
        </>
    );
};

export default Home;