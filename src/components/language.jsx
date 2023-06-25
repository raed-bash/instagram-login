import { Box, IconButton, Typography } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
export default function Language(props) {
  return (
    <Box width="max-content" {...props}>
      <Box>
        <Typography
          component="span"
          fontSize={12}
          color="rgb(115,115,115)"
          textTransform=" initial"
        >
          English
        </Typography>
        <IconButton sx={{ width: 30 }}>
          <KeyboardArrowDownIcon
            sx={{ color: "rgb(115, 115, 115)", fontSize: 20 }}
          />
        </IconButton>
      </Box>
    </Box>
  );
}
