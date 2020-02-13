import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing(2),
    },

    nodeImg: {
        height: 0,
        paddingTop: '100%',
    }
}));

export default useStyles;
