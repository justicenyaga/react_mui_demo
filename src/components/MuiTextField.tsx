import { Stack, TextField, InputAdornment, Button } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useState } from "react";

function MuiTextField() {
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState("");

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField label="Small secondary" size="small" color="secondary" />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField label="Required Input" required />

        <TextField
          label="Helper Text"
          helperText="Do not share your password with anyone"
        />

        <TextField
          label="Type - Password"
          type="password"
          helperText="Do not share your password with anyone"
        />

        <TextField
          label="Read Only"
          InputProps={{ readOnly: true }}
          defaultValue="Hello World"
          helperText="You can't edit this field"
        />
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">Kgs</InputAdornment>,
          }}
        ></TextField>
      </Stack>

      <Stack direction="row" spacing={2}>
        <TextField
          label="Name"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          required
          placeholder="Enter your name"
          error={!value}
          helperText={!value ? "Name is required" : ""}
        />
        <TextField
          label="Password"
          type={showPassword ? "text" : "password"}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  onClick={handleShowPassword}
                  variant="text"
                  color="inherit"
                  size="small"
                  disableElevation
                  disableRipple
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </Button>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Stack>
  );
}

export default MuiTextField;
