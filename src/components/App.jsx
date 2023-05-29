import React, {Component} from 'react';

export class App extends Component {
  state = {
  good: 0,
  neutral: 0,
  bad: 0
  }
  
  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <ul>
          <button>Good</button>
          <button>Neutral</button>
          <button>Bad</button>
        </ul>
        <h2>
          <li>Good</li>
          <li>Neutral</li>
          <li>Bad</li>
        </h2>
      </div>
    );
  } 
};
