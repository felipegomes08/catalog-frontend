// Definindo o enum para as categorias
export enum Categoria {
  Aneis = "Anéis",
  Brincos = "Brincos",
  Colares = "Colares",
  Conjuntos = "Conjuntos",
  Pulseiras = "Pulseiras",
  PulseirasMasc = "Pulseiras Masculinas",
  ColarMasc = "Colares Masculinos",
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
        nome: "Anel Coração Verde",
        descricao: "TAM 16",
        esgotado: false,
        preco: 55,
        categoria: Categoria.Aneis,
        foto: "anel-coracao-verde.jpeg",
      },
      {
        nome: "Anel Corações Cravejados",
        descricao: "TAM 23",
        esgotado: false,
        preco: 60,
        categoria: Categoria.Aneis,
        foto: "anel-coracoes-pedrinhas.jpeg",
      },
      {
        nome: "Anel Meia Aliança",
        descricao: "TAM 20",
        esgotado: false,
        preco: 60,
        categoria: Categoria.Aneis,
        foto: "anel-cravejado.jpeg",
      },
      {
        nome: "Anel Amor Infinito",
        descricao: "Regulável",
        esgotado: false,
        preco: 50,
        categoria: Categoria.Aneis,
        foto: "anel-infinito-coracao.jpeg",
      },
      {
        nome: "Anel Zircônia Quadrangular",
        descricao: "TAM 18",
        esgotado: false,
        preco: 60,
        categoria: Categoria.Aneis,
        foto: "anel-pedra-quadrada.jpeg",
      },
      {
        nome: "Anel Triângulos",
        descricao: "Regulável",
        esgotado: false,
        preco: 50,
        categoria: Categoria.Aneis,
        foto: "anel-reg-triangulos.jpeg",
      },
      {
        nome: "Anel Trançado",
        descricao: "TAM 20, 17",
        esgotado: false,
        preco: 55,
        categoria: Categoria.Aneis,
        foto: "anel-trancado.jpeg",
      },
    ],
  },
  {
    name: Categoria.Brincos,
    foto: "DESTAQUE-BRINCO.png",
    produtos: [
      {
        nome: "Brinco cuff 4 Corações",
        descricao: "",
        esgotado: false,
        preco: 55,
        categoria: Categoria.Brincos,
        foto: "brinco-4-coracoes.jpeg",
      },
      {
        nome: "Brinco Círculos Lisos",
        descricao: "",
        esgotado: false,
        preco: 55,
        categoria: Categoria.Brincos,
        foto: "brinco-argolas-diferentes.jpeg",
      },
      {
        nome: "Brinco Círculos Detalhados",
        descricao: "",
        esgotado: false,
        preco: 55,
        categoria: Categoria.Brincos,
        foto: "brinco-argolas-iaguais.jpeg",
      },
      {
        nome: "Brinco Argolas Lisas",
        descricao: "",
        esgotado: false,
        preco: 40,
        categoria: Categoria.Brincos,
        foto: "brinco-argolas.jpeg",
      },
      {
        nome: "Brinco Círculo e Coração Detalhado",
        descricao: "",
        esgotado: false,
        preco: 50,
        categoria: Categoria.Brincos,
        foto: "brinco-coracao-argola.jpeg",
      },
      {
        nome: "Brinco Pedra Masculino",
        descricao: "",
        esgotado: false,
        preco: 20,
        categoria: Categoria.Brincos,
        foto: "brinco-masc.jpeg",
      },
      {
        nome: "Brinco Borboletas e Ponto de Luz",
        descricao: "Trio",
        esgotado: false,
        preco: 55,
        categoria: Categoria.Brincos,
        foto: "brinco-trio-borboletas-pedrinha.jpeg",
      },
      {
        nome: "Brinco Corações Rosé",
        descricao: "Trio",
        esgotado: false,
        preco: 50,
        categoria: Categoria.Brincos,
        foto: "brinco-trio-coracao-rosa.jpeg",
      },
      {
        nome: "Brinco Corações Origami",
        descricao: "Trio",
        esgotado: false,
        preco: 55,
        categoria: Categoria.Brincos,
        foto: "brinco-trio-coracoes-origami.jpeg",
      },
      {
        nome: "Brinco Estrela,Coração e Ponto de Luz",
        descricao: "Trio",
        esgotado: false,
        preco: 50,
        categoria: Categoria.Brincos,
        foto: "brinco-trio-estrela-coracao-pedrinha.jpeg",
      },
    ],
  },
  {
    name: Categoria.Colares,
    foto: "DESTAQUE-COLAR.png",
    produtos: [
      {
        nome: "Colar Coração Transparente",
        descricao: "",
        esgotado: false,
        preco: 80,
        categoria: Categoria.Colares,
        foto: "colar-coracao-branco-grande.jpeg",
      },
      {
        nome: "Colar Coração Cravaçao",
        descricao: "",
        esgotado: false,
        preco: 80,
        categoria: Categoria.Colares,
        foto: "colar-coracao-pedrinha pequena.jpeg",
      },
      {
        nome: "Colar Patinhas",
        descricao: "",
        esgotado: false,
        preco: 70,
        categoria: Categoria.Colares,
        foto: "colar-patinhas.jpeg",
      },
      {
        nome: "Colar Ponto de Luz",
        descricao: "",
        esgotado: false,
        preco: 65,
        categoria: Categoria.Colares,
        foto: "colar-ponto-luz.jpeg",
      },
    ],
  },
  {
    name: Categoria.Conjuntos,
    foto: "DESTAQUE-CONJUNTO.png",
    produtos: [
      {
        nome: "Conjunto Gota Azul",
        descricao: "",
        esgotado: false,
        preco: 115,
        categoria: Categoria.Conjuntos,
        foto: "conjunto-azul.jpeg",
      },
      {
        nome: "Conjunto Gota Branca",
        descricao: "",
        esgotado: false,
        preco: 115,
        categoria: Categoria.Conjuntos,
        foto: "conjunto-branco.jpeg",
      },
    ],
  },
  {
    name: Categoria.Pulseiras,
    foto: "DESTAQUE-PULSEIRA.png",
    produtos: [
      {
        nome: "Pulseira Corações Azuis",
        descricao: "",
        esgotado: false,
        preco: 55,
        categoria: Categoria.Pulseiras,
        foto: "pulseira-coracoes-azuis.jpeg",
      },
      {
        nome: "Pulseira Estrela e Coração",
        descricao: "",
        esgotado: false,
        preco: 65,
        categoria: Categoria.Pulseiras,
        foto: "pulseira-estrela-coracao.jpeg",
      },
      {
        nome: "Pulseira Pedrinhas Azuis",
        descricao: "",
        esgotado: false,
        preco: 65,
        categoria: Categoria.Pulseiras,
        foto: "pulseira-pedrinhas-azuis.jpeg",
      },
      {
        nome: "Pulseira Pedrinhas Douradas",
        descricao: "",
        esgotado: false,
        preco: 65,
        categoria: Categoria.Pulseiras,
        foto: "pulseira-pedrinhas-douradas.jpeg",
      },
      {
        nome: "Pulseira Pedrinhas Verdes",
        descricao: "",
        esgotado: false,
        preco: 65,
        categoria: Categoria.Pulseiras,
        foto: "pulseira-pedrinhas-verde.jpeg",
      },
      {
        nome: "Pulseira Trevo Vermelho",
        descricao: "",
        esgotado: false,
        preco: 70,
        categoria: Categoria.Pulseiras,
        foto: "pulseira-trevo-vermelho.jpeg",
      },
    ],
  },
  {
    name: Categoria.ColarMasc,
    foto: "colar-masc.png",
    produtos: [
      {
        nome: "Colar Masculino Cruz Geométrica",
        descricao: "",
        esgotado: false,
        preco: 110,
        categoria: Categoria.ColarMasc,
        foto: "colar-masc-cruz-geometrica.jpeg",
      },
      {
        nome: "Colar Cruz Detalhada",
        descricao: "",
        esgotado: false,
        preco: 100,
        categoria: Categoria.ColarMasc,
        foto: "colar-masc-cruz-preenchida.jpeg",
      },
      {
        nome: "Colar Cruz Vazada",
        descricao: "TAM Maior",
        esgotado: false,
        preco: 120,
        categoria: Categoria.ColarMasc,
        foto: "colar-masc-cruz-vazada-grande.jpeg",
      },
      {
        nome: "Colar Cruz Vazada",
        descricao: "TAM Menor",
        esgotado: false,
        preco: 100,
        categoria: Categoria.ColarMasc,
        foto: "colar-masc-cruz-vazada-pequena.jpeg",
      },
      {
        nome: "Colar Estrela de Davi",
        descricao: "",
        esgotado: false,
        preco: 110,
        categoria: Categoria.ColarMasc,
        foto: "colar-masc-estrela-davi.jpeg",
      },
    ],
  },
  {
    name: Categoria.PulseirasMasc,
    foto: "pulseira-masc.png",
    produtos: [
      {
        nome: "Pulseira Maculinha Lisa",
        descricao: "2mm",
        esgotado: false,
        preco: 90,
        categoria: Categoria.PulseirasMasc,
        foto: "pulseira-masc-chapa-2mm.jpeg",
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
