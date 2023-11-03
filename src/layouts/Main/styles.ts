import { Box } from '@mui/material';
import PerfectScrollbar from 'react-perfect-scrollbar';
import styled from 'styled-components';

export const Layout = styled(Box)`
  display: flex;
`;

export const Content = styled(PerfectScrollbar)`
  flex: 1;
`;

export const MainContent = styled(PerfectScrollbar)`
  height: calc(100vh - 80px);
  padding: ${(props) => props.theme.spacing(20)};
`;
