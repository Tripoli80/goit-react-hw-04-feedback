import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { getKeyArrayFrimOdject } from "components/App/Helper/getKeyArrayFrimOdject";
import { Titel } from "./Section.styled";

export const Section = ({ state, feedBackAdd, sectionTitel }) => {
  const btnNames = getKeyArrayFrimOdject(state);
  return (
    <>
      <Titel>{sectionTitel}</Titel>
      <FeedbackOptions btnNames={btnNames} feedBackAdd={feedBackAdd} />
    </>
  );
};
