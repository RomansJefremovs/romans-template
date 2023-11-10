// src/App.tsx
import React from 'react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import HomePage from "./Pages/HomePage";
import {Container, Grid, ThemeProvider, useTheme} from "@mui/material";
import theme from "./Theme/theme";
import AppNavigation from "./Components/Organisms/AppNavigation";
import Logo from "./Assets/headline.png";
import Footer from "./Components/Organisms/Footer";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import {useTranslation} from "react-i18next";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
]);

const App: React.FC = () => {
const {t} = useTranslation()
  return (
      <ThemeProvider theme={theme}>
          {/*<CssBaseline />*/}
          <AppNavigation backgroundColor={''} logo={Logo} menuItems={['test1', 'test2', 'test3']}/>
          {/*<Grid container direction={'column'}>*/}
          <Container maxWidth={false} sx={{paddingLeft:0, paddingRight:0, '@media (min-width:600px)': {
                  padding: 0,
              },
              '@media (min-width:900px)': {
                  padding: 0,
              },}}>
              <RouterProvider router={router} />
          </Container>

          {/*</Grid>*/}
          <Footer copyright={ <Typography variant="body2" color="text.secondary">
              {'Copyright © ' + t('label_test')}
              <Link color="inherit" href="https://mui.com/">
                  Your Website
              </Link>{' '}
              {new Date().getFullYear()}
              {'.'}
          </Typography>}
          text={' My sticky footer can be found here.'}
            leftTop={<Typography variant={'h6'}>Left Top</Typography>}
            centerTop={<Typography variant={'h6'}>Center Top</Typography>}
            rightTop={<Typography variant={'h6'}>Right Top</Typography>}
                  bgColor={theme.palette.primary.main}
          />
      </ThemeProvider>
  );
};

export default App;
