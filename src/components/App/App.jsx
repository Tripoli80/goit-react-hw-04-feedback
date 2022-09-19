import { Section } from "components/Section/Section";
import { Statistics } from "components/Section/Statistics/Statistics";

import React, { Component } from "react";
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  feedBackAdd = (key) => {
    this.setState((prevState) => {
      return { [key]: prevState[key] + 1 };
    });
  };
  render() {
    return (
      <div>
        <Section
          state={this.state}
          feedBackAdd={this.feedBackAdd}
          sectionTitel="Leave yuor feedback"
        />
        <Statistics state={this.state} />
      </div>
    );
  }
}

export default App;
