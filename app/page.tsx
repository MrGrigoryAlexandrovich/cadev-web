"use client";
import { Separator, Text } from "@radix-ui/themes";
import { Stack } from "@mui/material";
import WebOutlinedIcon from "@mui/icons-material/WebOutlined";
import SystemSecurityUpdateGoodOutlinedIcon from "@mui/icons-material/SystemSecurityUpdateGoodOutlined";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import StorageOutlinedIcon from "@mui/icons-material/StorageOutlined";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ServiceComponent from "./components/ServiceComponent";
import ContactContainer from "./components/ContactContainer";
import HomePageItem from "./components/HomePageItem";
import HomePageItemSeparator from "./components/HomePageItemSeparator";

export default function Home() {
  const theme = useTheme();
  const desktop = useMediaQuery(theme?.breakpoints.up("sm"));

  return (
    <Stack direction={desktop ? "row" : "column"} width="100%" spacing={0}>
      <Stack flex={6.5} spacing={8}>
        <Stack>
          <Text size="7" align={desktop ? "left" : "center"}>
            Services & Offer
          </Text>

          <Stack mt={3} mr={desktop ? 5 : 0} spacing={3}>
            <Stack direction={desktop ? "row" : "column"} spacing={3}>
              <ServiceComponent
                title="Web Development"
                icon={<WebOutlinedIcon />}
                desktop={desktop}
              />
              <ServiceComponent
                title="Mobile Development"
                icon={<SystemSecurityUpdateGoodOutlinedIcon />}
                desktop={desktop}
              />
              <ServiceComponent
                title="Desktop Development"
                icon={<DesktopWindowsOutlinedIcon />}
                desktop={desktop}
              />
            </Stack>
            <Stack direction={desktop ? "row" : "column"} spacing={3}>
              <ServiceComponent
                title="System administration"
                icon={<StorageOutlinedIcon />}
                desktop={desktop}
              />
              <ServiceComponent
                title="Maintenance"
                icon={<ConstructionOutlinedIcon />}
                desktop={desktop}
              />
              <ServiceComponent
                title="Consulting"
                icon={<ContactSupportOutlinedIcon />}
                desktop={desktop}
              />
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack my={desktop ? 0 : 3}>
        <Separator
          orientation={desktop ? "vertical" : "horizontal"}
          size="4"
          style={{
            position: desktop ? "fixed" : "relative",
            top: desktop ? 64 : 0,
            background: desktop ? "#178CF2" : "#fff",
            width: desktop ? "0.5px" : "100%",
          }}
        />
      </Stack>
      <Stack
        flex={3.5}
        mr={desktop ? -6 : 0}
        height={desktop ? "86.5vh" : "auto"}
      >
        <Stack px={5}>
          <Text size="7" align={desktop ? "left" : "center"}>
            Company
          </Text>
        </Stack>
        <HomePageItem
          desktop={desktop}
          marginTop={desktop ? 7 : 3}
          isImage
          title="Director"
          subtitle="Ahmed Cvrčak"
          description="engineer of computer science"
        />
        <HomePageItemSeparator desktop={desktop} />
        <HomePageItem
          desktop={desktop}
          marginTop={4}
          title="Headquarter"
          subtitle="Maglaj"
          description="+387/60-339-40-22"
        />
        <HomePageItemSeparator desktop={desktop} />
        <ContactContainer desktop={desktop} />
      </Stack>
    </Stack>
  );
}
