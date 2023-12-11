import { Stack } from "@mui/material";
import { styled } from "@mui/system";

export const StyledServiceComponentContainer = styled(Stack)({
  cursor: "pointer",
  backgroundColor: "#101624",
  alignItems: "center",
  justifyContent: "center",
  padding: 16,
  border: "1px solid #232935",
  borderRadius: 20,
  div: {
    alignItems: "center",
    justifyContent: "center",
  },
  "&:hover": {
    color: "#178CF2",
    svg: {
      fill: "#178CF2",
    },
  },
});
