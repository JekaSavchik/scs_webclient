import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    body: {
        height: '100%',
        minHeight: '800px',
        width: '100%',
        position: 'absolute',
        backgroundImage: 'linear-gradient(to bottom, #BBD2C5, #536976)',
    },
    card: {
        marginTop: theme.spacing(8),
        minWidth: 200,
        backgroundImage: 'linear-gradient(to bottom, #BBD2C5, #536976)',
        boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
        color: '#d5ecdf',
        fontSize: '1.5rem',
    },
    linkRegister: {
        color: '#8ea396',
    },
    inputText: {
        color: '#d5ecdf',
    },
    textField: {
        '& .MuiFormLabel-root.Mui-focused': {
          color: '#d5ecdf'
        },
        '& .MuiFormLabel-root.Mui-error': {
            color: '#f44336'
        },
        '& .MuiInput-underline:after': {
          borderBottomColor: '#d5ecdf',
        },
        '& .MuiInput-underline.Mui-error:after': {
            borderBottomColor: '#f44336',
          },
    },
    footer: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        left: 0,
        padding: '1rem',
        textAlign: 'center',
    }
}));

export default useStyles;
