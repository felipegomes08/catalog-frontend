"use client";

import { categories } from "@/catalog/config/products";
import { Box } from "@chakra-ui/react";
import { ImageCircular } from "./image-circular";

interface CategoriesProps {
  filter: string;
  setFilter: (filter: string) => void;
}
export const Categories = ({ filter, setFilter }: CategoriesProps) => {
  return (
    <Box
      display={"flex"}
      flexDir={"column"}
      w={"100%"}
      overflow={"hidden"}
      gap={2}
      py={4}
    >
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
    </Box>
  );
};
