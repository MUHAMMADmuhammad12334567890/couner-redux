import React from 'react';
import { useDispatch } from 'react-redux';

const Button = () => {

    const dispatch = useDispatch()
    const handleIncrement = () => {
        dispatch({type: 'plus'})
    }
    const handleDicrement = () => {
        dispatch({type: 'minus'})

    }

    const handleReset = () => {
        dispatch({type: "Сброс"})
    }


    return(  
        <>
    <button onClick={() => handleIncrement("plus") }>+</button>
    <button onClick={() => handleDicrement('minus') }>-</button>
    <button onClick={() => handleReset("Сброс")}>Сброс</button>
    </>
    )

   
};

export default Button;