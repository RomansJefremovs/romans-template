import { createTheme} from '@mui/material/styles';

const theme = createTheme({
    typography: {
        h1: {
            fontFamily: '"Cormorant Infant", serif',
            fontSize: '4rem',
            fontWeight: 'bold',
        },
        h2: {
            fontFamily: 'Cormorant Infant, serif',
            fontSize: '3.5rem',
            fontWeight: 'bold',
        },
        h3: {
            fontFamily: 'Cormorant Infant, serif',
            fontSize: '3rem',
            fontWeight: 'bold',
        },
        h4: {
            fontFamily: 'Cormorant Infant, serif',
            fontSize: '2.5rem',
            fontWeight: 'bold',
        },
        h5: {
            fontFamily: 'Cormorant Infant, serif',
            fontSize: '2rem',
            fontWeight: 'bold',
        },
        h6: {
            fontFamily: 'Cormorant Infant, serif',
            fontSize: '1.5rem',
            fontWeight: 'bold',
        },
        body1: {
            fontFamily: 'Josefin Sans, sans-serif',
            fontSize: '1rem',
        },
    },
    palette: {
        primary: {
            main: '#555555',
        },
        secondary: {
            main: '#ffffff',
        },
        warning: {
            main: '#E1B168',
        },
        success: {
            main: '#292E36',
        },
    },
    components: {
        MuiButton: {
            styleOverrides: {
            containedPrimary: {
                backgroundColor: '#E1B168',
                color: '#292E36',
            },
            outlinedPrimary: {
                color: '#292E36',
                border: '1px solid #E1B168',
            },
        }},
    },
});

export default theme;