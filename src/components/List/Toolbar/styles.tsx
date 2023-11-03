import { Box } from '@mui/material';
import styled from 'styled-components';

export const ListToolbar = styled(Box)`
  display: flex;
  justify-content: space-between;
  margin-bottom: ${(props) => props.theme.spacing(29)};
`;
