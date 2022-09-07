import { Button, Card } from "@mui/material";
import { Box } from "@mui/system";
import { doc, getDoc } from "firebase/firestore";
import React, { Component, useState } from "react";
import { useLocation } from "react-router-dom";
import { db } from "../../../firebase";
import LikeCard from "./LikeCard";

export default function Likes(props) {
  const [email, setEmail] = useState("");
  // const [images, setImages] = useState();

  const numbers = [1, 2, 3, 4, 5];
  const listItems = numbers.map((number) => <li>{number}</li>);

  let location = useLocation();
  if (location.state !== null) {
    console.log(location.state);
    let postsElements = location.state.map((p) => <li>{p}</li>);
    console.log(postsElements);
  } else {
    console.log("errror");
  }

  const getLogUser = async () => {
    const docRef = doc(db, "logUsers", "logUser");
    const docSnap = await getDoc(docRef);
    let logUser = docSnap._document.data.value.mapValue.fields;
    console.log(logUser.email.stringValue);
    setEmail(logUser.email.stringValue);
  };

  return (
    <Box
      sx={{
        width: 0.5,
        mt: 1,
      }}
    >
      <Card
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* <ul>{postsElements}</ul> */}
        {/* <ul>{listItems}</ul> */}
      </Card>
    </Box>
  );
}
