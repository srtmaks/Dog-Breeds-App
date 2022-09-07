import { Card, CardMedia } from "@mui/material";
import React from "react";

export default function LikeCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      {/* <CardMedia component="img" src={props.imageSrc} alt="dog photo" /> */}
      {/* <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
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
      </CardActions> */}
    </Card>
  );
}
