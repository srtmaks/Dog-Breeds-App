import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { ButtonGroup } from "@mui/material";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";

export default function ButtonAppBar() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        width: 0.5,
        mb: 4,
      }}
    >
      <AppBar position="static" sx={{ borderRadius: 3 }} color="primary">
        <Toolbar
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: 1,
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              "& > *": {
                m: 1,
              },
            }}
          >
            <ButtonGroup
              variant="contained"
              color="warning"
              aria-label="outlined primary button group"
              sx={{ m: 0 }}
            >
              <NavLink
                replace
                to="/profile"
                style={{ textDecoration: "none", boxSizing: "border-box" }}
              >
                <Button>profile</Button>
              </NavLink>
              <NavLink
                replace
                to="/breeds"
                style={{ textDecoration: "none", boxSizing: "border-box" }}
              >
                <Button>breeds</Button>
              </NavLink>

              <NavLink
                replace
                to="/voting"
                style={{ textDecoration: "none", boxSizing: "border-box" }}
              >
                <Button>voting</Button>
              </NavLink>
            </ButtonGroup>
            <NavLink
              replace
              to="/login"
              style={{ textDecoration: "none", boxSizing: "border-box" }}
            >
              <Button
                variant="outlined"
                color="warning"
                sx={{ height: "36.5px", m: 0 }}
              >
                log out
              </Button>
            </NavLink>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
