import { Box, Table } from '@mui/material';
import styled from 'styled-components';

export const Header = styled(Box)`
  display: flex;
  padding: ${(props) => props.theme.spacing(20)};
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0.125rem 0.625rem rgba(90, 97, 105, 0.12);
`;

export const Settings = styled(Table)`
  && {
    .MuiTableRow-root {
      .MuiTableCell-root {
        &:first-child {
          ${(props) => props.theme.typography.subtitle1};
          font-weight: 600;
        }
      }
    }
  }
`;
