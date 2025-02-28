import { Categories } from "@/components/ui/categories";
import { ColorModeToggle } from "@/components/ui/color-mode-toggle";
import { Container } from "@/components/ui/container";
import { DrawerMobile } from "@/components/ui/drawer-mobile";
import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";
import { ProductsSection } from "@/components/ui/products-section";
import { Box, ClientOnly, Skeleton } from "@chakra-ui/react";

export default function Home() {
  return (
    <Container>
      <Box pos="absolute" top="8" right="4">
        <ClientOnly fallback={<Skeleton w="10" h="10" rounded="md" />}>
          <ColorModeToggle />
        </ClientOnly>
      </Box>
      <Box pos="absolute" top="8" left="4">
        <ClientOnly fallback={<Skeleton w="10" h="10" rounded="md" />}>
          <DrawerMobile />
        </ClientOnly>
      </Box>
      <Header />
      <Categories />
      <ProductsSection />
      <Footer />
    </Container>
  );
}
