import {
  Box,
  Card,
  CardContent,
  CardActions,
  CardMedia,
  Typography,
  Button,
} from "@mui/material";

function MuiCard() {
  return (
    <Box width="300px">
      <Card>
        <CardMedia
          component="img"
          height={140}
          image="https://picsum.photos/200/300"
          alt="unsplash image"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>

          <Typography variant="body2" color="text.secondary">
            React is a free and open-source front-end JavaScript library for
            building user interfaces based on components. It is maintained by
            Meta and a community of individual developers and companies.
          </Typography>
        </CardContent>

        <CardActions>
          <Button size="small">
            <Typography fontWeight="550" fontSize={14}>
              Share
            </Typography>
          </Button>
          <Button size="small">
            <Typography fontWeight="550" fontSize={14}>
              Learn more
            </Typography>
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default MuiCard;
