import { InputBase } from "@mui/material";

export default function Input(props) {
  return (
    <InputBase
      sx={{
        padding: "9px 0 7px 8px",
        background: "#fafafa",
        border: "1px solid rgb(219, 219, 219)",
        fontSize: 12,
        borderRadius: "3px",
        // width: "100%",
        display: "block",
      }}
      {...props}
    ></InputBase>
  );
}
