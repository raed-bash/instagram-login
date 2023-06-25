import { ButtonBase } from "@mui/material";

export default function ContinueFaceBtn(props) {
  const { children } = props;
  return (
    <ButtonBase
      sx={{
        padding: "5px 16px",
        background: "rgb(0, 149, 246)",
        color: "#fff",
        fontSize: 14,
        borderRadius: "10px",
      }}
      disableTouchRipple
      {...props}
    >
      {children}
    </ButtonBase>
  );
}
