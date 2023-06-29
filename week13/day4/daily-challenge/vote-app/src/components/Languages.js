import { Component } from "react";

class Languages extends Component {
  constructor() {
    super();
    this.state = {
      languages: [
        { name: "Php", votes: 0 },
        { name: "Python", votes: 0 },
        { name: "JavaSript", votes: 0 },
        { name: "Java", votes: 0 },
      ],
    };
  }

  increaseVote = (index) => {
    const updatedLanguages = [...this.state.languages];
    updatedLanguages[index].votes += 1;
    this.setState({ languages: updatedLanguages });
  };
  render() {
    return (
        <>
            <h1>Vote your language!</h1>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            width: "300px",
            margin: "20px auto",
            gap: "20px",
          }}
        >
          {this.state.languages.map((language, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "20px",
                border: "1px solid black",
                justifyContent: "center",
                  padding: "10px",
                  backgroundColor: 'lightsalmon', 
              }}
            >
              <p style={{fontWeight:'bold'}}>{language.name}</p>
              <p>Votes: {language.votes}</p>
              <button onClick={() => this.increaseVote(index)}>
                Click here
              </button>
            </div>
          ))}
        </div>
      </>
    );
  }
}

export default Languages;
