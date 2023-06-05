import React from 'react';
import DynamicContent from "../components/DynamicContent";
import {useSelector} from "react-redux";
import {getUpcomingMovies} from "../features/slice";

const Upcoming = () => {
    const useData = () => useSelector(state => state.popular1.upcomingMovies)
    const useIndex = () => useSelector(state => state.popular1.indexUpcoming)
    return (
        <>
            <DynamicContent data={useData} get={getUpcomingMovies} index={useIndex}/>
        </>
    );
};

export default Upcoming;