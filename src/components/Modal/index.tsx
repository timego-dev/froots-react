import * as S from './style';
import { Button, ModalProps } from '@mui/material';
import { FC } from 'react';

interface IModalProps extends ModalProps {
  title: string;
  okText: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  onOk: () => void;
  onCancel?: () => void;
}

export const Modal: FC<IModalProps> = ({
  open,
  title,
  onClose,
  okText = 'OK',
  onOk,
  onCancel,
  size = 'sm',
  children
}) => {
  return (
    <S.Modal open={open} onClose={onClose} fullWidth maxWidth={size}>
      <S.Title>{title}</S.Title>
      <S.Content>{children}</S.Content>
      <S.Footer>
        <Button variant="outlined" onClick={onCancel}>
          Cancel
        </Button>
        <Button onClick={onOk}>{okText}</Button>
      </S.Footer>
    </S.Modal>
  );
};
