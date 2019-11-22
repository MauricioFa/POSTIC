import { createMuiTheme } from '@material-ui/core/styles';
import { purple, teal } from '@material-ui/core/colors';

const Theme = createMuiTheme({
  palette: {
    primary: { main: teal[500] },
    secondary: { main: purple[500] },
  },
});

export default Theme;
