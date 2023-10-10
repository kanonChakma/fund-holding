import { Box, Button, Menu, MenuItem, Typography } from "@mui/material";
import Fade from "@mui/material/Fade";
import React from "react";
import { Link } from "react-router-dom";

export interface MenuItemProps {
  label: string;
  route: string;
}

const NestedMenu: React.FC<{ label: string; items: MenuItemProps[] }> = ({
  label,
  items,
}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ mr: 2, cursor: "pointer" }}>
      <Button variant="outlined" color="inherit" onClick={handleClick}>
        {label}
      </Button>
      <Menu
        id="mutal-fund"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {items.map((item, index) => (
          <MenuItem onClick={handleClose} key={index}>
            <Typography component={Link} to={item.route} color="secondary">
              {item.label}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default NestedMenu;
