import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { useTheme } from "@mui/material/styles";
// Material UI
import { Theme } from "@mui/material/styles/createTheme";
import Typography from "@mui/material/Typography";
import { createStyles, makeStyles } from "@mui/styles";
import * as React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    shapeDivider: {
      position: "absolute",
      bottom: 0,
      left: 0,
      width: "100%",
      overflow: "hidden",
      lineHeight: "0",
      transform: "rotate(180deg)",
    },
    svg: {
      position: "relative",
      display: "block",
      width: "calc(100% + 1.3px)",
      height: "166px",
      fill: "#F5EFEF",
    },
  })
);

export const Contact = () => {
  const theme = useTheme();
  const classes = useStyles(theme);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Container sx={{ mt: 8, mb: 2 }} maxWidth="sm">
        <Typography variant="h2" component="h1" gutterBottom>
          CONTACT US
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {"You can connect us on social platforms as well or send us email"}
        </Typography>
        <div className={classes.shapeDivider}>
          <svg
            className={classes.svg}
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
          </svg>
        </div>
      </Container>
    </Box>
  );
};
