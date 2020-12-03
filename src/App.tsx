import React from 'react';
import GlobalFonts from './fonts/fonts';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';

import { useTheme } from './hooks/theme';

import Routes from './routes';

const App: React.FC = () => {
    const {theme} = useTheme();
    return (
        <ThemeProvider theme={theme}>
            <GlobalFonts/>
            <GlobalStyles/>
            <Routes/>
        </ThemeProvider>
    );
}

export default App;