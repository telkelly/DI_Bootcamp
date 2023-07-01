const Navbar = ({score, topScore}) => {
  return (
    <nav>
      <h2>Current Score: {score}</h2>
      <h2>Top Score: {topScore}</h2>
    </nav>
  );
};

export default Navbar
