import { Box } from "@mui/material";

export default function ForgotPassword(props) {
  const { children } = props;
  return (
    <Box color="rgb(0, 149, 246)" fontSize={14} {...props}>
      {children}
    </Box>
  );
}
