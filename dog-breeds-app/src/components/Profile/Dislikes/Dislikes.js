import { Button, Card } from "@mui/material";
import { Box } from "@mui/system";
import { doc, getDoc } from "firebase/firestore";
import React, { Component, useState } from "react";
// import { useLocation } from "react-router-dom";
import { db } from "../../../firebase";
// import LikeCard from "./LikeCard";

export default function DisLikes() {
  const [email, setEmail] = useState("");
  const [images, setImages] = useState();

  //   let location = useLocation();
  //   console.log(location);

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
        <div>Dislikes</div>
      </Card>
    </Box>
  );
}
