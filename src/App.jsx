import React from 'react';
import 'typeface-roboto';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';
import { SnackbarProvider } from 'notistack';

import store from './store';
import AppRoutes from './routes';
import { mainTheme } from './themes';


const App = () => (
    <ThemeProvider theme={mainTheme}>
        <SnackbarProvider maxSnack={3}>
            <Provider store={store}>
                <AppRoutes/>
            </Provider>
        </SnackbarProvider>
    </ThemeProvider>
);

export default App;
