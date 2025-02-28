import { products } from "@/catalog/config/products";
import { Flex } from "@chakra-ui/react";
import { CardProduct } from "./card-product";

export const ProductsSection = () => {
  return (
    <Flex wrap={"wrap"} w={"100%"} justify={"center"} gap={2}>
      {products.map((item) => (
        <CardProduct
          key={item.nome}
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
