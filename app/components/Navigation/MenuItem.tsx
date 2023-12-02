"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Text } from "@radix-ui/themes";
import { Tooltip } from "react-tooltip";
import { IMenuItemComponent } from "../../models/Menu";
import { StyledMenuItemOpened, StyledMenuItemClosed } from "./style";

export default function MenuItem({
  open,
  icon,
  text,
  routes,
  mobile,
  setMobileDrawerOpen,
}: IMenuItemComponent) {
  const router = useRouter();
  const pathname = usePathname();
  const [tooltipText, setTooltipText] = useState<string>("");

  const changePage = () => {
    router.push(routes);
    if (mobile) {
      setMobileDrawerOpen(false);
    }
  };

  return open ? (
    <StyledMenuItemOpened
      sx={{
        backgroundColor:
          pathname === routes ? "#374151 !important" : "transparent",
      }}
      onClick={changePage}
    >
      {icon}
      <Text>{text}</Text>
    </StyledMenuItemOpened>
  ) : (
    <StyledMenuItemClosed
      data-tooltip-id="menu-item-tooltip"
      sx={{
        backgroundColor:
          pathname === routes ? "#374151 !important" : "transparent",
        minWidth: 40,
      }}
      onMouseOver={() => setTooltipText(text)}
      onMouseLeave={() => setTooltipText("")}
      onClick={() => router.push(routes)}
    >
      {icon}
      <Tooltip
        id="menu-item-tooltip"
        place="right"
        variant="info"
        content={tooltipText}
      />
    </StyledMenuItemClosed>
  );
}
