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
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../../firebase";

let suc = false;

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [votOrLog, setVotOrLog] = useState("");

  const checkPassword = async () => {
    const docRef = doc(db, "users", email);
    const docSnap = await getDoc(docRef);
    let user = docSnap._document.data.value.mapValue.fields;
    let name = user.name.stringValue;
    if (password === user.password.stringValue) {
      setVotOrLog("/voting");
      await setDoc(doc(db, "logUsers", "logUser"), {
        email,
        name,
      });
      setEmail("");
      suc = true;
    } else {
      setVotOrLog("/login");
      suc = false;
    }
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
              color={suc ? "success" : "warning"}
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
              color={suc ? "success" : "warning"}
              sx={{ width: 0.9 }}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <ButtonGroup
              variant="contained"
              aria-label="outlined primary button group"
              color="warning"
              sx={{
                width: 0.9,
                display: "flex",
                justifyContent: "space-between",
                boxShadow: "none",
              }}
            >
              <Button
                onClick={() => {
                  checkPassword();
                }}
              >
                Submit
              </Button>{" "}
              <NavLink
                replace
                to={votOrLog}
                style={{ textDecoration: "none", boxSizing: "border-box" }}
              >
                <Button color={suc ? "success" : "error"}>Login</Button>
              </NavLink>
              <NavLink
                replace
                to="/registration"
                style={{ textDecoration: "none", boxSizing: "border-box" }}
              >
                <Button size="small" sx={{ height: 1 }}>
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
