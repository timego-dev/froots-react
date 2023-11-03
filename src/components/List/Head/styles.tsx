import { TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import styled from 'styled-components';

export const Head = styled(TableHead)`
  margin-bottom: ${(props) => props.theme.spacing(8)};
  border-bottom: 1px solid ${(props) => props.theme.palette.text.disabled};
`;

export const Row = styled(TableRow)``;

export const Cell = styled(TableCell)`
  ${(props) => props.theme.typography.overline};
  color: ${(props) => props.theme.palette.text.disabled};
  padding: ${(props) => props.theme.spacing(4, 8)};
  .MuiCheckbox-root {
    opacity: 1;
    color: ${(props) => props.theme.palette.text.disabled};
  }
`;

export const SortLabel = styled(TableSortLabel)`
  && {
    &:hover {
      color: ${(props) => props.theme.palette.text.primary};

      .MuiTableSortLabel-icon {
        opacity: 1;
      }
    }

    .MuiTableSortLabel-icon {
      opacity: 1;
      width: 10px;
      height: 5px;
    }
    flex-direction: row;
  }
`;
