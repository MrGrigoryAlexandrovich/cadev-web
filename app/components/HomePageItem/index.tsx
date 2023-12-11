import React from "react";
import Image from "next/image";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import { Stack } from "@mui/material";
import { Text } from "@radix-ui/themes";
import directorImage from "../../assets/director.jpg";

const HomePageItem = ({
  desktop,
  marginTop,
  isImage = false,
  title = "",
  subtitle = "",
  description = "",
}: {
  readonly desktop: boolean;
  readonly marginTop: number;
  readonly isImage?: boolean;
  readonly title: string;
  readonly subtitle: string;
  readonly description: string;
}) => {
  return (
    <Stack
      px={5}
      mt={marginTop}
      direction={desktop ? "row" : "column"}
      alignItems={desktop ? "flex-start" : "center"}
      spacing={3}
      sx={{
        cursor: "pointer",
        "&:hover": {
          color: "#178CF2",
          svg: {
            fill: "#178CF2",
          },
        },
      }}
    >
      {isImage ? (
        <Image
          src={directorImage}
          height={90}
          style={{
            borderRadius: 18,
            filter: "grayscale(60%)",
            border: "1px solid #fff",
          }}
          alt="director"
          priority
        />
      ) : (
        <RoomOutlinedIcon
          sx={{
            position: "relative",
            bottom: 4,
            width: 100,
            height: 100,
          }}
        />
      )}
      <Stack spacing={1.25}>
        <Text size="3" align={desktop ? "left" : "center"}>
          {title}
        </Text>
        <Text size="3" align={desktop ? "left" : "center"}>
          {subtitle}
        </Text>
        <Text size="2" align={desktop ? "left" : "center"}>
          {description}
        </Text>
      </Stack>
    </Stack>
  );
};

export default HomePageItem;
