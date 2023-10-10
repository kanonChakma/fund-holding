import { CssBaseline, PaletteMode } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { ColorContext } from "./ColorContext";
import ResponsiveAppBar from "./components/ResponsiveAppBar";
import { EtfHolding } from "./pages/EtfHolding";
import { EtfList } from "./pages/EtfList";
import { Home } from "./pages/Home";
import { MutualHolding } from "./pages/MutualHolding";
import { MutualList } from "./pages/MutualList";
import { SectorSummary } from "./pages/SectorSummary";
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
          <Route path="/sector-summary" element={<SectorSummary />} />
          <Route path="/etf-list" element={<EtfList />} />
          <Route path="/etf-holding" element={<EtfHolding />} />
          <Route path="/mutual-holding" element={<MutualHolding />} />
          <Route path="/mutual-list" element={<MutualList />} />
        </Routes>
      </ThemeProvider>
    </ColorContext.Provider>
  );
}
export default App;
