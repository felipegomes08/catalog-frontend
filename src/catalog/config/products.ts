// Definindo o enum para as categorias
export enum Categoria {
  Aneis = "Anéis",
  Brincos = "Brincos",
  Colares = "Colares",
  Conjuntos = "Conjuntos",
  Pulseiras = "Pulseiras",
}

// Definindo a interface para os produtos
interface Produto {
  nome: string;
  descricao: string;
  foto: string;
  preco: number;
  esgotado: boolean;
  categoria: Categoria;
}

// Definindo a estrutura das categorias e produtos
export const categories = [
  {
    name: Categoria.Aneis,
    foto: "DESTAQUE-ANEL.png",
    produtos: [
      {
        nome: "Anel 1",
        descricao: "Peça em prata 925 com garantia vitalícia.",
        foto: "peca1.png",
        preco: 100,
        esgotado: true,
        categoria: Categoria.Aneis,
      },
      {
        nome: "Anel 2",
        descricao: "Peça em prata 925 com garantia vitalícia.",
        foto: "peca2.png",
        preco: 200,
        esgotado: false,
        categoria: Categoria.Aneis,
      },
    ],
  },
  {
    name: Categoria.Brincos,
    foto: "DESTAQUE-BRINCO.png",
    produtos: [
      {
        nome: "Brincos 1",
        descricao: "Peça em prata 925 com garantia vitalícia.",
        foto: "peca1.png",
        preco: 100,
        esgotado: false,
        categoria: Categoria.Brincos,
      },
      {
        nome: "Brincos 2",
        descricao: "Peça em prata 925 com garantia vitalícia.",
        foto: "peca2.png",
        preco: 200,
        esgotado: false,
        categoria: Categoria.Brincos,
      },
    ],
  },
  {
    name: Categoria.Colares,
    foto: "DESTAQUE-COLAR.png",
    produtos: [
      {
        nome: "Colares 1",
        descricao: "Peça em prata 925 com garantia vitalícia.",
        foto: "peca1.png",
        preco: 100,
        esgotado: false,
        categoria: Categoria.Colares,
      },
      {
        nome: "Colares 2",
        descricao: "Peça em prata 925 com garantia vitalícia.",
        foto: "peca2.png",
        preco: 200,
        esgotado: false,
        categoria: Categoria.Colares,
      },
    ],
  },
  {
    name: Categoria.Conjuntos,
    foto: "DESTAQUE-CONJUNTO.png",
    produtos: [
      {
        nome: "Conjunto 1",
        descricao: "Peça em prata 925 com garantia vitalícia.",
        foto: "peca1.png",
        preco: 100,
        esgotado: false,
        categoria: Categoria.Conjuntos,
      },
      {
        nome: "Conjunto 2",
        descricao: "Peça em prata 925 com garantia vitalícia.",
        foto: "peca2.png",
        preco: 200,
        esgotado: false,
        categoria: Categoria.Conjuntos,
      },
    ],
  },
  {
    name: Categoria.Pulseiras,
    foto: "DESTAQUE-PULSEIRA.png",
    produtos: [
      {
        nome: "Pulseira 1",
        descricao: "Peça em prata 925 com garantia vitalícia.",
        foto: "peca1.png",
        preco: 100,
        esgotado: false,
        categoria: Categoria.Pulseiras,
      },
      {
        nome: "Pulseira 2",
        descricao: "Peça em prata 925 com garantia vitalícia.",
        foto: "peca2.png",
        preco: 200,
        esgotado: false,
        categoria: Categoria.Pulseiras,
      },
    ],
  },
];

// Mapeando os produtos para incluir a categoria
export const products: Produto[] = categories.flatMap((category) =>
  category.produtos.map((product) => ({
    ...product,
    categoria: category.name,
  }))
);
