import { Box, ThemeProvider } from "@mui/material";
import Intro from "./components/Intro/Intro";
import { theme } from "./themeOptions";
import { StyledEngineProvider } from "@mui/material/styles";
import styles from "./App.module.css";
import Info from "./components/Info/Info";

function App() {
  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <Box className={styles.global_wrapp}>
          <Intro />
          <Info />
        </Box>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;
