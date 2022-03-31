import React from "react";
import {useDispatch} from 'react-redux';

import add from "./addAction";

export default function AddButton(props) {

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(add(props.value));
    }

    return (
        <button onClick={handleClick}>{"Add"}</button>
    );

}


