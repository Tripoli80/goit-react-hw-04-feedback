import {
  Titel,
  Container,
  Element,
  Quntity,
  NoClick,
} from "./Statistics.styled";
import { getKeyArrayFrimOdject } from "components/App/Helper/getKeyArrayFrimOdject";
export const Statistics = ({ state }) => {
  const btnNames = getKeyArrayFrimOdject(state);

  function countTotalFeedback(state) {
    let summs = 0;

    for (const key in state) {
      if (Object.hasOwnProperty.call(state, key)) {
        summs += state[key];
      }
    }
    return summs;
  }
  function countFeedbackPercentageByKey(state, key) {
    return Math.round((state[key] * 100) / countTotalFeedback(state))
      ? Math.round((state[key] * 100) / countTotalFeedback(state))
      : "0";
  }

  return (
    <Container>
      <Titel>Statistics</Titel>
      {countTotalFeedback(state) ? (
        <>
          {btnNames.map((btn) => (
            <Element key={btn}>
              {btn}: <Quntity> {state[btn]}</Quntity>
            </Element>
          ))}
          <Element>
            Total: <Quntity>{countTotalFeedback(state)}</Quntity>
          </Element>
          <Element>
            Positive feedback:{" "}
            <Quntity>{countFeedbackPercentageByKey(state, "good")} %</Quntity>
          </Element>
        </>
      ) : (
        <NoClick>No fedback yet</NoClick>
      )}
    </Container>
  );
};
