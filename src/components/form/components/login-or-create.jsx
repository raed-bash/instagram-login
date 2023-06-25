import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
export default function LoginOrCreate(props) {
  const StyledBorder = styled(Box)(() => ({
    height: 1,
    width: "50%",
    background: "#ccd0d5",
  }));
  return (
    <Box
      sx={{ display: "flex", width: "100%", alignItems: "center" }}
      {...props}
    >
      <StyledBorder></StyledBorder>
      <Box sx={{ mx: 2 }}>
        <Typography sx={{ fontSize: 12, color: "#737373", fontWeight: "500" }}>
          OR
        </Typography>
      </Box>
      <StyledBorder></StyledBorder>
    </Box>
  );
}
