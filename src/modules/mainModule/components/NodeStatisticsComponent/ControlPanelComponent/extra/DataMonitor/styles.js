import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    monitorCard: {
        height: '150px',
        width: '150px',
    },
    dataTitle: {
        fontSize: '14px',
        color: theme.palette.secondary.main,
    },
}));

export default useStyles;
