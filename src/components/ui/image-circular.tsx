import { Flex, Image, Text } from "@chakra-ui/react";
import { useColorModeValue } from "./color-mode";

interface ImageCircularProps {
  src: string;
  name: string;
  onClick: () => void;
  active: boolean;
}

export const ImageCircular = ({
  src,
  name,
  onClick,
  active,
}: ImageCircularProps) => {
  const color = useColorModeValue("black", "white");
  return (
    <Flex
      align={"center"}
      justify={"center"}
      flexDir={"column"}
      onClick={onClick}
    >
      <Image
        src={src}
        boxSize={active ? "60px" : "50px"}
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
