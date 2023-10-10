import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import * as React from "react";

export const MutualList = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Container sx={{ mt: 8, mb: 2 }} maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          MutualList
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {"Do you know more about us?"}
        </Typography>
      </Container>
    </Box>
  );
};
