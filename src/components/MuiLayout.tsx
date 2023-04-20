import { Box, Stack, Divider } from "@mui/material";

function MuiLayout() {
  return (
    <Stack
      sx={{ border: "1px solid" }}
      direction="row"
      spacing={2}
      divider={<Divider orientation="vertical" flexItem />}
    >
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
    </Stack>
  );
}

export default MuiLayout;
