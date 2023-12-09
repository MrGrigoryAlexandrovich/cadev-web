"use client";
import { Separator, Text } from "@radix-ui/themes";
import { Stack } from "@mui/material";
import Image from "next/image";
import WebOutlinedIcon from "@mui/icons-material/WebOutlined";
import SystemSecurityUpdateGoodOutlinedIcon from "@mui/icons-material/SystemSecurityUpdateGoodOutlined";
import DesktopWindowsOutlinedIcon from "@mui/icons-material/DesktopWindowsOutlined";
import ContactSupportOutlinedIcon from "@mui/icons-material/ContactSupportOutlined";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import ServiceComponent from "./components/ServiceComponent";
import talentwunderLogo from "./assets/talentwunderLogo.png";
import karrieraLogo from "./assets/karriera.png";
import osterusLogo from "./assets/osterus.svg";
import kmStilLogo from "./assets/kmStil.png";
import { openInNewTab } from "./utils";

export default function Home() {
  const theme = useTheme();
  const desktop = useMediaQuery(theme?.breakpoints.up("sm"));

  return (
    <Stack direction={desktop ? "row" : "column"} width="100%" spacing={3}>
      <Stack flex={6.5} spacing={8}>
        <Stack>
          <Text size="7" align={desktop ? "left" : "center"}>
            Services & Offer
          </Text>
          <Stack spacing={14.5}>
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
            {desktop && (
              <Text>
                See more information about our services on the services page.
              </Text>
            )}
          </Stack>
        </Stack>
      </Stack>
      <Stack>
        <Separator
          orientation={desktop ? "vertical" : "horizontal"}
          size="4"
          style={{
            position: desktop ? "fixed" : "relative",
            top: desktop ? 64 : 0,
            background: desktop ? "#178CF2" : "#fff",
          }}
        />
      </Stack>
      <Stack flex={3.5}>
        <Text size="7" align={desktop ? "left" : "center"}>
          Partners
        </Text>
        <Stack
          mt={3}
          width="100%"
          justifyContent="space-between"
          alignSelf={desktop ? "flex-start" : "center"}
          alignItems={desktop ? "flex-start" : "center"}
        >
          <Stack
            p={2}
            alignItems={desktop ? "flex-start" : "center"}
            spacing={2}
            sx={{ cursor: "pointer" }}
            onClick={() => openInNewTab("https://talentwunder.com/")}
          >
            <Stack position="relative" right={desktop ? 16 : -6}>
              <Image
                src={talentwunderLogo}
                height={50}
                alt="talentwunder-logo"
                priority
              />
            </Stack>
            <Text size={desktop ? "5" : "3"}>Recruit smart people</Text>
          </Stack>

          <Stack
            p={2}
            alignItems={desktop ? "flex-start" : "center"}
            spacing={2}
            sx={{ cursor: "pointer" }}
            onClick={() => openInNewTab("https://www.karriera.de/")}
          >
            <Image src={karrieraLogo} alt="karriera-logo" priority />
            <Text size={desktop ? "5" : "3"}>Because we care who you hire</Text>
          </Stack>

          <Stack
            p={2}
            alignItems={desktop ? "flex-start" : "center"}
            spacing={2}
            sx={{ cursor: "pointer" }}
            onClick={() => openInNewTab("https://www.osterus.com/")}
          >
            <Image height={30} src={osterusLogo} alt="osterus-logo" priority />
            <Text size={desktop ? "5" : "3"}>Let the data speak</Text>
          </Stack>

          <Stack
            p={2}
            alignItems={desktop ? "flex-start" : "center"}
            spacing={2}
            sx={{ cursor: "pointer" }}
            onClick={() =>
              openInNewTab(
                "https://www.companywall.si/HomeNew/ReCaptchaInfo?urlBack=%2Fpodjetje%2Fkm-stil-dzenaid-kusur-s-p%2FMM3fAJ80%2Fosnovno"
              )
            }
          >
            <Image height={100} src={kmStilLogo} alt="osterus-logo" priority />
            <Text size={desktop ? "5" : "3"}>
              Safe quality is our responsibility
            </Text>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
