import React, { ReactNode } from "react";
import { Stack } from "@mui/material";

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
    <Stack spacing={1}>
      <Stack
        alignItems="center"
        justifyContent="flex-end"
        sx={{
          "& svg": {
            width: desktop ? "60%" : 64,
            height: desktop ? "60%" : 64,
          },
        }}
      >
        {icon}
      </Stack>
      <Stack width="100%" alignItems="center">
        {title}
      </Stack>
    </Stack>
  );
}
