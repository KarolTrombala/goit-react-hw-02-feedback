
import React, {Component} from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './Feedbackoptions/Feedbackoptions';

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
      <div
      style={{
        marginTop: 100,
        marginLeft: 100,
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        color: '#010101',
      }}>
        <h2>Please leave feedback:</h2>
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          // onLeaveFeedback={this.handleFeedback}
        />
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          // total={totalFeedback}
          // positivePercentage={positivePercentage}
        />
      </div>
    );
  }
}
  export default App;
