import { makeStyles } from '@material-ui/core/styles';

const useMyStyles = makeStyles((theme) => ({
  main: (props) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingBottom: '1em',
    position: 'absolute',
    top: '56px',
    height: props.heightSection,
    width: props.widthSection,

    '& h1': {
      fontSize: '2em',
      margin: '0',
    },
    '& a': {
      textDecoration: 'none',
    },
    '& a:visited': {
      color: 'blue',
    },

    [theme.breakpoints.up('599')]: {
      fontSize: '1.2em',
    },
  }),

  container: (props) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: props.heightContainer,
    width: props.widthContainer,

    [theme.breakpoints.up('599')]: {
      width: '70%',
      fontSize: '1.4em',
    },

    [theme.breakpoints.up('767')]: {
      width: '54%',
    },

    [theme.breakpoints.up('899')]: {
      width: '42%',
    },
  }),

  form: (props) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    height: props.heightForm,
    width: props.widthForm,
  }),

  textSize: {
    fontSize: '1.4em',
  },

  noPaddingRight: {
    paddingRight: '0',
  },

  sectionBottom: (props) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',

    '& div': {
      borderBottom: '2px solid gray',
      paddingBottom: '0.8em',
      marginBottom: '0.7em',
      textAlign: 'center',
      height: props.heightSectionBottom,
      width: props.widthSectionBottom,

      '& span>a': {
        display: 'inline-block',
        padding: '0.6em 1.0em 0em',
      },
    },

    '& h3': {
      margin: '0.4em 0 0 0',
    },

    '& h2': {
      margin: '0.6em 0 0 0',
    },

    '& p': {
      margin: '0.4em 0 0 0',
    },
  }),

  card: {
    display: 'none',

    [theme.breakpoints.up('899')]: {
      display: 'inline-block',
      width: '42%',
      marginLeft: '6%',
    },
  },
}));

export default useMyStyles;
