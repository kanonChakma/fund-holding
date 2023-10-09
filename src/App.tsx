import { CssBaseline, PaletteMode } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { ColorContext } from "./ColorContext";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import StickyFooter from "./components/StickyFooter";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { FAQ } from "./pages/FAQ";
import { Home } from "./pages/Home";
import { themeSettings } from "./theme";

function App() {
  const [mode, setMode] = React.useState<PaletteMode>("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode: PaletteMode) =>
          prevMode === "light" ? "dark" : "light"
        );
      },
    }),
    []
  );

  const theme = React.useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return (
    <ColorContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <StickyFooter />
      </ThemeProvider>
    </ColorContext.Provider>
  );
}
export default App;
