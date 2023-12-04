"use client";
import { Text } from "@radix-ui/themes";
import { Stack } from "@mui/material";
import WebOutlinedIcon from "@mui/icons-material/WebOutlined";
import SystemSecurityUpdateGoodOutlinedIcon from "@mui/icons-material/SystemSecurityUpdateGoodOutlined";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ServiceComponent from "./components/ServiceComponent";

export default function Home() {
  const theme = useTheme();
  const desktop = useMediaQuery(theme?.breakpoints.up("sm"));

  return (
    <Stack direction={desktop ? "row" : "column"} width="100%" spacing={3}>
      <Stack flex={6.5} spacing={8}>
        <Stack>
          <Text size="7">Services & Offer</Text>
          <Stack mt={desktop ? 0 : 3} spacing={3}>
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
                title="Consulting"
                icon={<ContactSupportOutlinedIcon />}
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
        <Text size={desktop ? "4" : "2"}>
          See more information about our services on the services page.
        </Text>
      </Stack>
      <Stack flex={3.5}>
        <Text>d</Text>
      </Stack>
    </Stack>
  );
}
