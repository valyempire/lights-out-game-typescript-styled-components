export interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title: string;
  // width: number;
}

export interface ContentContainerProps {
  width?: number;
}
