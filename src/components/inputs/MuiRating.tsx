import { Stack, Rating } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import React, { useState } from "react";

function MuiRating() {
  const [value, setValue] = useState<number | null>(3.5);

  console.log({ value });

  const handleChange = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setValue(newValue);
  };

  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5}
        size="large"
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        icon={<FavoriteIcon fontSize="inherit" color="error" />}
        // readOnly
        highlightSelectedOnly
      />
    </Stack>
  );
}

export default MuiRating;
