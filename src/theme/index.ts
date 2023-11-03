import breakpoints from './breakpoints';
import components from './components';
import typography from './typography';
import { createTheme } from '@mui/material';

const theme = createTheme({
  spacing: 1,
  breakpoints,
  // @ts-ignore
  components,
  typography
});

export default theme;
