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
      onClick={onClick}
      w={"100%"}
      ml={2}
      cursor={"pointer"}
      color={active ? "pink" : color}
      fontWeight={active ? "bold" : "normal"}
      _hover={{ bg: "pink.100", color: "gray.900", fontWeight: "bold" }}
      borderRadius={"5px"}
      p={1}
    >
      <Image
        src={src}
        mr={2}
        boxSize={active ? "45px" : "40px"}
        borderRadius="full"
        fit="cover"
        transition="transform 0.2s"
        _hover={{ transform: "scale(1.1)" }}
      />
      <Text
        fontSize={"16px"}
        textAlign={"center"}
        textWrap={"wrap"}
      >
        {name}
      </Text>
    </Flex>
  );
};
