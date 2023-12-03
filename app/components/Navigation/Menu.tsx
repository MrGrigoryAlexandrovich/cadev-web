import React from "react";
import Image from "next/image";
import { Stack } from "@mui/material";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AssignmentIndOutlinedIcon from "@mui/icons-material/AssignmentIndOutlined";
import ChevronLeftOutlinedIcon from "@mui/icons-material/ChevronLeftOutlined";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import ConstructionOutlinedIcon from "@mui/icons-material/ConstructionOutlined";
import HubOutlinedIcon from "@mui/icons-material/HubOutlined";
import ContactPhoneOutlinedIcon from "@mui/icons-material/ContactPhoneOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import { useTranslation } from "react-i18next";
import MenuItem from "./MenuItem";
import logo from "../../assets/logo.png";
import shortLogo from "../../assets/short-logo.png";
import { IMenuComponent } from "@/app/models/Menu";
import { StyledDesktopNavigationMenuContainer } from "./style";

export default function Menu({
  open,
  mobileDrawerOpen,
  desktop,
  mobile,
  isMobleDrawerClosing,
  setOpen,
  setMobileDrawerOpen,
  closeMobileDrawer,
}: IMenuComponent) {
  const { t } = useTranslation();

  const animationCheck = () => {
    if (desktop) {
      return "slide-left 2s ease-in-out";
    } else if (isMobleDrawerClosing) {
      return "slide-to-right 2s ease-in-out";
    }
    return "slide-full-left 2s ease-in-out";
  };

  return (
    <StyledDesktopNavigationMenuContainer
      anchor={"left"}
      variant="permanent"
      sx={{
        "& .MuiPaper-root": {
          width: mobileDrawerOpen ? "100%" : "auto",
          animation: animationCheck(),
          background: "transparent !important",
          overflow: "visible",
          color: "inherit",
          borderRight: "1.5px solid gray",
        },
      }}
    >
      {desktop && (
        <Stack
          position="absolute"
          left={open ? "92%" : "77%"}
          top={90}
          width={32}
          height={32}
          borderRadius="50%"
          justifyContent="center"
          alignItems="center"
          sx={{
            backgroundColor: "#1F2937",
          }}
          onClick={() => setOpen(!open)}
        >
          {open ? <ChevronLeftOutlinedIcon /> : <ChevronRightOutlinedIcon />}
        </Stack>
      )}
      <Stack px={open ? 4 : 1} py={4}>
        {open ? (
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Image src={logo} alt="logo" width={150} priority />
            {mobileDrawerOpen && (
              <CloseOutlinedIcon cursor="pointer" onClick={closeMobileDrawer} />
            )}
          </Stack>
        ) : (
          <Image src={shortLogo} alt="short-logo" height={45} priority />
        )}
      </Stack>
      <Stack mt={6}>
        <MenuItem
          open={open}
          icon={<HomeOutlinedIcon />}
          text={t("navigation.home")}
          routes="/"
          mobile={mobile}
          setMobileDrawerOpen={setMobileDrawerOpen}
        />
        <MenuItem
          open={open}
          icon={<AssignmentIndOutlinedIcon />}
          text={t("navigation.resume")}
          routes="/resume"
          mobile={mobile}
          setMobileDrawerOpen={setMobileDrawerOpen}
        />
        <MenuItem
          open={open}
          icon={<ConstructionOutlinedIcon />}
          text={t("navigation.tools")}
          routes="/tools"
          mobile={mobile}
          setMobileDrawerOpen={setMobileDrawerOpen}
        />
        <MenuItem
          open={open}
          icon={<HubOutlinedIcon />}
          text={t("navigation.projects")}
          routes="/projects"
          mobile={mobile}
          setMobileDrawerOpen={setMobileDrawerOpen}
        />
        <MenuItem
          open={open}
          icon={<ContactPhoneOutlinedIcon />}
          text={t("navigation.contact")}
          routes="/contact"
          mobile={mobile}
          setMobileDrawerOpen={setMobileDrawerOpen}
        />
      </Stack>
    </StyledDesktopNavigationMenuContainer>
  );
}
