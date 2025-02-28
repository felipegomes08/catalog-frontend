import { Flex, Image, Text } from "@chakra-ui/react";
import { useColorModeValue } from "./color-mode";

interface ImageCircularProps {
  src: string;
  name: string;
}

export const ImageCircular = ({ src, name }: ImageCircularProps) => {
  const color = useColorModeValue("white", "black");
  return (
    <Flex align={"center"} justify={"center"} flexDir={"column"}>
      <Image
        src={src}
        boxSize="50px"
        borderRadius="full"
        fit="cover"
        transition="transform 0.2s"
        _hover={{ transform: "scale(1.1)" }}
      />
      <Text fontSize={"xs"} color={color}>
        {name}
      </Text>
    </Flex>
  );
};
