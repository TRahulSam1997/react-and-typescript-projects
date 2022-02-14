import { type } from 'os';
import * as React from 'react';

// type Theme = {
//     backgroundColor: string;
//     color: string;
// }

type Themes = {
    [key: string]: React.CSSProperties;
}

const defaultTheme: Themes = {
    light: {
        backgroundColor: 'white',
        color: 'black'
    },
    dark: {
        backgroundColor: '#555',
        color: 'white'
    }
}
export const ThemeContext = React.createContext<Themes>(defaultTheme);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
    // const [theme, setTheme] = React.useState('light');
    // const toggleTheme = () => {
    //     setTheme(theme === 'light' ? 'dark' : 'light');
    // }
    return (
        <ThemeContext.Provider value={defaultTheme}>
            {children}
        </ThemeContext.Provider>
    )
};