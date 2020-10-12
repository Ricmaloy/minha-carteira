import React from 'react';
import { ThemeProvider } from 'styled-components';
import Layout from './components/Layout';
import GlobalStyles from './styles/GlobalStyles';
//import Dashboard from './pages/Dashboard';
import List from './pages/List';

import dark from './styles/themes/dark';
import light from './styles/themes/light';

const App: React.FC = () => {
    return (
        <ThemeProvider theme={dark}>
            <GlobalStyles/>
            <Layout>
                <List/>
            </Layout>
        </ThemeProvider>
    );
}

export default App;