import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";

import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";

import { useState } from "react";

function MuiButton() {
  //   const [formats, setFormats] = useState<string[]>([]); // for multiple selection
  const [formats, setFormats] = useState<string | null>(null); // for exclusive selection

  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    // updatedFormats: string[] // for multiple selection
    updatedFormats: string | null // for exclusive selection
  ) => {
    setFormats(updatedFormats);
  };

  console.log("formats", formats);

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction="row">
        {/* text - grab less ui attention, eg. for card footer, confirm button, links */}
        <Button variant="text" href="https://google.com">
          Text
        </Button>

        {/* contained - grab more ui attention, eg. for primary actions e.g register or login buttons */}
        <Button variant="contained">Contained</Button>

        {/* outlined - grab more ui attention, eg. for secondary actions e.g cancel or go back buttons */}
        <Button variant="outlined">Outlined</Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="contained" color="inherit">
          Inherit
        </Button>
        <Button variant="contained" color="primary" disabled>
          Disabled
        </Button>
      </Stack>

      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>

      <Stack spacing={2} direction="row">
        <Button
          variant="contained"
          startIcon={<SendIcon />}
          disableRipple
          onClick={() => alert("Clicked")}
        >
          Send
        </Button>
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>
          Send
        </Button>

        {/* icon button are more subtle, eg. for navigation bar where you want to keep the ui clean and simple */}
        <IconButton aria-label="send" color="success" size="small">
          <SendIcon />
        </IconButton>
      </Stack>

      <Stack direction="row">
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="small"
          color="secondary"
          aria-label="alignment button group"
        >
          <Button onClick={() => alert("Left clicked")}>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text formatting"
          value={formats}
          onChange={handleFormatChange}
          size="small"
          color="primary"
          orientation="vertical"
          exclusive // only one button can be selected at a time
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
}

export default MuiButton;
