import { Box } from "@mui/material";
import logo from "../assets/logo/logo insta.png";
export default function Logo() {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height={150}
    >
      <img src={logo} alt="logo" width={175} height={51} />
    </Box>
  );
}
