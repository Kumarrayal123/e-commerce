
import { useState } from 'react';

function Counter(){
    const[count,setcount]=useState(0);


    const increment=()=>{
        setcount(count+1)
    };
    const decrement=()=>{
        setcount(count-1)
    };
    return(
        <div>
        <h1>counter</h1>
        <p>count:{count}</p>
        <button onClick={increment}>increment</button>
        <button onClick={decrement}>decrement</button>
        </div>
    )
}
export default Counter