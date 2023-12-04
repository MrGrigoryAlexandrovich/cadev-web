"use client";

import React, { Suspense, useState } from "react";
import { Theme, Text } from "@radix-ui/themes";
import { Stack } from "@mui/material";
import { usePathname } from "next/navigation";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import Menu from "../Navigation/Menu";
import { StyledLayoutContainer, StyledMobileNavigationHeader } from "./style";
import { ILayoutComponent } from "@/app/models/Layout";

export default function LayoutComponent({ page }: ILayoutComponent) {
  const pathname = usePathname();
  const theme = useTheme();
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
        return "Home";
      case "/resume":
        return "Resume";
      case "/services":
        return "Servies";
      case "/projects":
        return "Projects";
      case "/contact":
        return "Contact";
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
      <Theme appearance="dark" accentColor="blue" radius="medium">
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
                  width={drawerOpen ? 248 : 80}
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
                <Stack py={desktop ? 0 : 3} width="100%" height={"fit-content"}>
                  <Stack
                    spacing={4}
                    sx={{
                      animation: "fade-in 3.5s ease-in-out",
                    }}
                  >
                    {desktop && (
                      <Stack
                        width="100%"
                        height={64}
                        justifyContent="center"
                        borderBottom="0.25px solid #178CF2"
                      >
                        <Stack px={6} fontSize={24}>
                          <Text>{generateTitle()}</Text>
                        </Stack>
                      </Stack>
                    )}

                    <Stack px={desktop ? 6 : 0}>{page}</Stack>
                  </Stack>
                </Stack>
              </Stack>
            </StyledLayoutContainer>
          </Stack>
        )}
      </Theme>
    </Suspense>
  );
}
