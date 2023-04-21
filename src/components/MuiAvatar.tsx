import { Stack, Avatar, AvatarGroup } from "@mui/material";

function MuiAvatar() {
  return (
    <Stack spacing={4}>
      <Stack direction="row" spacing={1}>
        <Avatar sx={{ bgcolor: "primary.light" }}>BW </Avatar>
        <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
      </Stack>

      <Stack direction="row" spacing={1}>
        <AvatarGroup max={3}>
          <Avatar sx={{ bgcolor: "primary.light" }}>BW </Avatar>
          <Avatar sx={{ bgcolor: "success.light" }}>CK</Avatar>
          <Avatar
            src="https://randomuser.me/api/portraits/women/79.jpg"
            alt="Jane Doe"
          />
          <Avatar src="/images/justice.jpg" alt="Justice Nyaga" />
        </AvatarGroup>
      </Stack>

      <Stack direction="row" spacing={1}>
        <Avatar sx={{ bgcolor: "primary.light", width: 48, height: 48 }}>
          BW
        </Avatar>
        <Avatar
          variant="square"
          sx={{ bgcolor: "success.light", width: 48, height: 48 }}
        >
          CK
        </Avatar>
        <Avatar
          variant="rounded"
          sx={{ bgcolor: "error.light", width: 48, height: 48 }}
        >
          JD
        </Avatar>
      </Stack>
    </Stack>
  );
}

export default MuiAvatar;
