import './Exercise.css';

const Exercise4 = () => {
    const style_header = {
      color: "white",
      backgroundColor: "DodgerBlue",
      padding: "10px",
      fontFamily: "Arial",
    };
    return (
      <>
        <h1 className="red" style={style_header}>Tag</h1>
        <p className='para'>Paragraph</p>
        <a>Link</a>
        <form>
          <label>Enter Your Name:</label>
          <input></input>
          <button>Submit</button>
        </form>
        <img
          src="https://www.freecodecamp.org/news/content/images/2021/08/imgTag.png"
          alt=""
        />
        <ul>
          <li>Water</li>
          <li>Fire</li>
          <li>Earth</li>
          <li>Air</li>
        </ul>
      </>
    );
}

export default Exercise4;