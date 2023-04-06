import React from "react";
import { Container, Button, GameHistoryTitle } from "./GameHistory.styles";
import { Modal } from "../Modal";
import { useGame, useModal } from "../../hooks";
import { HistoryItem } from "../HistoryItem";
import { faHistory } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const GameHistory: React.FC = () => {
  const { open, openModal, closeModal } = useModal();
  const { clearHistory, history } = useGame();

  if (!history || history.length === 0) {
    return null;
  }

  return (
    <Container onClick={openModal}>
      <FontAwesomeIcon icon={faHistory} />
      <Modal title="Game History" open={open} onClose={closeModal}>
        {/* <GameHistoryTitle>GameHistory</GameHistoryTitle> */}
        <Button onClick={clearHistory}>Clear History</Button>
        <HistoryItem />
      </Modal>
    </Container>
  );
};
