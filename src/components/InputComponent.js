import React, {useEffect, useState} from 'react';
import "./InputComponentStyle.css"
import {getTitleDetail} from "../features/slice";
import {useDispatch} from "react-redux";

const InputComponent = () => {
    const [titleName, setTitleName] = useState()
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getTitleDetail("John Wick: Chapter 4"))
    }, [])

    return (
        <div className="input-search">
            <div className="input-search-content">
                <input type="text" required onChange={(e) => setTitleName(e.target.value)} value={titleName}/>
                <label>Movie</label>
                <button
                    onClick={() => {
                    dispatch(getTitleDetail(titleName))
                    setTitleName("")}}>Search</button>
            </div>
        </div>
    );
};

export default InputComponent;