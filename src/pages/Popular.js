import React from 'react';
import DynamicContent from "../components/DynamicContent";
import {getPopularMovies} from "../features/slice";
import {useSelector} from "react-redux";

const Popular = () => {
    const useData = () => useSelector(state => state.popular1.popularMovies)
    const useIndex = () => useSelector(state => state.popular1.indexPopular)
    return (
        <>
            <DynamicContent get={getPopularMovies} data={useData} index={useIndex}/>
        </>
    );
};

export default Popular;