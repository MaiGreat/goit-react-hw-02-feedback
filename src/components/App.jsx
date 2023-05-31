import React, { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Section from './Section/Section';


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };


  handleClickBtn = (e) => {
    const nameBtn = e.target.textContent;
    this.setState((prevState) => {
      return {
        [nameBtn]: prevState[nameBtn] + 1,
      };
    },
  );
  };
  
  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div > 
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.handleClickBtn}
            />
          </Section>
      <Section title="Statistics">
        <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback}
            positisveFeedback={this.countPositivePercentage}
            />
          </Section>
      </div>
    );
  }
}

export default App;