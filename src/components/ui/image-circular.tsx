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
      maxW={"50px"}
    >
      <Image
        src={src}
        boxSize={active ? "45px" : "40px"}
        borderRadius="full"
        fit="cover"
        transition="transform 0.2s"
        _hover={{ transform: "scale(1.1)" }}
      />
      <Text
        fontSize={"10px"}
        textAlign={"center"}
        textWrap={"wrap"}
        color={color}
      >
        {name}
      </Text>
    </Flex>
  );
};
