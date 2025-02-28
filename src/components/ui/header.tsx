"use client";

import banner from "@/catalog/images/company/banner.png";
import { Box, Image } from "@chakra-ui/react";
import { StaticImageData } from "next/image";

export const Header = () => {
  return (
    <Box>
      <Image
        height="100px"
        w={"100%"}
        src={(banner as StaticImageData).src}
        alt="Company Banner"
      />
    </Box>
  );
};
