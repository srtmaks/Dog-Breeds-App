import {
  Box,
  Button,
  ButtonGroup,
  Card,
  CardActions,
  TextField,
  Typography,
} from "@mui/material";
import { doc, getDoc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../firebase";
import { NavLink } from "react-router-dom";

let suc = false;
export default function Registration() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    const docRef = doc(db, "users", email);
    const docSnap = await getDoc(docRef);
    // let user = docSnap._document;
    // .data.value.mapValue.fields;
    console.log(docSnap._document);

    if (docSnap._document === null) {
      await setDoc(doc(db, "users", email), {
        name,
        email,
        password,
        reactions: {
          likes: [],
          dislikes: [],
          favourites: [],
        },
      });
      setName("");
      setEmail("");
      setPassword("");
      suc = true;
    } else {
      suc = false;
    }
  };

  return (
    <div className="registration">
      <Card
        sx={{
          maxWidth: 400,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography gutterBottom variant="h5" component="div" sx={{ mt: 3 }}>
          Registration
        </Typography>
        <CardActions>
          <Box
            component="form"
            sx={{
              width: 400,
              height: 400,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <TextField
              required
              id="name"
              label="Name"
              color="warning"
              sx={{ width: 0.9 }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
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
                  handleSubmit();
                }}
                color={suc ? "success" : "warning"}
              >
                Submit
              </Button>
              <NavLink
                replace
                to="/login"
                style={{ textDecoration: "none", boxSizing: "border-box" }}
              >
                <Button size="small" color="warning" sx={{ height: 1 }}>
                  Login
                </Button>
              </NavLink>
            </ButtonGroup>
          </Box>
        </CardActions>
      </Card>
    </div>
  );
}
