import { darken, Table, TableCell, TableRow } from '@mui/material';
import styled from 'styled-components';

export const List = styled(Table)``;

export const Cell = styled(TableCell)`
  && {
    height: 56px;
    color: ${(props) => props.theme.palette.text.secondary};
    border-bottom: none;
    padding: ${(props) => props.theme.spacing(0, 8)};
    ${(props) => props.theme.typography.body2};

    &:first-child {
      border-top-left-radius: 8px;
      border-bottom-left-radius: 8px;
    }

    &:last-child {
      border-top-right-radius: 8px;
      border-bottom-right-radius: 8px;
    }

    .MuiIconButton-root {
      &:hover {
        background-color: ${(props) => darken(props.theme.palette.action.hover, 0.02)};
      }

      svg {
        color: ${(props) => props.theme.palette.text.secondary};
      }
    }
    flex-direction: row;
  }
`;

export const Row = styled(TableRow)`
  && {
    border-radius: 8px;
    color: ${(props) => props.theme.palette.text.secondary};
  }
`;
