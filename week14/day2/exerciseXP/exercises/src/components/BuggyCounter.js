import { useState } from "react";

const BuggyCounter = () => {
    const [counter, setCounter] = useState(0);
    const handleClick = () => {
        setCounter(counter+1)
    }
    const throwError = () => {
        return new Error({hasError: 'I crashed'})
    }
    return (<div>
        <h1>Buggy Counter</h1>
        <h2 onClick={handleClick}>{counter > 5 ? throwError : counter}</h2>
    </div>);
};

export default BuggyCounter;
