import React, { Component } from "react";
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Carousel

          showArrows={true}
          onChange={this.onChange}
          onClickItem={this.onClickItem}
          onClickThumb={this.onClickThumb}
        >
          <div>
            <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/jrfyzvgzvhs1iylduuhj.jpg" />
            <p className="legend">Moroco</p>
          </div>
          <div>
            <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/c1cklkyp6ms02tougufx.webp" />
            <p className="legend">Italia</p>
          </div>
          <div>
            <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/e8fnw35p6zgusq218foj.webp" />
            <p className="Columbia">Columbia</p>
          </div>
          <div>
            <img src="https://res.klook.com/image/upload/fl_lossy.progressive,q_65/c_fill,w_480,h_384/cities/liw377az16sxmp9a6ylg.webp" />
            <p className="legend">New York</p>
          </div>
        </Carousel>
      </div>
    );
  }
}

export default App;
