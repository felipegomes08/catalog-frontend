"use client";

import { IconButton } from "@chakra-ui/react";
import { useTheme } from "next-themes";
import { LuMoon, LuSun } from "react-icons/lu";

export function ColorModeToggle() {
  const { theme, setTheme } = useTheme();
  const toggleColorMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <IconButton
      bgColor={"#ec6093"}
      aria-label="toggle color mode"
      onClick={toggleColorMode}
    >
      {theme === "light" ? <LuMoon color="white" /> : <LuSun color="white" />}
    </IconButton>
  );
}
