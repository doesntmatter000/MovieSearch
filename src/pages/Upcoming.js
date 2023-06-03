import React from 'react';
import DynamicContent from "../components/DynamicContent";
import {useSelector} from "react-redux";
import {getUpcomingMovies} from "../features/slice";

const Upcoming = () => {
    const data = useSelector(state => state.popular1.upcomingMovies)
    return (
        <>
            <DynamicContent data={data} get={getUpcomingMovies}/>
        </>
    );
};

export default Upcoming;