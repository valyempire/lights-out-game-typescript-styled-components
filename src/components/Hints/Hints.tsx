import { useGame } from "../../hooks";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "./Hints.styled";

export const Hints = () => {
  const { helperOn, setHelperOn } = useGame();

  const toggleHints = () => {
    setHelperOn(!helperOn);
  };

  return (
    <Button onClick={toggleHints}>
      <FontAwesomeIcon icon={faLightbulb} />
    </Button>
  );
};
