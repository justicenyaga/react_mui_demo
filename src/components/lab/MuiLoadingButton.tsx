import { Stack } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";

function MuiLoadingButton() {
  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        <LoadingButton variant="outlined">Submit</LoadingButton>
        <LoadingButton loading variant="outlined">
          Submit
        </LoadingButton>
      </Stack>

      <Stack spacing={2} direction="row">
        <LoadingButton variant="outlined" loadingIndicator="Loading...">
          Fetch Data
        </LoadingButton>
        <LoadingButton loading variant="outlined" loadingIndicator="Loading...">
          Fetch Data
        </LoadingButton>
      </Stack>

      <Stack spacing={2} direction="row">
        <LoadingButton
          variant="outlined"
          loadingPosition="start"
          startIcon={<SaveIcon />}
        >
          Save
        </LoadingButton>

        <LoadingButton
          loading
          variant="outlined"
          loadingPosition="start"
          startIcon={<SaveIcon />}
        >
          Save
        </LoadingButton>
      </Stack>
    </Stack>
  );
}

export default MuiLoadingButton;
