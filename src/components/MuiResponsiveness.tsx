import { Box } from "@mui/material";
import { styled } from "@mui/material";

const StyledBox = styled(Box)(({ theme }) => ({
  height: "250px",
  width: "250px",
  backgroundColor: theme.palette.neutral?.darker,
}));

function MuiResponsiveness() {
  return (
    <>
      <Box
        sx={{
          height: "300px",
          width: {
            xm: 100,
            sm: 200,
            md: 300,
            lg: 400,
            xl: 500,
          },
          bgcolor: "secondary.dark",
        }}
      ></Box>

      <StyledBox />
    </>
  );
}

export default MuiResponsiveness;
