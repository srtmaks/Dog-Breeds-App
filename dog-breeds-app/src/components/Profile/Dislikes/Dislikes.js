import {
  Button,
  Card,
  CardMedia,
  List,
  ListItem,
  ListItemIcon,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebase";

export default function Dislikes(props) {
  const [postsElements, setPostsElements] = useState([]);

  let location = useLocation();

  const showCards = async () => {
    const docRef = doc(db, "users", location.state);
    const docSnap = await getDoc(docRef);
    let likeImages =
      docSnap._document.data.value.mapValue.fields.reactions.mapValue.fields
        .dislikes.arrayValue.values;

    if (location.state !== null) {
      console.log(location.state);
      setPostsElements(
        likeImages.map((p) => (
          <ListItem disablePadding sx={{ mb: 2 }}>
            <ListItemIcon>
              <ThumbDownIcon />
            </ListItemIcon>
            <Card sx={{ maxWidth: 345 }}>
              <CardMedia component="img" src={p.stringValue} alt="dog photo" />
            </Card>
          </ListItem>
        ))
      );
    } else {
      console.log("errror");
    }
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
        <Button
          onClick={() => {
            showCards();
          }}
        >
          Show Cards
        </Button>
        <List>{postsElements}</List>
      </Card>
    </Box>
  );
}
