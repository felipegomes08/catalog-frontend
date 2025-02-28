"use client";

import { categories } from "@/catalog/config/products";
import { Flex } from "@chakra-ui/react";
import { ImageCircular } from "./image-circular";

export const Categories = () => {
  return (
    <Flex w={"100%"} gap={2} justify={"center"} wrap={"wrap"} pt={4}>
      {categories.map((category) => (
        <ImageCircular
          key={category.name}
          name={category.name}
          src={`/categories/${category.foto}`}
        />
      ))}
    </Flex>
  );
};
