import {
  Button,
  ButtonGroup,
  Card,
  CardActions,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { doc, getDoc } from "firebase/firestore";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { db } from "../../firebase";

export default function Profile() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const [likesCount, setLikesCount] = useState("");
  const [disLikesCount, setDislikesCount] = useState("");
  const [favsCount, setFavsCount] = useState("");

  const [imagesArray, setImagesArray] = useState();

  const getProfile = async (e) => {
    const docRef = doc(db, "logUsers", "logUser");
    const docSnap = await getDoc(docRef);
    let user = docSnap._document.data.value.mapValue.fields;
    setName(user.name.stringValue);
    setEmail(user.email.stringValue);
  };

  getProfile();

  const getReactions = async (e) => {
    const docRef = doc(db, "users", email);
    const docSnap = await getDoc(docRef);
    let reactions =
      docSnap._document.data.value.mapValue.fields.reactions.mapValue.fields;
    setLikesCount(reactions.likes.arrayValue.values.length);
    setDislikesCount(reactions.dislikes.arrayValue.values.length);
    setFavsCount(reactions.favourites.arrayValue.values.length);
  };

  getReactions();

  const getLikeImages = async () => {
    const docRef = doc(db, "users", email);
    const docSnap = await getDoc(docRef);
    let likeImages =
      docSnap._document.data.value.mapValue.fields.reactions.mapValue.fields
        .likes.arrayValue.values;
    setImagesArray(likeImages);
  };

  const getDislikeImages = async () => {
    const docRef = doc(db, "users", email);
    const docSnap = await getDoc(docRef);
    let likeImages =
      docSnap._document.data.value.mapValue.fields.reactions.mapValue.fields
        .dislikes.arrayValue.values;
    setImagesArray(likeImages);
  };

  const getFavsImages = async () => {
    const docRef = doc(db, "users", email);
    const docSnap = await getDoc(docRef);
    let likeImages =
      docSnap._document.data.value.mapValue.fields.reactions.mapValue.fields
        .favourites.arrayValue.values;
    setImagesArray(likeImages);
  };

  return (
    <Box
      sx={{
        width: 0.5,
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
        <Box
          sx={{
            width: 1,
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ mt: 3, mr: 5 }}
          >
            Name: {name}
          </Typography>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{ mt: 3, ml: 5 }}
          >
            Email: {email}
          </Typography>
        </Box>

        <CardActions>
          <ButtonGroup
            variant="outlined"
            aria-label="outlined primary button group"
            color="warning"
          >
            <NavLink
              replace
              to={{
                pathname: "/profile/likes",
              }}
              state={imagesArray}
              style={{ textDecoration: "none", boxSizing: "border-box" }}
            >
              <Button
                size="small"
                color="warning"
                sx={{ height: 1 }}
                onClick={() => {
                  getLikeImages();
                }}
              >
                likes: {likesCount}
              </Button>
            </NavLink>
            <NavLink
              replace
              to={{
                pathname: "/profile/dislikes",
              }}
              state={imagesArray}
              style={{ textDecoration: "none", boxSizing: "border-box" }}
            >
              <Button
                size="small"
                color="warning"
                sx={{ height: 1 }}
                onClick={() => {
                  getDislikeImages();
                }}
              >
                dislikes: {disLikesCount}
              </Button>
            </NavLink>
            <NavLink
              replace
              to={{
                pathname: "/profile/favourites",
              }}
              state={imagesArray}
              style={{ textDecoration: "none", boxSizing: "border-box" }}
            >
              <Button
                size="small"
                color="warning"
                sx={{ height: 1 }}
                onClick={() => {
                  getFavsImages();
                }}
              >
                favourites: {favsCount}
              </Button>
            </NavLink>
          </ButtonGroup>
        </CardActions>
      </Card>
    </Box>
  );
}
