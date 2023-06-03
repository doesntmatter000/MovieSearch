import React, {useEffect} from 'react';
import {Carousel} from "react-responsive-carousel";
import {useDispatch, useSelector} from "react-redux";
import Card from "../components/card";
import DynamicCard from "../components/popularCard";
import "./DynamicStyle.css"
import SkeletonCard from "../components/SkeletonCard";

const DynamicContent = ({get, data}) => {
    const index = useSelector(state => state.popular1.pageIndex)
    const fetchResults = data
    const isLoading = useSelector(state => state.popular1.isLoading)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(get(index))
    },[])

    return (
        <div>
            <Carousel showStatus={false} showIndicators={false} showArrows = {false} infiniteLoop={true} autoPlay={true} interval={2000} showThumbs={false}>
                {fetchResults.map(item => (<Card key={item.id} id={item.id} name={item.name} img={item.backdrop_path}/>))}
            </Carousel >
            <div className="container-posters">
                {fetchResults.map(
                    item => (isLoading
                            ? <SkeletonCard key={item.id}/>
                            : <DynamicCard
                                title={item.original_title || item.known_for[0].name}
                                text={item.overview.slice(0, 120) + "..."}
                                releaseDate={item.release_date}
                                vote={item.vote_average}
                                img={item.poster_path}
                                img2={item.backdrop_path}
                                id={item.id}
                                itemId={item.id}
                                key={item.id}/>
                    ))}
            </div>
            <div className="LoadMore">
                <div onClick={() => dispatch(get(index))}>Load More</div>
            </div>
        </div>
    );
};

export default DynamicContent;