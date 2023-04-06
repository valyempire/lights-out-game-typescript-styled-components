import React from "react";
import { useGame } from "../../hooks";
import { useGameUtils } from "../../hooks";
import {
  Container,
  HistoryTable,
  ButtonDelete,
  Date,
  Mode,
  Time,
  GridSize,
  Moves,
} from "./HistoryItem.styled";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HistoryItem: React.FC = () => {
  const { history, deleteHistoryItem } = useGame();
  const { formatTimestamp } = useGameUtils();

  const handleDelete = (index: number) => {
    deleteHistoryItem(index);
  };

  return (
    <Container>
      {history.map((historyItem, index) => {
        return (
          <HistoryTable key={index}>
            <Date> {formatTimestamp(historyItem.id as number)}</Date>

            <Mode>Mode: {historyItem.mode}</Mode>
            <Moves>Moves: {historyItem.moves}</Moves>
            <Time>Time: {historyItem.time}</Time>
            <GridSize>
              {historyItem.gridSize}X{historyItem.gridSize}
            </GridSize>

            <ButtonDelete onClick={() => handleDelete(index)}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </ButtonDelete>
          </HistoryTable>
        );
      })}
    </Container>
  );
};
