"use client";

import { categories } from "@/catalog/config/products";
import { Flex } from "@chakra-ui/react";
import { ImageCircular } from "./image-circular";

interface CategoriesProps {
  filter: string;
  setFilter: (filter: string) => void;
}
export const Categories = ({ filter, setFilter }: CategoriesProps) => {
  return (
    <Flex w={"100%"} gap={4} justify={"center"} wrap={"wrap"} py={4}>
      {categories.map((category) => (
        <ImageCircular
          onClick={() =>
            category.name === filter ? setFilter("") : setFilter(category.name)
          }
          key={category.name}
          name={category.name}
          active={category.name === filter}
          src={`/categories/${category.foto}`}
        />
      ))}
    </Flex>
  );
};
