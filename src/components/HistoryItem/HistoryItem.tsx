import React from "react";
import { useGame } from "../../hooks";
import { useGameUtils } from "../../hooks";
import {
  Container,
  HistoryTable,
  DeleteButton,
  Date,
  Mode,
  Time,
  GridSize,
  Moves,
  RowContainer,
} from "./HistoryItem.styled";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const HistoryItem: React.FC = () => {
  const { history, deleteHistoryItem } = useGame();
  const { formatTimestamp } = useGameUtils();

  const handleDelete = (index: number) => {
    deleteHistoryItem(index);
  };

  const renderHistory = () => {
    return history.map((historyItem, index) => {
      return (
        <HistoryTable key={index}>
          <RowContainer>
            <Date> {formatTimestamp(historyItem.id as number)}</Date>
            <Mode>Mode: {historyItem.mode}</Mode>
          </RowContainer>
          <Moves>Moves: {historyItem.moves}</Moves>
          <Time>Time: {historyItem.time}</Time>
          <RowContainer>
            <DeleteButton onClick={() => handleDelete(index)}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </DeleteButton>
            <GridSize>
              {historyItem.gridSize}X{historyItem.gridSize}
            </GridSize>
          </RowContainer>
        </HistoryTable>
      );
    });
  };

  return <Container>{renderHistory()}</Container>;
};
