import { useState } from 'react';

const useMyBtnFeedback = defValue => {
  const [myState, setState] = useState(defValue);
  const setMyState = () => {
    setState(prevState => prevState + 1);
  };
  return [myState, setMyState];
};

export default useMyBtnFeedback;
