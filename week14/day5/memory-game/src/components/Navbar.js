const Navbar = ({ score, topScore }) => {
    return (
      <>
        <nav>
          <div>
            <h2>Memory Game</h2>
          </div>
          <div className="score">
            <h2>Current Score: {score}</h2>
            <h2>Top Score: {topScore}</h2>
          </div>
        </nav>
        <div className="rules">
          <h2>
            Get points by clicking on an image but don't click on any more than
            once!
          </h2>
        </div>
      </>
    );
};

export default Navbar;
