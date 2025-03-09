"use client";

import { Box, Flex, Icon, Link, Text } from "@chakra-ui/react";
import { FaInstagram } from "react-icons/fa";

export const Footer = () => {
  return (
    <Box as="footer" py={2} mt={2} bg="gray.800" color="white">
      <Flex align="center" justify="center" maxW="1200px" mx="auto" px={4}>
        <Text fontSize="sm">
          © {new Date().getFullYear()} Todos os direitos reservados.
        </Text>
        <Link href="https://www.instagram.com/shine_pratas.925">
          <Icon as={FaInstagram} color={"white"} boxSize={6} />
        </Link>
      </Flex>
    </Box>
  );
};
