import './App.css';
import Counter from './components/Counter';
import React, {Component} from 'react';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Whats up?",
      show: true
    };
  }
  change = () => {
    this.setState({ title: "Something"  , show: false});
  };
  render() {
    return (
      <div className="App">
        <div></div>
        {
          this.state.show ?  <Counter title={this.state.title} /> :  null
        }
       
        <button onClick={this.change}>Change title</button>
      </div>
    );
  }
}

export default App;
