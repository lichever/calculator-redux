import React, {useState, useEffect} from 'react';
import {shallowEqual, useDispatch, useSelector} from 'react-redux';
import AddButton from "./AddButton";
import SubtractButton from "./SubtractButton";
import appendHist from "./action/appendHistAction"

function App() {


    const [input, setInput] = useState(0);

    const currentSum = useSelector((state) => {
        return state.sum;
    }, shallowEqual);


    const hist = useSelector((state) => {
        return state.hist;
    }, shallowEqual);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(appendHist(currentSum));
    }, [currentSum]);



    function handleOnInput(event) {
        setInput(event.target.value);
    }

    return (
        <div>
            <h3>{currentSum}</h3>
            {
                hist.map((item, index) =>{
                        return (
                            <div key={index}> {item} </div>
                        )
                    }
                )
            }
            <input onInput={(event) => handleOnInput(event)}/>
            <AddButton value = {input} />
            <SubtractButton value = {input} />

        </div>
    );
}

export default App;
