import React from "react";
import { ModalProps } from "./Modal.types";
import {
  ModalOverlay,
  ModalContent,
  Title,
  ModalHeader,
  CloseButton,
} from "./Modal.styles";
/**
 * Imports font awesome
 */
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Modal: React.FC<ModalProps> = (props) => {
  const { open, onClose, children, title } = props;

  const preventPropagation = (event: React.MouseEvent<any, MouseEvent>) => {
    event.stopPropagation();
  };

  const handleClose = (event: React.MouseEvent<any, MouseEvent>) => {
    preventPropagation(event);
    onClose();
  };

  if (!open) return null;

  return (
    <ModalOverlay onClick={handleClose}>
      <ModalContent onClick={preventPropagation}>
        <ModalHeader>
          <Title>{title}</Title>
          <CloseButton onClick={handleClose}>
            <FontAwesomeIcon icon={faTimes} />
          </CloseButton>
        </ModalHeader>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};
