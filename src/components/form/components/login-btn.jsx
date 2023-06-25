import { ButtonBase } from "@mui/material";

export default function LoginBtn(props) {
  const { children } = props;
  return (
    <ButtonBase
      sx={{
        padding: "7px 16px",
        background: "rgb(0, 149, 246)",
        color: "#fff",
        fontSize: 14,
        borderRadius: "10px",
        width: "100%",
      }}
      disableTouchRipple
      {...props}
    >
      {children}
    </ButtonBase>
  );
}
