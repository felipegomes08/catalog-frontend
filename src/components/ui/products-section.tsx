import { products } from "@/catalog/config/products";
import { Flex } from "@chakra-ui/react";
import { useMemo } from "react";
import { CardProduct } from "./card-product";

interface ProductsSectionProps {
  filter: string;
}
export const ProductsSection = ({ filter }: ProductsSectionProps) => {
  const filterProducts = useMemo(() => {
    return filter
      ? products.filter((item) => item.categoria === filter)
      : products;
  }, [filter]);

  return (
    <Flex
      wrap={"wrap"}
      w={"100%"}
      h={"100%"}
      overflowY={"auto"}
      justify={"center"}
      gap={2}
    >
      {filterProducts.map((item) => (
        <CardProduct
          key={item.nome + item.descricao}
          name={item.nome}
          description={item.descricao}
          src={item.foto}
          price={item.preco}
          out={item.esgotado}
        />
      ))}
    </Flex>
  );
};
