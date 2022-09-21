import { getKeyArrayFrimOdject } from 'helper/getKeyArrayFrimOdject';

import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Section/Statistics';

import React, { Component } from 'react';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    soso: 0,
  };

  feedBackAdd = key => {
    this.setState(prevState => {
      return { [key]: prevState[key] + 1 };
    });
  };

  countTotalFeedback() {
    let summs = 0;
    for (const key in this.state) {
      if (Object.hasOwnProperty.call(this.state, key)) {
        summs += this.state[key];
      }
    }
    return summs;
  }
  countFeedbackPercentageByKey(key) {
    return Math.round(
      (this.state[key] * 100) / this.countTotalFeedback(this.state)
    )
      ? Math.round(
          (this.state[key] * 100) / this.countTotalFeedback(this.state)
        )
      : '0';
  }

  render() {
    const total = this.countTotalFeedback();
    const goodPercent = this.countFeedbackPercentageByKey('good');
    const btnNames = getKeyArrayFrimOdject(this.state);
    return (
      <div>
        <Section
          state={this.state}
          feedBackAdd={this.feedBackAdd}
          sectionTitel="Leave yuor feedback"
        />
        <Statistics
          state={this.state}
          total={total}
          goodPercent={goodPercent}
          btnNames={btnNames}
        />
      </div>
    );
  }
}

export default App;
