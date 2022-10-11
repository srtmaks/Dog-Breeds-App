import {
  Autocomplete,
  Button,
  CardContent,
  CardHeader,
  CardMedia,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";

export default function Breeds() {
  const [info, setInfo] = useState();
  const [img, setImg] = useState();
  const [breeds, setBreeds] = useState();
  const [breedName, setBreedName] = useState("");
  const [showBreed, setShowBreed] = useState();

  useEffect(() => {
    getBreeds();
  }, []);

  async function getBreeds() {
    try {
      const response = await fetch("https://api.thedogapi.com/v1/breeds");
      const data = await response.json();
      setBreeds(data);
      console.log(breeds);
    } catch (err) {
      console.log(err);
    }
  }

  async function searchBreed() {
    try {
      const response = await fetch(
        `https://api.thedogapi.com/v1/breeds/search?q=${breedName}`
      );
      const data = await response.json();
      setInfo(data);
      console.log(info);
      const responseImg = await fetch(
        `https://api.thedogapi.com/v1/images/${data[0].reference_image_id}`
      );
      const dataImg = await responseImg.json();
      console.log(dataImg);
      setImg(dataImg.url);
    } catch (err) {
      console.log(err);
    }

    setShowBreed(
      <Card sx={{ maxWidth: 345 }}>
        <CardHeader title={info[0].name} subheader={info[0].temperament} />
        <CardMedia component="img" image={img} alt="Breed image" />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            Height (sm): {info[0].height.metric};
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Weight (kg): {info[0].weight.metric};
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lifespan (years): {info[0].life_span};
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Bred for: {info[0].bred_for};
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Breed group: {info[0].breed_group};
          </Typography>
        </CardContent>
      </Card>
    );
  }

  return (
    <div>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={breeds}
        sx={{ width: 300 }}
        onChange={(e) => {
          setBreedName(e.target.outerText);
        }}
        getOptionLabel={(option) => option.name}
        renderInput={(params) => <TextField {...params} label="Breeds" />}
      />
      <Button
        onClick={() => {
          searchBreed();
        }}
      >
        Search
      </Button>
      {showBreed}
    </div>
  );
}
