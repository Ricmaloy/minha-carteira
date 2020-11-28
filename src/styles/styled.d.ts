import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string,
        colors: {
            primary: string,
            secondary: string,
            tertiary: string,

            primaryGradient: string,
            secondaryGradient: string,

            white: string,
            black: string,
            gray: string,

            backMenu: string,

            success: string,
            info: string,
            warning: string
        }
    }
}