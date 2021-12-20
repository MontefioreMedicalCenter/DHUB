const { styled, Button } = require("@material-ui/core");

const CustomColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#cec0c0"),
    backgroundColor: "#e0693f",
    '&:hover': {
      backgroundColor: "#C13504",
    },
  }));

export default CustomColorButton