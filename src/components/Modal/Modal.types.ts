export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
}

export interface ContentContainerProps {
  width?: number;
}
