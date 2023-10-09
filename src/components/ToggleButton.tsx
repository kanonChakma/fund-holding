import Brightness3Icon from "@mui/icons-material/Brightness3";
import FlareIcon from "@mui/icons-material/Flare";
import { Box, IconButton, useTheme } from "@mui/material";
import React from "react";
import { ColorContext } from "../ColorContext";
import ComponentsTooltip from "./ComponentsTooltip";

export const ToggleButton = () => {
  const theme = useTheme();
  const colorMode = React.useContext(ColorContext);

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        alignItems: "right",
        justifyContent: "right",
      }}
    >
      <ComponentsTooltip>
        <IconButton
          aria-label={
            theme.palette.mode === "dark" ? "Set light theme" : "Set dark theme"
          }
          edge="end"
          sx={{ ml: 1 }}
          onClick={colorMode.toggleColorMode}
          color="inherit"
        >
          {theme.palette.mode === "dark" ? <FlareIcon /> : <Brightness3Icon />}
        </IconButton>
      </ComponentsTooltip>
    </Box>
  );
};
