import React from "react";
import { useState } from "react";
export default function StatePractice(){
    const [count,setCount]=useState(0);
    function increaseValue(){
        setCount(prevalue=>prevalue+1);
    }

    function decreasevalue() {
        setCount(prevalue => prevalue -1);
    }
    return(
        <main>
            <h1 className="title">Is state important to know</h1>
            <button className="value" onClick={increaseValue}>+</button>
            <h2>{count}</h2>
            <button className="value" onClick={decreasevalue}>-</button>
        </main>
    )
}