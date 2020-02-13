import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        margin: theme.spacing(6),
        marginTop: theme.spacing(2),
    },

    card: {
        marginBottom: '2rem',
    },

    transparentCard: {
        marginBottom: '2rem',
        backgroundColor: 'transparent',
        boxShadow: 'none',
    },

    clusterIcon: {
        width: '50px',
        marginRight: '1rem'
    },

    cardClusterTitle: {
        fontSize: '24px',
        color: theme.palette.secondary.main,
    },

    cardMasterTitle: {
        fontSize: '18px',
        color: theme.palette.secondary.main,
    },

    listSubHeader: {
        marginBottom: '1.5rem',
        fontSize: 16,
    },

    ledBox: {
        height: '15px',
        margin: '3px 0',
        float: 'right'
    },

    ledGreen: {
        margin: '0 auto',
        width: '12px',
        height: '12px',
        backgroundColor: '#ABFF00',
        borderRadius: '50%',
        boxShadow: 'rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #304701 0 -1px 9px, #89FF00 0 2px 12px',
    },

    ledRed: {
        margin: '0 auto',
        width: '12px',
        height: '12px',
        backgroundColor: '#F00',
        borderRadius: '50%',
        boxShadow: 'rgba(0, 0, 0, 0.2) 0 -1px 7px 1px, inset #441313 0 -1px 9px, rgba(255, 0, 0, 0.5) 0 2px 12px',
    }

}));

export default useStyles;
