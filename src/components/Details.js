import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getTitleDetail} from "../features/slice";
import "./DetailsStyel.css"
import 'react-loading-skeleton/dist/skeleton.css'
import Skeleton from "react-loading-skeleton";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faClock, faHandPointUp, faHeart, faStar} from "@fortawesome/free-solid-svg-icons";


const Details = () => {{}
    const data = useParams()
    const dispatch = useDispatch()
    const movieDetail = useSelector(state => state.popular1.titleDetail)
    const isLoading = useSelector(state => state.popular1.isLoading)


    useEffect(() => {
        dispatch(getTitleDetail(data.title))
    },[])

    return (
        <div>
            <div className="detail-images">
                {!movieDetail ? <Skeleton width={100} height={460}/> : <img src={`https://image.tmdb.org/t/p/original/${data.img2}`} alt="image"/>}
                <div className="image-content">
                    <h2>{isLoading ? <Skeleton width={100} height={20}/> : movieDetail.Title === "N/A" ? " " : movieDetail.Title}</h2>
                    <p>{isLoading ? <Skeleton width={100} height={20}/> : movieDetail.Plot === "N/A" ? " " : movieDetail.Plot + "..."}</p>
                </div>
            </div>
            {isLoading ? <Skeleton height={50} width={100}/> :
                <div className="detail-info">
                <span>Metascore: {movieDetail.Metascore}<FontAwesomeIcon icon={faHandPointUp} /></span>
                <span>imdbRating: {movieDetail.imdbRating}<FontAwesomeIcon icon={faStar} /></span>
                <span>imdbVotes: {movieDetail.imdbVotes}<FontAwesomeIcon icon={faHeart} /></span>
                <span>Runtime: {movieDetail.Runtime}<FontAwesomeIcon icon={faClock} /></span>
            </div>}
            {isLoading ? <Skeleton w={100} height={170}/> :
                <div className="detail-info2">
                    <div className="detail-info2-left">
                        <div>
                            <span>Writers</span> - {movieDetail.Writer}
                        </div>
                        <div>
                            <span>Director</span> - {movieDetail.Director}
                        </div>
                        <div>
                            <span>Actors</span> - {movieDetail.Actors}
                        </div>
                        <div>
                            <span>Country</span> - {movieDetail.Country}
                        </div>
                    </div>
                    <div className="detail-info2-right">
                        <p>{movieDetail.Plot}</p>
                    </div>
                </div>}
        </div>
    );
};

export default Details;