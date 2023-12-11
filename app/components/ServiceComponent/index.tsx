import React, { ReactNode } from "react";
import { Stack } from "@mui/material";
import { StyledServiceComponentContainer } from "./style";

export default function ServiceComponent({
  desktop,
  icon,
  title,
}: {
  desktop: boolean;
  icon: ReactNode;
  title: string;
}) {
  return (
    <StyledServiceComponentContainer
      width={desktop ? "auto" : 170}
      height={desktop ? "auto" : 170}
      spacing={2}
      alignSelf="center"
    >
      <Stack
        sx={{
          "& svg": {
            width: desktop ? "60%" : 64,
            height: desktop ? "60%" : 64,
          },
        }}
      >
        {icon}
      </Stack>
      <Stack>{title}</Stack>
    </StyledServiceComponentContainer>
  );
}
