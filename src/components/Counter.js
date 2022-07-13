import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IncrementCounter, DicrementCounter } from '../Redux/Actions/CounterAction'


function Counter()
{

    const dispatch = useDispatch()
    const count = useSelector((state) => state)

    return (
        <div style={{ textAlign: "center" }}>
            <h1>Counter</h1>
            <h3>{count}</h3>
            <button onClick={() => dispatch(IncrementCounter())}>Increment</button>
            <button onClick={() => dispatch(DicrementCounter())}>Decrement</button>
        </div>
    )
}

export default Counter
