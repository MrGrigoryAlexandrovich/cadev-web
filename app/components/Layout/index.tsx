"use client";

import React, { Suspense, useState } from "react";
import { ThemeProvider } from "next-themes";
import { Theme, Text, Separator } from "@radix-ui/themes";
import { Stack } from "@mui/material";
import i18n from "i18next";
import { initReactI18next, useTranslation } from "react-i18next";
import { usePathname } from "next/navigation";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Menu from "../Navigation/Menu";
import {
  StyledLayoutContainer,
  StyledMobileNavigationHeader,
  StyledContentSeparator,
} from "./style";
import { ILayoutComponent } from "@/app/models/Layout";
import { translationEn } from "../../translation/english";
import { translationBs } from "../../translation/bosnish";

i18n.use(initReactI18next).init({
  resources: {
    en_US: { translation: translationEn },
    ba_BS: { translation: translationBs },
  },
  lng: "en_US",
  fallbackLng: "en_US",
  interpolation: { escapeValue: false },
});

export default function LayoutComponent({ page }: ILayoutComponent) {
  const pathname = usePathname();
  const theme = useTheme();
  const { t } = useTranslation();
  const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const desktop = useMediaQuery(theme.breakpoints.up("sm"));
  const deviceLoaded = desktop || mobile;
  const [drawerOpen, setDrawerOpen] = useState<boolean>(true);
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState<boolean>(false);
  const [isMobleDrawerClosing, setIsMobileDrawerClosing] =
    useState<boolean>(false);

  const generateTitle = () => {
    switch (pathname) {
      case "/":
        return t("navigation.home");
      case "/resume":
        return t("navigation.resume");
      case "/tools":
        return t("navigation.tools");
      case "/projects":
        return t("navigation.projects");
      case "/contact":
        return t("navigation.contact");
      // no default
    }
  };

  const handleCloseMobileDrawer = () => {
    setIsMobileDrawerClosing(true);
    setTimeout(() => {
      setDrawerOpen(false);
      setMobileDrawerOpen(false);
      setIsMobileDrawerClosing(false);
    }, 2000);
  };

  return (
    <Suspense fallback={"Loading..."}>
      <ThemeProvider attribute="class">
        <Theme accentColor="blue" radius="medium">
          {deviceLoaded && (
            <Stack>
              {mobile && (
                <StyledMobileNavigationHeader>
                  <Text>{generateTitle()}</Text>
                  <MenuOutlinedIcon
                    cursor="pointer"
                    sx={{
                      color: "#178CF2",
                    }}
                    onClick={() => {
                      setMobileDrawerOpen(true);
                      setDrawerOpen(true);
                    }}
                  />
                </StyledMobileNavigationHeader>
              )}
              <StyledLayoutContainer>
                <Stack
                  direction={desktop ? "row" : "column"}
                  mx={mobile ? 3 : 0}
                  width="100vw"
                >
                  <Stack
                    height="100%"
                    width={drawerOpen ? 214 : 77}
                    display={mobileDrawerOpen || desktop ? "block" : "none"}
                  >
                    <Menu
                      open={drawerOpen}
                      mobileDrawerOpen={mobileDrawerOpen}
                      desktop={desktop}
                      mobile={mobile}
                      isMobleDrawerClosing={isMobleDrawerClosing}
                      setOpen={setDrawerOpen}
                      setMobileDrawerOpen={setMobileDrawerOpen}
                      closeMobileDrawer={handleCloseMobileDrawer}
                    />
                  </Stack>
                  <Stack
                    margin={desktop ? "38px auto" : 0}
                    py={desktop ? 0 : 3}
                    maxWidth={1128}
                    width={"100%"}
                    height={"fit-content"}
                  >
                    <Stack
                      spacing={4}
                      sx={{
                        animation: "fade-in 3.5s ease-in-out",
                      }}
                    >
                      {desktop && <Text>{generateTitle()}</Text>}
                      <StyledContentSeparator />
                      {page}
                    </Stack>
                  </Stack>
                </Stack>
              </StyledLayoutContainer>
            </Stack>
          )}
        </Theme>
      </ThemeProvider>
    </Suspense>
  );
}
