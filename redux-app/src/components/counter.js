import React from "react";
import "./counter.css"
import { useDispatch, useSelector } from "react-redux"

const Counter = () => {

    const count = useSelector((state) => {
        return state.counterReducer.count
    })

    const dispatch = useDispatch()

    const decrease = () => {
        dispatch({
            type: "DECREASE_COUNT",
            payload: 1
        })
    }

    const increase = () => {
        dispatch({
            type: "INCREASE_COUNT",
            payload: 1
        })
    }

    return (
        <div className="container">
            <div className="counter">
                <div className="decrease" onClick={decrease}>-</div>
                <div className="count">{count}</div>
                <div className="increase" onClick={increase}>+</div>
            </div>
        </div>
    )
}

export default Counter