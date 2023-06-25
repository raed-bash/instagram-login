import { Box, Typography } from "@mui/material";

export default function NotHaveAccount(props) {
  return (
    <Box {...props}>
      <Typography
        display="inline"
        color="#737373"
        fontSize={14}
        fontWeight={100}
      >
        Don't have an account?{" "}
      </Typography>
      <Typography
        display="inline"
        color="#0095f6"
        fontFamily='"Roboto","Helvetica","Arial",sans-serif'
      >
        Sign up
      </Typography>
    </Box>
  );
}
