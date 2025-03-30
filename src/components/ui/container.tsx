"use client";

import { Flex } from "@chakra-ui/react";

export interface ContainerProps {
  children: React.ReactNode;
}
export const Container = ({ children }: ContainerProps) => {
  return (
    <Flex h={"100vh"} w={"100%"} justify={"center"} align={"center"}>
      <Flex
        flexDir={"column"}
        h={"100%"}
        w={"100%"}
        maxW={"500px"}
        position={"relative"}
      >
        {children}
      </Flex>
    </Flex>
  );
};
