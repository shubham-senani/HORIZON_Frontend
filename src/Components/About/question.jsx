import { useState } from "react";
import Arrow from "./Arrow.svg";
import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Box
} from "@chakra-ui/react";
import { NewspaperOutlined } from "@mui/icons-material";

const Question = (props) => {
  const [rotate, setRotate] = useState("arrow_down");

  const RotateLogo = () => {
    if (rotate === "arrow_down") {
      setRotate("arrow_up");
    } else {
      setRotate("arrow_down");
    }
  };
  return (
    <div>
      <AccordionItem className="acc_item">
        <h2>
          <AccordionButton className="q_btn" onClick={RotateLogo}>
            <Box as="span" flex="1" textAlign="left" className="ques">
              {props.ques}
            </Box>
            <img className={rotate} src={Arrow} alt="Arrow" />
          </AccordionButton>
        </h2>
        <AccordionPanel pb={4}>
          <div className="q_ans">
            {props.ans}
            <div>{props.ans2}</div>
          </div>
        </AccordionPanel>
      </AccordionItem>
    </div>
  );
};

export default Question;
