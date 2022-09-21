import { GroupBtns, Btn } from "./FeedbackOptions.styled";
import {
  BsEmojiSunglasses as Good,
  BsEmojiExpressionless as Neutral,
  BsEmojiFrown as Bad,
} from "react-icons/bs";

export const FeedbackOptions = ({ btnNames, feedBackAdd }) => {
  return (
    <GroupBtns>
      {btnNames.map((btn) => {
        let text = btn;
        if (btn === "bad") {
          text = <Bad />;
        }
        if (btn === "neutral") {
          text = <Neutral />;
        }
        if (btn === "good") {
          text = <Good />;
          
        }

        return (
          <Btn
            key={btn}
            onClick={() => {
              feedBackAdd(btn);
            }}
          >
            {text}
          </Btn>
        );
      })}
    </GroupBtns>
  );
};
