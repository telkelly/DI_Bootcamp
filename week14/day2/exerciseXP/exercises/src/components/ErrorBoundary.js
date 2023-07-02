import { useState } from "react";

const BuggyBoundary = () => {
    const [error, setError] = useState(0);
    
    return (
        <div>
        <h1>Buggy Couner</h1>
        <h2 onClick={handleClick}>{counter > 5 ? throwError : counter}</h2>
    </div>);
};

export default BuggyBoundary;