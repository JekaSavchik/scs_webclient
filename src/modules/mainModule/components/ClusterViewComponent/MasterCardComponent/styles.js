import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({

    card: {
        marginBottom: '2rem',
    },

    cardMasterTitle: {
        fontSize: '18px',
        color: theme.palette.secondary.main,
    },

    transparentCard: {
        marginBottom: '2rem',
        backgroundColor: 'transparent',
        boxShadow: 'none',
    },

    masterIcon: {
        width: '50px',
        marginRight: '1rem'
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
