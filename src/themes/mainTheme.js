import {createMuiTheme} from "@material-ui/core";

const mainTheme = createMuiTheme({
    palette: {
        primary: {main: '#6f929f', contrastText: "#fff"},
        secondary: {main: '#7800ab', contrastText: "#fff"},
    },
    typography: {
        variantMapping: {
            h1: 'h2',
            h2: 'h2',
            h3: 'h2',
            h4: 'h2',
            h5: 'h2',
            h6: 'h2',
            subtitle1: 'h2',
            subtitle2: 'h2',
            body1: 'span',
            body2: 'span',
        },
        fontSize: 12,
    },
});

export default mainTheme;
