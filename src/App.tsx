import { createTheme, colors, ThemeProvider } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import "./App.css";
// import MuiAccordion from "./components/surfaces/MuiAccordion";
// import MuiAlert from "./components/feedback/MuiAlert";
// import MuiAutocomplete from "./components/inputs/MuiAutocomplete";
// import MuiAvatar from "./components/data-display/MuiAvatar";
// import MuiBadge from "./components/data-display/MuiBadge";
// import MuiBottonNavigation from "./components/navigation/MuiBottonNavigation";
// import MuiBreadcrumbs from "./components/navigation/MuiBreadcrumbs";
// import MuiButton from "./components/inputs/MuiButton";
// import MuiCard from "./components/surfaces/MuiCard";
// import MuiCheckbox from "./components/inputs/MuiCheckbox";
// import MuiChip from "./components/data-display/MuiChip";
// import MuiDateRangePicker from "./components/mui-x/MuiDateRangePicker";
// import MuiDialog from "./components/feedback/MuiDialog";
// import MuiDrawer from "./components/navigation/MuiDrawer";
// import MuiImageList from "./components/surfaces/MuiImageList";
// import MuiLayout from "./components/layout/MuiLayout";
// import MuiLink from "./components/navigation/MuiLink";
// import MuiList from "./components/data-display/MuiList";
// import MuiLoadingButton from "./components/lab/MuiLoadingButton";
// import MuiMasonry from "./components/lab/MuiMasonry";
// import MuiNavbar from "./components/navigation/MuiNavbar";
// import MuiPicker from "./components/mui-x/MuiPicker";
// import MuiProgress from "./components/feedback/MuiProgress";
// import MuiRadioButton from "./components/inputs/MuiRadioButton";
// import MuiRating from "./components/inputs/MuiRating";
import MuiResponsiveness from "./components/MuiResponsiveness";
// import MuiSelect from "./components/inputs/MuiSelect";
// import MuiSkeleton from "./components/feedback/MuiSkeleton";
// import MuiSnackbar from "./components/feedback/MuiSnackbar";
// import MuiSpeedDial from "./components/navigation/MuiSpeedDial";
// import MuiSwitch from "./components/inputs/MuiSwitch";
// import MuiTable from "./components/data-display/MuiTable";
// import MuiTabs from "./components/navigation/MuiTabs";
// import MuiTextField from "./components/inputs/MuiTextField";
// import MuiTimeline from "./components/lab/MuiTimeline";
// import MuiTooltip from "./components/data-display/MuiTooltip";
// import MuiTypography from "./components/data-display/MuiTypography";

const theme = createTheme({
  status: {
    danger: "#e53e3e",
  },

  palette: {
    secondary: {
      main: colors.orange[500],
    },
    neutral: {
      main: colors.grey[500],
      darker: colors.grey[700],
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <div className="App">
          {/* <MuiTypography /> */}
          {/* <MuiButton /> */}
          {/* <MuiTextField /> */}
          {/* <MuiSelect /> */}
          {/* <MuiRadioButton /> */}
          {/* <MuiCheckbox /> */}
          {/* <MuiSwitch /> */}
          {/* <MuiRating /> */}
          {/* <MuiAutocomplete /> */}
          {/* <MuiLayout /> */}
          {/* <MuiCard /> */}
          {/* <MuiAccordion /> */}
          {/* <MuiImageList /> */}
          {/* <MuiNavbar /> */}
          {/* <MuiLink /> */}
          {/* <MuiBreadcrumbs /> */}
          {/* <MuiDrawer /> */}
          {/* <MuiSpeedDial /> */}
          {/* <MuiBottonNavigation /> */}
          {/* <MuiAvatar /> */}
          {/* <MuiBadge /> */}
          {/* <MuiList /> */}
          {/* <MuiChip /> */}
          {/* <MuiTooltip /> */}
          {/* <MuiTable /> */}
          {/* <MuiAlert /> */}
          {/* <MuiSnackbar /> */}
          {/* <MuiDialog /> */}
          {/* <MuiProgress /> */}
          {/* <MuiSkeleton /> */}
          {/* <MuiLoadingButton /> */}
          {/* <MuiPicker /> */}
          {/* <MuiDateRangePicker /> */}
          {/* <MuiTabs /> */}
          {/* <MuiTimeline /> */}
          {/* <MuiMasonry /> */}
          <MuiResponsiveness />
        </div>
      </LocalizationProvider>
    </ThemeProvider>
  );
}

export default App;
