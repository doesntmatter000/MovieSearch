import React from 'react';
import DynamicContent from "../components/DynamicContent";
import {getPopularMovies} from "../features/slice";
import {useSelector} from "react-redux";

const Popular = () => {
    const data = useSelector(state => state.popular1.popularMovies)
    return (
        <>
            <DynamicContent get={getPopularMovies} data={data}/>
        </>
    );
};

export default Popular;