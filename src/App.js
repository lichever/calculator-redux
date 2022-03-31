import React, {useState} from 'react';
import {shallowEqual, useSelector} from 'react-redux';
import AddButton from "./AddButton";
import SubtractButton from "./SubtractButton";


function App() {


    const [input, setInput] = useState(0);

    const currentSum = useSelector((state) => {
        return state.sum;
    }, shallowEqual);

    function handleOnInput(event) {
        setInput(event.target.value);
    }

    return (
        <div>
            <h3>{currentSum}</h3>
            <input onInput={(event) => handleOnInput(event)}/>
            <AddButton value = {input} />
            <SubtractButton value = {input} />

        </div>
    );
}

export default App;
