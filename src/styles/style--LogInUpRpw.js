import { makeStyles } from '@material-ui/styles';

export default makeStyles({
  main: (props) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    paddingBottom: '1em',
    height: props.heightSection,
    width: props.widthSection,

    '& h1': {
      fontSize: '2em',
    },

    '& a': {
      textDecoration: 'none',
    },

    '& a:visited': {
      color: 'blue',
    },
  }),

  container: (props) => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: props.heightContainer,
    width: props.widthContainer,
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
      paddingBottom: '1em',
      marginBottom: '1em',
      textAlign: 'center',
      height: props.heightSectionBottom,
      width: props.widthSectionBottom,
      '& span>a': {
        display: 'inline-block',
        padding: '0.6em 1.0em 0em',
      },
    },
  }),
});
