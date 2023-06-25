import { Box } from "@mui/material";
import ContinueFaceBtn from "./components/continue-facebook-btn";
import FacebookIcon from "@mui/icons-material/Facebook";
import LoginOrCreate from "./components/login-or-create";
import Input from "./components/input";
import { useState } from "react";
import ForgotPassword from "./components/forgot-password";
import LoginBtn from "./components/login-btn";
import NotHaveAccount from "./components/not-have-account";
import { service } from "../../app/service";
export default function Form() {
  const [value, setValue] = useState({ email: "", password: "" });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValue((n) => ({ ...n, [name]: value }));
  };
  return (
    <Box>
      <ContinueFaceBtn
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
        fontWeight="600"
        background="#0095f6"
      >
        <FacebookIcon sx={{ mr: 1 }}></FacebookIcon>Continue with Facebook
      </ContinueFaceBtn>
      <LoginOrCreate marginTop="20px" />
      <Box
        display={"flex"}
        gap={"7px 0"}
        flexDirection={"column"}
        marginTop={"20px"}
      >
        <Input
          type="text"
          placeholder="Phone number, username, or email"
          name="email"
          onChange={handleChange}
          value={value.email || ""}
        />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
          value={value.password || ""}
        />
      </Box>
      <Box
        display="flex"
        justifyContent="end"
        marginTop="15px"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
      >
        <ForgotPassword>Forgot Password?</ForgotPassword>
      </Box>
      <Box marginTop="20px">
        <LoginBtn
          onClick={() => {
            if (value.email !== "" && value.password !== "")
              service
                .post("", value)
                .then((res) => {})
                .catch((error) => {});
          }}
        >
          Log in
        </LoginBtn>
      </Box>
      <NotHaveAccount marginTop="20px" />
    </Box>
  );
}
