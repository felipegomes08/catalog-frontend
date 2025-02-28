export const categories = [
  {
    name: "Anéis",
    foto: "DESTAQUE-ANEL.png",
    produtos: [
      {
        nome: "Anel 1",
        descricao: "Peça em prata 925 com garantia vitalícia.",
        foto: "peca1.png",
        preco: 100,
        esgotado: true,
      },
      {
        nome: "Anel 2",
        descricao: "Peça em prata 925 com garantia vitalícia.",
        foto: "peca2.png",
        preco: 200,
        esgotado: false,
      },
    ],
  },
  {
    name: "Brincos",
    foto: "DESTAQUE-BRINCO.png",
    produtos: [
      {
        nome: "brincos 1",
        descricao: "Peça em prata 925 com garantia vitalícia.",
        foto: "peca1.png",
        preco: 100,
        esgotado: false,
      },
      {
        nome: "brincos 2",
        descricao: "Peça em prata 925 com garantia vitalícia.",
        foto: "peca2.png",
        preco: 200,
        esgotado: false,
      },
    ],
  },
  {
    name: "Colares",
    foto: "DESTAQUE-COLAR.png",
    produtos: [
      {
        nome: "colares 1",
        descricao: "Peça em prata 925 com garantia vitalícia.",
        foto: "peca1.png",
        preco: 100,
        esgotado: false,
      },
      {
        nome: "colares 2",
        descricao: "Peça em prata 925 com garantia vitalícia.",
        foto: "peca2.png",
        preco: 200,
        esgotado: false,
      },
    ],
  },
  {
    name: "Conjuntos",
    foto: "DESTAQUE-CONJUNTO.png",
    produtos: [
      {
        nome: "conjunto 1",
        descricao: "Peça em prata 925 com garantia vitalícia.",
        foto: "peca1.png",
        preco: 100,
        esgotado: false,
      },
      {
        nome: "conjunto 2",
        descricao: "Peça em prata 925 com garantia vitalícia.",
        foto: "peca2.png",
        preco: 200,
        esgotado: false,
      },
    ],
  },
  {
    name: "Pulseiras",
    foto: "DESTAQUE-PULSEIRA.png",
    produtos: [
      {
        nome: "pulseira 1",
        descricao: "Peça em prata 925 com garantia vitalícia.",
        foto: "peca1.png",
        preco: 100,
        esgotado: false,
      },
      {
        nome: "pulseira 2",
        descricao: "Peça em prata 925 com garantia vitalícia.",
        foto: "peca2.png",
        preco: 200,
        esgotado: false,
      },
    ],
  },
];

export const products = categories.flatMap((category) =>
  category.produtos.map((product) => ({
    ...product,
    categoria: category.name,
  }))
);
