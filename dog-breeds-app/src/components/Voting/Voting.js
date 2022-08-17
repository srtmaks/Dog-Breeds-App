import React from "react";
import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ButtonGroup from "@mui/material/ButtonGroup";
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";

export default function Voting() {
  const [imageUrl, setImageUrl] = useState();

  const getImageUrl = async () => {
    const res = await fetch("https://api.thedogapi.com/v1/images/search");
    const data = await res.json();
    setImageUrl(data[0].url);
  };

  useEffect(() => {
    getImageUrl();
  }, []);

  const likeToStore = async (e) => {
    await addDoc(collection(db, "images"), {
      url: imageUrl,
      reaction: "like",
    });
  };

  const disLikeToStore = async (e) => {
    await addDoc(collection(db, "images"), {
      url: imageUrl,
      reaction: "dislike",
    });
  };

  const favToStore = async (e) => {
    await addDoc(collection(db, "images"), {
      url: imageUrl,
      reaction: "favourite",
    });
  };

  return (
    <div className="Voting">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" src={imageUrl} alt="dog photo" />
        <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
          <ButtonGroup
            variant="text"
            aria-label="text button group"
            color="warning"
          >
            <Button
              onClick={() => {
                getImageUrl();
                likeToStore();
              }}
            >
              <ThumbUpIcon />
            </Button>
            <Button
              onClick={() => {
                getImageUrl();
                disLikeToStore();
              }}
            >
              <ThumbDownIcon />
            </Button>
          </ButtonGroup>
          <Button
            sx={{ minWidth: "36px", p: 1, borderRadius: "50%" }}
            onClick={() => {
              getImageUrl();
              favToStore();
            }}
            color="warning"
          >
            <FavoriteIcon />
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
