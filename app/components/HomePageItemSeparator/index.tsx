import React from "react";
import { Stack } from "@mui/material";
import { Separator } from "@radix-ui/themes";

const HomePageItemSeparator = ({ desktop }: { readonly desktop: boolean }) => {
  return (
    <Stack mt={3}>
      <Separator
        size="4"
        style={{
          background: desktop ? "#178CF2" : "#fff",
        }}
      />
    </Stack>
  );
};

export default HomePageItemSeparator;
