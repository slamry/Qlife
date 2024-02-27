import { Box, ThemeProvider } from "@mui/material";
import Intro from "./components/Intro/Intro";
import { theme } from "./themeOptions";
import { StyledEngineProvider } from "@mui/material/styles";
import styles from "./App.module.css";
import Info from "./components/Info/Info";
import GameSteps from "./components/GameSteps/GameSteps";
import Form from "./components/Form/Form";
import Development from "./components/Development/Development";
import AboutUs from "./components/AboutUs/AboutUs";
import Footer from "./components/Footer/Footer";
import JoinUs from "./components/JoinUs/JoinUs";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Box className={styles.global_wrapp}>
          <Intro />
          <Info />
          <GameSteps />
          <Form />
          <Development />
          <AboutUs />
          <JoinUs />
          <Footer />
        </Box>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
