import React from 'react';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

const SkeletonCard = () => {
    return (
        <div>
            <Skeleton width={180} height={260}/>
        </div>
    );
};

export default SkeletonCard;