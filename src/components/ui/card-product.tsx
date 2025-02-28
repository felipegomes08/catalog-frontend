"use client";

import {
  Box,
  Button,
  Card,
  DialogBackdrop,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
  FormatNumber,
  Image,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

interface CardProductProps {
  name: string;
  description: string;
  price: number;
  src: string;
  out: boolean;
}

export const CardProduct = ({
  name,
  description,
  price,
  src,
  out,
}: CardProductProps) => {
  const [open, setOpen] = useState(false);
  const whatsappLink = `https://wa.me/${process.env.NEXT_PUBLIC_PHONE}?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20a%20joia%20${name}%21%21`;

  return (
    <>
      <DialogRoot
        lazyMount
        open={open}
        onOpenChange={(e) => setOpen(e.open)}
        placement={"center"}
      >
        <Card.Root maxW="220px" overflow="hidden" position={"relative"}>
          {out && (
            <Text
              position="absolute"
              top="0"
              left="0"
              bg="red.500"
              color="white"
              p="1"
              zIndex="1"
            >
              Esgotado
            </Text>
          )}
          <Image
            src={`/products/${src}`}
            alt={name}
            height="200px"
            width="220px"
            objectFit="cover"
          />
          <Card.Body>
            <Card.Title fontSize={"sm"}>{name}</Card.Title>
            <Card.Description fontSize={"xs"}>{description}</Card.Description>
            <Text
              textStyle="xl"
              fontWeight="medium"
              letterSpacing="tight"
              mt="2"
            >
              <FormatNumber value={price} style="currency" currency="BRL" />
            </Text>
          </Card.Body>
          <Card.Footer>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button variant="solid" size={"xs"} disabled={out}>
                Comprar
              </Button>
            </a>
            <DialogTrigger asChild>
              <Button variant="ghost" size={"xs"}>
                Ver detalhes
              </Button>
            </DialogTrigger>
          </Card.Footer>
        </Card.Root>

        <DialogBackdrop />
        <DialogContent style={{ position: "fixed" }}>
          <DialogHeader>
            <DialogTitle>{name}</DialogTitle>
          </DialogHeader>
          <DialogBody>
            <Box position="relative">
              <Image
                src={`/products/${src}`}
                alt={name}
                height="400px"
                width="100%"
                objectFit="cover"
              />
              {out && (
                <Text
                  position="absolute"
                  top="0"
                  left="0"
                  bg="red.500"
                  color="white"
                  p="1"
                  zIndex="1"
                >
                  Esgotado
                </Text>
              )}
            </Box>
            <Text fontSize={"xs"}>{description}</Text>
            <Text
              textStyle="xl"
              fontWeight="medium"
              letterSpacing="tight"
              mt="2"
            >
              <FormatNumber value={price} style="currency" currency="BRL" />
            </Text>
          </DialogBody>
          <DialogFooter>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button disabled={out}>Comprar</Button>
            </a>
          </DialogFooter>
          <DialogCloseTrigger />
        </DialogContent>
      </DialogRoot>
    </>
  );
};
