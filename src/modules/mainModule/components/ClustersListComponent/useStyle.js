import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
    },

    listSubHeader: {
        marginBottom: '1.5rem',
        fontSize: 16,
    },

    list: {
        margin: '3rem',
        width: '70%',
    },

    clusterIcon: {
        width: '25px',
        marginRight: '1rem'
    },

    ledBox: {
        height: '15px',
        margin: '3px 0',
        float: 'left'
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
