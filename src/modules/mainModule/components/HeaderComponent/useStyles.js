import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        margin: 0,
    },

    menuButton: {
        marginRight: theme.spacing(2),
    },

    logo: {
        width: '48px',
        marginRight: '1rem'
    },

    title: {
        flexGrow: 1,
    },

    accountButton: {
        marginLeft: 'auto',
        marginRight: theme.spacing(2),

    }
}));

export default useStyles;
