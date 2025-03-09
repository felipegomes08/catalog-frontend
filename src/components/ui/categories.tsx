"use client";

import { categories } from "@/catalog/config/products";
import { Box } from "@chakra-ui/react";
import Slider from "react-slick";
import { ImageCircular } from "./image-circular";

interface CategoriesProps {
  filter: string;
  setFilter: (filter: string) => void;
}
export const Categories = ({ filter, setFilter }: CategoriesProps) => {
  const settings = {
    infinite: false,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <Box w={"100%"} className="slider-container" py={4} overflow={"hidden"}>
      <Slider {...settings}>
        {categories.map((category) => (
          <ImageCircular
            onClick={() =>
              category.name === filter
                ? setFilter("")
                : setFilter(category.name)
            }
            key={category.name}
            name={category.name}
            active={category.name === filter}
            src={`/categories/${category.foto}`}
          />
        ))}
      </Slider>
    </Box>
  );
};
