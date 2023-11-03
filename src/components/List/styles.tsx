import { Box, Pagination as MuiPagination } from '@mui/material';
import styled from 'styled-components';

export const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Card = styled(Box)`
  width: 100%;
`;

export const Pagination = styled(MuiPagination)`
  && {
    margin-top: ${(props) => props.theme.spacing(36)};
    background-color: ${(props) => props.theme.palette.action.hover};
    border-radius: 8px;
    padding: ${(props) => props.theme.spacing(4, 0)};

    li {
      &:first-child {
        border-right: 1px solid ${(props) => props.theme.palette.action.active};
      }

      &:last-child {
        border-left: 1px solid ${(props) => props.theme.palette.action.active};
      }
    }

    .MuiPaginationItem-root {
      width: 40px;
      height: 40px;
      border-radius: 4px;
      ${(props) => props.theme.typography.button};
      margin: ${(props) => props.theme.spacing(0, 4)};
      color: ${(props) => props.theme.palette.text.secondary};

      &.Mui-selected {
        color: ${(props) => props.theme.palette.text.primary};
        background-color: ${(props) => props.theme.palette.action.active};
      }

      &:hover {
        color: ${(props) => props.theme.palette.text.primary};
      }
    }

    .MuiPaginationItem-previousNext {
      color: ${(props) => props.theme.palette.action.active};

      svg {
        color: ${(props) => props.theme.palette.success.main};
      }
    }
  }
`;
