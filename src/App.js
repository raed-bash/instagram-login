import { Box } from "@mui/material";
import Language from "./components/language";
import Logo from "./components/logo";
import Form from "./components/form";

function App() {
  return (
    <Box>
      <Language
        sx={{ fontFamily: "Helvetica, Arial, sans-serif", margin: "0 auto" }}
      />
      <Box sx={{ width: "max-content", margin: "0 auto" }}>
        <Logo />
        <Form />
      </Box>
    </Box>
  );
}

export default App;
