import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const getInfo = async () => {
    const docRef = doc(db, "users", email);
    const docSnap = await getDoc(docRef);

    console.log("Document data:", docSnap._document.data.value.mapValue.fields);
  };

  return (
    <div className="login">
      <Card
        sx={{
          maxWidth: 400,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography gutterBottom variant="h5" component="div" sx={{ mt: 3 }}>
          Login
        </Typography>
        <CardActions>
          <Box
            component="form"
            sx={{
              width: 400,
              height: 300,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <TextField
              required
              id="email"
              label="Email"
              color="warning"
              sx={{ width: 0.9 }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              required
              id="password"
              label="Password"
              type="password"
              autoComplete="current-password"
              color="warning"
              sx={{ width: 0.9 }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
              color="warning"
            >
              <Button
                onClick={() => {
                  getInfo();
                }}
              >
                Login
              </Button>
              <NavLink
                replace
                to="/registration"
                style={{ textDecoration: "none", boxSizing: "border-box" }}
              >
                <Button size="small" color="warning" sx={{ height: 1 }}>
                  Registration
                </Button>
              </NavLink>
            </ButtonGroup>
          </Box>
        </CardActions>
      </Card>
    </div>
  );
}
