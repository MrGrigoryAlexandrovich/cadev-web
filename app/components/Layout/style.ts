import { Stack } from "@mui/material";
import { styled } from "@mui/system";

export const StyledLayoutContainer = styled(Stack)({
  display: "flex",
  flexDirection: "row",
  padding: 0,
  gap: 64,
  minHeight: "100vh",
  maxHeight: "100%",
  "&::-webkit-scrollbar ": {
    width: "4px",
  },
  "&::-webkit-scrollbar-thumb": {
    background: "#E5E7EB",
    borderRadius: "4px",
  },
});

export const StyledMobileNavigationHeader = styled(Stack)({
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "16px 32px",
  backgroundColor: "#131E30",
  animation: "fade-in 1s ease-in-out",
});
