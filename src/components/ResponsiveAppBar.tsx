import AdbIcon from "@mui/icons-material/Adb";
import MenuIcon from "@mui/icons-material/Menu";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import * as React from "react";
import { Link } from "react-router-dom";
import NestedMenu from "./NestedMenu";
import { ToggleButton } from "./ToggleButton";

const pages_ = [
  {
    menuTitle: "HOME",
    pageURL: "/",
  },
  {
    menuTitle: "SECTOR SUMMARY",
    pageURL: "/sector-summary",
  },
  {
    menuTitle: "ETF LIST",
    pageURL: "/etf-list",
  },
  {
    menuTitle: "MUTUAL FUND LIST",
    pageURL: "/mutual-list",
  },
];

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      sx={{
        background: "transparent",
        boxShadow: "none",
        padding: "10px",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages_.map((page, index) => {
                const { menuTitle, pageURL } = page;
                return (
                  <MenuItem
                    key={index}
                    onClick={handleCloseNavMenu}
                    sx={{
                      display: {
                        width: "200px",
                      },
                    }}
                  >
                    <Typography
                      key={index}
                      component={Link}
                      to={pageURL}
                      color="secondary"
                    >
                      {menuTitle}
                    </Typography>
                  </MenuItem>
                );
              })}
              <MenuItem
                onClick={handleCloseNavMenu}
                sx={{
                  display: {
                    width: "200px",
                  },
                }}
              >
                <Typography
                  component={Link}
                  to="/etf-holding"
                  color="secondary"
                >
                  ETF HOLDING
                </Typography>
              </MenuItem>
              <MenuItem
                onClick={handleCloseNavMenu}
                sx={{
                  display: {
                    width: "200px",
                  },
                }}
              >
                <Typography
                  component={Link}
                  to="/mutual-holding"
                  color="secondary"
                >
                  MUTUAL FUND HOLDING
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>

          <Box
            m={1}
            display="flex"
            justifyContent="flex-end"
            alignItems="flex-end"
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            {pages_.map((page, index) => {
              const { menuTitle, pageURL } = page;
              return (
                <Button
                  sx={{ mr: 2 }}
                  key={index}
                  component={Link}
                  to={pageURL}
                  variant="outlined"
                  color="inherit"
                >
                  {menuTitle}
                </Button>
              );
            })}
          </Box>

          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
            }}
          >
            <NestedMenu
              label="ETF HOLDING"
              items={[{ label: "Historical", route: "/etf-holding" }]}
            />
            <NestedMenu
              label="MUTUAL FUND HOLDING"
              items={[{ label: "Historical", route: "/mutual-holding" }]}
            />
          </Box>

          <ToggleButton />
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
