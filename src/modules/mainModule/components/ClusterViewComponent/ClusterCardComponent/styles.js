import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles(theme => ({

    transparentCard: {
        marginBottom: '0.5rem',
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

export default useStyle;
