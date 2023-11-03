import { Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import styled from 'styled-components';

export const Modal = styled(Dialog)``;

export const Title = styled(DialogTitle)`
  text-align: center;
  padding-bottom: ${(props) => props.theme.spacing(10)};
`;

export const Content = styled(DialogContent)`
  padding: ${(props) => props.theme.spacing(0, 20)};
`;

export const Footer = styled(DialogActions)`
  && {
    padding: ${(props) => props.theme.spacing(20)};
  }
`;
