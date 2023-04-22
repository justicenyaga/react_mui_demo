import { Box } from "@mui/material";
import { DateRangePicker, DateRange } from "@mui/x-date-pickers-pro";
import { useState } from "react";

function MuiDateRangePicker() {
  const [value, setValue] = useState<DateRange<Date>>([null, null]);
  console.log({ value });

  return (
    <Box width="500px">
      <DateRangePicker
        localeText={{ start: "Check In", end: "Check Out" }}
        value={value}
        onChange={(newValue) => setValue(newValue)}
      />
    </Box>
  );
}

export default MuiDateRangePicker;
