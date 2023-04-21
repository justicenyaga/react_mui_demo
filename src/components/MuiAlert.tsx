import { Stack, Alert, AlertTitle, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

function MuiAlert() {
  return (
    <Stack spacing={2}>
      <Alert severity="error">This is an error alert</Alert>
      <Alert severity="warning">This is a warning alert</Alert>
      <Alert severity="info">This is an info alert</Alert>
      <Alert severity="success">This is a success alert</Alert>

      <Alert variant="outlined" severity="error">
        This is an outlined error alert
      </Alert>
      <Alert variant="outlined" severity="warning">
        This is an outlined warning alert
      </Alert>
      <Alert variant="outlined" severity="info">
        This is an outlined info alert
      </Alert>
      <Alert variant="outlined" severity="success">
        This is an outlined success alert
      </Alert>

      <Alert
        variant="filled"
        severity="error"
        onClose={() => alert("Close error")}
      >
        <AlertTitle>Error</AlertTitle>
        This is a filled error alert with a title
      </Alert>
      <Alert variant="filled" severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is a filled warning alert with a title
      </Alert>
      <Alert variant="filled" severity="info">
        <AlertTitle>Info</AlertTitle>
        This is a filled info alert with a title
      </Alert>
      <Alert
        variant="filled"
        severity="success"
        icon={<CheckIcon fontSize="inherit" />}
        action={
          <Button color="inherit" size="small">
            UNDO
          </Button>
        }
      >
        <AlertTitle>Success</AlertTitle>
        This is a filled success alert with a title
      </Alert>
    </Stack>
  );
}

export default MuiAlert;
