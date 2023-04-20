import {
  Box,
  FormControlLabel,
  Switch,
  FormControl,
  FormGroup,
  FormLabel,
  FormHelperText,
} from "@mui/material";
import { useState } from "react";

function MuiSwitch() {
  const [checked, setChecked] = useState(false);
  const [settings, setSettings] = useState<string[]>([]);

  console.log({ checked });
  console.log({ settings });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleSettingsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const index = settings.indexOf(event.target.value);

    if (index === -1) {
      setSettings([...settings, event.target.value]);
    } else {
      setSettings(settings.filter((setting) => setting !== event.target.value));
    }
  };

  return (
    <Box>
      <Box>
        <FormControlLabel
          label="Dark mode"
          control={
            <Switch
              checked={checked}
              onChange={handleChange}
              size="small"
              color="success"
            />
          }
        />
      </Box>

      <Box>
        <FormControl required error>
          <FormLabel>Settings</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="Complete Dark"
              control={
                <Switch
                  value="cmdark"
                  checked={settings.includes("cmdark")}
                  onChange={handleSettingsChange}
                />
              }
            />

            <FormControlLabel
              label="dim"
              control={
                <Switch
                  value="dim"
                  checked={settings.includes("dim")}
                  onChange={handleSettingsChange}
                />
              }
            />
          </FormGroup>
          <FormHelperText>Invalid selection</FormHelperText>
        </FormControl>
      </Box>
    </Box>
  );
}

export default MuiSwitch;
