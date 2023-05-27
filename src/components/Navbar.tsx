import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { NavLink, useNavigate } from "react-router-dom";

interface Props {
  window?: () => Window;
}

function Navbar(props: Props) {
  const navigate = useNavigate();

  const [mobileOpne, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          ></IconButton>
          <NavLink
            to="/"
            style={{ flexGrow: 1, marginLeft: "15%", fontSize: "20px" }}
          >
            REACT + TYPESCRIPT
          </NavLink>
          <Button
            onClick={() => navigate("/")}
            style={{
              color: "white",
              fontSize: "15px",
              fontWeight: "600",
              marginRight: "2%",
            }}
          >
            СПИСОК ДЕЛ
          </Button>
          <Button
            onClick={() => navigate("/about")}
            style={{
              color: "white",
              fontSize: "15px",
              fontWeight: "600",
              marginRight: "10%",
            }}
          >
            ИНФОРМАЦИЯ
          </Button>
        </Toolbar>
      </AppBar>
      <Box component="main" sx={{ p: 3 }}></Box>
    </Box>
  );
}

export default Navbar;
