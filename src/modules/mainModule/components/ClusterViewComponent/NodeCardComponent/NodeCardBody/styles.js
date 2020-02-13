import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        margin: theme.spacing(2),
    },

    chip: {
        marginLeft: theme.spacing(1),
    },

    actionButtons: {
        '& > *': {
            margin: theme.spacing(1),
        },
        textAlign: 'right',
    }
}));

export default useStyles;
