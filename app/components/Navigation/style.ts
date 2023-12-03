import { Stack, Drawer } from "@mui/material";
import { Flex } from "@radix-ui/themes";
import { styled } from "@mui/system";

export const StyledDesktopNavigationMenuContainer = styled(Drawer)({
  position: "relative",
  height: "100%",
  "& svg": {
    width: 24,
    height: 24,
    color: "#fff",
  },
});

export const StyledMenuItemOpened = styled(Flex)({
  flexDirection: "row",
  alignItems: "center",
  cursor: "pointer",
  height: 48,
  paddingLeft: 16,
  gap: 16,
  fontSize: 14,
  "&:hover": {
    background: "#1F2937",
  },
  "& svg": {
    width: 24,
    height: 24,
    color: "#178CF2 !important",
  },
});

export const StyledMenuItemClosed = styled(Stack)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  color: "#fff",
  height: 48,
  gap: 12,
  fontSize: 14,
  "&:hover": {
    background: "#1F2937",
  },
  "& svg": {
    width: 24,
    height: 24,
    color: "#178CF2 !important",
  },
});
