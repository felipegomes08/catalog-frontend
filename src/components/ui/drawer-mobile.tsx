"use client";

import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerRoot,
  DrawerTitle,
  DrawerTrigger,
  Flex,
  Icon,
  IconButton,
  Link,
  Text,
} from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { Categories } from "./categories";

interface DrawerMobileProps {
  setFilter: (filter: string) => void;
  filter: string;
}

export function DrawerMobile({ setFilter, filter }: DrawerMobileProps) {
  return (
    <DrawerRoot placement="start" size={"sm"}>
      <DrawerBackdrop />
      <DrawerTrigger asChild>
        <IconButton bgColor={"#ec6093"} aria-label="open drawer">
          {<GiHamburgerMenu color="white" />}
        </IconButton>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>Categorias</DrawerTitle>
        </DrawerHeader>
        <DrawerBody>
          <Categories setFilter={setFilter} filter={filter} />
        </DrawerBody>
        <DrawerFooter>
          <Flex align="center" justify="center" maxW="1200px" mx="auto" px={4}>
            <Text fontSize="sm">Siga a Shine Pratas | </Text>
            <Link href="https://www.instagram.com/shine_pratas.925">
              <Icon as={FaInstagram} boxSize={6} />
            </Link>
          </Flex>
        </DrawerFooter>
        <DrawerCloseTrigger />
      </DrawerContent>
    </DrawerRoot>
  );
}
