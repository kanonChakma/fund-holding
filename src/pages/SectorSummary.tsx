import { Grid } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import * as React from "react";
import PieChart from "../components/PieChart";

export const SectorSummary = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <Container sx={{ mt: 8, mb: 2 }} maxWidth="lg">
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
          textAlign="center"
          textTransform="uppercase"
          marginBottom="30px"
        >
          Sector Summary
        </Typography>

        <Grid container spacing={2}>
          <Grid item lg={6} xs={12}>
            <PieChart />
          </Grid>
          <Grid item lg={6} xs={12}>
            <PieChart />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
