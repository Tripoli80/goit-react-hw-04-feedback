import {
  Titel,
  Container,
  Element,
  Quntity,
  NoClick,
} from './Statistics.styled';
export const Statistics = ({ state, total, goodPercent, btnNames }) => {
  const allFeadbackBtns = btnNames.map(btn => (
    <Element key={btn}>
      {btn}: <Quntity> {state[btn]}</Quntity>
    </Element>
  ));

  return (
    <Container>
      <Titel>Statistics</Titel>
      {total ? (
        <>
          {allFeadbackBtns}
          <Element>
            Total: <Quntity>{total}</Quntity>
          </Element>
          <Element>
            Positive feedback: <Quntity>{goodPercent} %</Quntity>
          </Element>
        </>
      ) : (
        <NoClick>No fedback yet</NoClick>
      )}
    </Container>
  );
};
