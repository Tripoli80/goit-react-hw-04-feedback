import { getKeyArrayFrimOdject } from 'helper/getKeyArrayFrimOdject';
import useMyBtnFeedback from 'hooks/useMyBtnFeedback';

import { Section } from 'components/Section/Section';
import { Statistics } from 'components/Section/Statistics/Statistics';

const App = () => {
  const [good, setGood] = useMyBtnFeedback(0);
  const [neutral, setNeutral] = useMyBtnFeedback(0);
  const [soso, setSoso] = useMyBtnFeedback(0);
  const [bad, setBad] = useMyBtnFeedback(0);

  const state = {
    good,
    bad,
    neutral,
    soso,
  };

  const feedBackAdd = key => {
    switch (key) {
      case 'good':
        setGood();
        break;
      case 'bad':
        setBad();
        break;
      case 'neutral':
        setNeutral();
        break;
      case 'soso':
        setSoso();
        break;
      default:
        console.log(`Не знайшов методу до цієї кнопки - ${key} `);
    }
  };

  const countTotalFeedback = () => {
    let summs = 0;
    for (const key in state) {
      if (Object.hasOwnProperty.call(state, key)) {
        summs += state[key];
      }
    }
    return summs;
  };
  const countFeedbackPercentageByKey = key => {
    return Math.round((state[key] * 100) / countTotalFeedback(state))
      ? Math.round((state[key] * 100) / countTotalFeedback(state))
      : '0';
  };

  const total = countTotalFeedback();
  const goodPercent = countFeedbackPercentageByKey('good');
  const btnNames = getKeyArrayFrimOdject(state);
  return (
    <div>
      <Section
        state={state}
        feedBackAdd={feedBackAdd}
        sectionTitel="Leave yuor feedback"
      />
      <Statistics
        state={state}
        total={total}
        goodPercent={goodPercent}
        btnNames={btnNames}
      />
    </div>
  );
};

export default App;
