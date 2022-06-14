import 'react-perfect-scrollbar/dist/css/styles.css';
import '../styles/globals.css'
import '../styles/globals.scss'
import { createTheme, ThemeProvider, experimental_sx as sx } from '@mui/material/styles';

const theme = createTheme({
  components: {
    // Name of the component ⚛️
    MuiButtonBase: {
      // defaultProps: {
      //   // The default props to change
      //   disableRipple: true, // No more ripple, on the whole application 💣!
      // },
      styleOverrides: {
        root: {
          textTransform: 'initial',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          borderRadius: 40,
          backgroundColor: '#fff',
          // height: 30,
        },
      },
    },
    MuiTabs: {
      // defaultProps: {
      //   // The default props to change
      //   disableRipple: true, // No more ripple, on the whole application 💣!
      // },
      styleOverrides: {
        indicator: {
          width: 4,
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        root: {
          borderRadius: 'inherit',
        },
        columnHeader: {
          padding: '0px 20px',
          color: '#808080',
        },
        cell: {
          padding: '0px 20px',
        },
        columnSeparator: {
          display: 'none'
        },
        columnHeaderTitleContainer: {
          justifyContent: 'space-between',
        },
        footerContainer: {
          borderTop: 'none',
          justifyContent: 'flex-start',
          paddingTop: 30,
        },
        'cell--textCenter': {
          textAlign: 'center'
        }
      },
    },
    MuiPagination: {
      styleOverrides: {
        ul: {
          border: '1px solid #bbb',
          borderRadius: '20px',
        }
      }
    }
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
        <Component {...pageProps} />
    </ThemeProvider>)
}

export default MyApp
