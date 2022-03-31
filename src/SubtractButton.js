import React from "react";
import { useDispatch} from 'react-redux';

import subtract from "./action/subtractAction";

export default function SubtractButton(props) {

    const dispatch = useDispatch();


    const handleClick = () => {
        dispatch(subtract(props.value));
    }

    return (
        <button onClick={handleClick}>{"Subtract"}</button>
    );

}


