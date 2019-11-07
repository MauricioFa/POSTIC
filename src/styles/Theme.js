import { createMuiTheme } from '@material-ui/core/styles';
import { purple, teal } from '@material-ui/core/colors';

const Theme = createMuiTheme({
  palette: {
    primary: { main: teal[500] }, // Purple and green play nicely together.
    secondary: { main: purple[500] }, // This is just green.A700 as hex.
  },
});

export default Theme;
