import {
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";

export default function HomePage() {
  return (
    <Card sx={{ maxWidth: 800 }}>
      <CardContent>
        <Typography gutterBottom variant="h1" component="div">
          Dog Breeds App
        </Typography>
        <Typography variant="h5" color="text.secondary">
          Pet project for LOGOS IT ACACDEMY examination
        </Typography>
      </CardContent>
      <CardActions>
        <NavLink
          replace
          to="/login"
          style={{ textDecoration: "none", boxSizing: "border-box" }}
        >
          <Button size="small" color="warning">
            Login
          </Button>
        </NavLink>
        <NavLink
          replace
          to="/registration"
          style={{ textDecoration: "none", boxSizing: "border-box" }}
        >
          <Button size="small" color="warning">
            Registration
          </Button>
        </NavLink>
      </CardActions>
    </Card>
  );
}
