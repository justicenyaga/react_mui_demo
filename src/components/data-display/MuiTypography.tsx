import { Typography } from "@mui/material";

function MuiTypography() {
  return (
    <div>
      <Typography variant="h1">h1. Heading</Typography>
      <Typography variant="h2">h2. Heading</Typography>
      <Typography variant="h3">h3. Heading</Typography>
      <Typography variant="h4" component="h1" gutterBottom>
        h4. Heading
      </Typography>
      <Typography variant="h5">h5. Heading</Typography>
      <Typography variant="h6">h6. Heading</Typography>

      <Typography variant="subtitle1">Subtitle 1</Typography>
      <Typography variant="subtitle2">Subtitle 2</Typography>

      <Typography variant="body1">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi nisi
        non laboriosam magni deserunt quod ea, rem voluptates autem, mollitia
        repellendus ipsa velit sequi illum sed. Minima eveniet velit quae.
      </Typography>
      <Typography variant="body2">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi nisi
        non laboriosam magni deserunt quod ea, rem voluptates autem, mollitia
        repellendus ipsa velit sequi illum sed. Minima eveniet velit quae.
      </Typography>
    </div>
  );
}

export default MuiTypography;
