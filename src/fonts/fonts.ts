import {createGlobalStyle} from 'styled-components';

import Poppins500Woff from './poppins-500.woff';
import Poppins500Woff2 from './poppins-500.woff2';

import Poppins600Woff from './poppins-600.woff';
import Poppins600Woff2 from './poppins-600.woff2';

import Poppins700Woff from './poppins-700.woff';
import Poppins700Woff2 from './poppins-700.woff2';

import PoppinsRegularWoff from './poppins-regular.woff';
import PoppinsRegularWoff2 from './poppins-regular.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Poppins500';
        src: local('Poppins500'), local('Poppins500'),
        url(${Poppins500Woff2}) format('woff2'),
        url(${Poppins500Woff}) format('woff');
        font-weight: 500;
        font-style: normal;
    }

    @font-face {
        font-family: 'Poppins600';
        src: local('Poppins600'), local('Poppins500'),
        url(${Poppins600Woff2}) format('woff2'),
        url(${Poppins600Woff}) format('woff');
        font-weight: 600;
        font-style: normal;
    }

    @font-face {
        font-family: 'Poppins700';
        src: local('Poppins700'), local('Poppins500'),
        url(${Poppins700Woff2}) format('woff2'),
        url(${Poppins700Woff}) format('woff');
        font-weight: 700;
        font-style: normal;
    }

    @font-face {
        font-family: 'PoppinsRegular';
        src: local('PoppinsRegular'), local('PoppinsRegular'),
        url(${PoppinsRegularWoff2}) format('woff2'),
        url(${PoppinsRegularWoff}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;