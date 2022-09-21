import { FeedbackOptions } from './FeedbackOptions';
import { getKeyArrayFrimOdject } from 'helper/getKeyArrayFrimOdject';
import { Titel } from './Section.styled';

export const Section = ({ state, feedBackAdd, sectionTitel }) => {
  const btnNames = getKeyArrayFrimOdject(state);
  return (
    <>
      <Titel>{sectionTitel}</Titel>
      <FeedbackOptions btnNames={btnNames} feedBackAdd={feedBackAdd} />
    </>
  );
};
