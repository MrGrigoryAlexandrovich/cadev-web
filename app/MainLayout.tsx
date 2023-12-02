"use client";
import React, { ReactNode, Suspense } from "react";
import { Theme } from "@radix-ui/themes";
import { ThemeProvider } from "next-themes";

// import i18n from "i18next";
// import { initReactI18next, useTranslation } from "react-i18next";
// import { usePathname } from "next/navigation";
// import useMediaQuery from "@mui/material/useMediaQuery";
// import { useTheme } from "@mui/material/styles";
// import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
// import Menu from "../Navigation/Menu";
// import { StyledLayoutContainer, StyledMobileNavigationHeader } from "./style";
// import { ILayoutComponent } from "@/app/models/Layout";
//import { translationEn } from "../../translation/english";
// import { translationBs } from "../../translation/bosnish";

/* i18n.use(initReactI18next).init({
  resources: {
    en_US: { translation: translationEn },
    ba_BS: { translation: translationBs },
  },
  lng: "en_US",
  fallbackLng: "en_US",
  interpolation: { escapeValue: false },
}); */

export default function LayoutComponent({
  page,
}: {
  readonly page: ReactNode;
}) {
  /*   const pathname = usePathname();
  const theme = useTheme(); */
  // const { t } = useTranslation();
  /*   const mobile = useMediaQuery(theme.breakpoints.down("sm"));
  const desktop = useMediaQuery(theme.breakpoints.up("sm")); */
  // const deviceLoaded = desktop || mobile;

  return (
    <Suspense fallback={"Loading..."}>
      <ThemeProvider attribute="class">
        <Theme>{page}</Theme>
      </ThemeProvider>
    </Suspense>
  );
}
