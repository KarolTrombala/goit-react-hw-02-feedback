
import React, {Component} from 'react';
import Statistics from './Statistics/Statistics';


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    const { good, neutral, bad } = this.state;
    // const totalFeedback = this.countTotalFeedback();
    // const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <h2>Please give feedback:</h2>
        {/* <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.handleFeedback}
        /> */}
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={totalFeedback}
          positivePercentage={positivePercentage}
        />
      </div>
    );
  }
}
  export default App;
