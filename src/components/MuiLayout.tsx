import { Box } from "@mui/material";

function MuiLayout() {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height: "100px",
          width: "200px",
          padding: "16px",
          "&:hover": {
            backgroundColor: "primary.light",
          },
        }}
      >
        Justice Nyaga
      </Box>

      <Box
        display="flex"
        bgcolor="success.light"
        height="100px"
        width="200px"
        p={2}
      ></Box>
    </>
  );
}

export default MuiLayout;
