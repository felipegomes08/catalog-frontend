// Definindo o enum para as categorias.
export enum Categoria {
  Aneis = "Anéis",
  Brincos = "Brincos",
  Colares = "Colares",
  Conjuntos = "Conjuntos",
  Pulseiras = "Pulseiras",
  PulseirasMasc = "Pulseiras Masculinas",
  ColarMasc = "Colares Masculinos",
  Tornozeleiras = "Tornozeleiras"
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
    foto: 'DESTAQUE-ANEL.png',
    produtos: [
      {
        nome: 'Anel Rabo de Baleia com Coração de Zircônia Regulável',
        descricao: 'regulável',
        esgotado: false,
        preco: 60,
        foto: 'Anel de Prata 925 Rabo de Baleia com Coração de Zircônia Regulável.webp'
      },
      {
        nome: 'Anel Coração Duplo Regulável',
        descricao: 'regulável',
        esgotado: false,
        preco: 50,
        foto: 'Anel de Prata 925 Coração Duplo Regulável.webp'
      },
      {
        nome: 'Anel Ondas',
        descricao: 'Tam 19',
        esgotado: false,
        preco: 50,
        foto: 'Anel de Prata 925 Ondas.webp'
      },
      {
        nome: 'Anel Zig Zag Cravejado',
        descricao: 'Tam 17',
        esgotado: false,
        preco: 60,
        foto: 'Anel de Prata 925 Zig Zag Cravejado.webp'
      },
      {
        nome: 'Anel Cravejado Regulável Estrela e Lua',
        descricao: 'regulável',
        esgotado: false,
        preco: 60,
        foto: 'Anel de Prata 925 Cravejado Regulável Estrela e Lua.webp'
      },
      {
        nome: 'Anel Fios Minimalistas Regulável',
        descricao: 'regulável',
        esgotado: false,
        preco: 50,
        foto: 'Anel de Prata 925 Fios Minimalistas Regulável.webp'
      },

      {
        nome: 'Anel Coração Verde',
        descricao: 'TAM 16',
        esgotado: false,
        preco: 55,
        categoria: Categoria.Aneis,
        foto: 'anel-coracao-verde.jpeg'
      },
      {
        nome: 'Anel Corações Cravejados',
        descricao: 'TAM 23',
        esgotado: false,
        preco: 60,
        categoria: Categoria.Aneis,
        foto: 'anel-coracoes-pedrinhas.jpeg'
      },
      {
        nome: 'Anel Meia Aliança',
        descricao: 'TAM 20',
        esgotado: false,
        preco: 60,
        categoria: Categoria.Aneis,
        foto: 'anel-cravejado.jpeg'
      },
      {
        nome: 'Anel Amor Infinito',
        descricao: 'Regulável',
        esgotado: false,
        preco: 50,
        categoria: Categoria.Aneis,
        foto: 'anel-infinito-coracao.jpeg'
      },
      {
        nome: 'Anel Zircônia Quadrangular',
        descricao: 'TAM 18',
        esgotado: false,
        preco: 60,
        categoria: Categoria.Aneis,
        foto: 'anel-pedra-quadrada.jpeg'
      },
      {
        nome: 'Anel Triângulos',
        descricao: 'Regulável',
        esgotado: false,
        preco: 50,
        categoria: Categoria.Aneis,
        foto: 'anel-reg-triangulos.jpeg'
      },
      {
        nome: 'Anel Trançado',
        descricao: 'TAM 20, 17',
        esgotado: false,
        preco: 55,
        categoria: Categoria.Aneis,
        foto: 'anel-trancado.jpeg'
      }
    ]
  },
  {
    name: Categoria.Brincos,
    foto: 'DESTAQUE-BRINCO.png',
    produtos: [
      {
        nome: 'Brinco Argola com Cruz Cravejada',
        descricao: '',
        foto: 'Brinco de Prata 925 Argola com Cruz Cravejada.webp',
        preco: 80,
        esgotado: false
      },
      {
        nome: 'Brinco Meia Argola Com Zircônias Rosas Claras',
        descricao: '',
        foto: 'Brinco de Prata 925 Meia Argola Com Zircônias Rosas Claras.webp',
        preco: 80,
        esgotado: false
      },
      {
        nome: 'Brinco Cobra Lisa',
        descricao: '',
        foto: 'Brinco de Prata 925 Cobra Lisa.webp',
        preco: 50,
        esgotado: false
      },
      {
        nome: 'Brinco Meia Argola Torcida',
        descricao: '',
        foto: 'Brinco de Prata 925 Meia Argola Torcida.webp',
        preco: 50,
        esgotado: false
      },
      {
        nome: 'Brinco Coração Zircônia 6mm',
        descricao: '',
        foto: 'Brinco de Prata 925 Coração Zircônia 6mm.webp',
        preco: 50,
        esgotado: false
      },
      {
        nome: 'Brinco Quadrado Zircônia Branca 6mm Unissex',
        descricao: '',
        foto: 'Brinco de Prata 925 Quadrado Zircônia Branca 6mm Unissex.webp',
        preco: 50,
        esgotado: false
      },
      {
        nome: 'Argola com Pérola',
        descricao: '',
        foto: 'Argola de Prata 925 com Pérola2.webp',
        preco: 50,
        esgotado: false
      },
      {
        nome: 'Brinco Coração Vazado Com Corações Lisos',
        descricao: '',
        esgotado: false,
        preco: 50,
        foto: 'Brinco de Prata 925 Coração Vazado Com Corações Lisos.webp'
      },
      {
        nome: 'Brinco Ear Cuff 3 Corações',
        descricao: '',
        esgotado: false,
        preco: 40,
        foto: 'Brinco de Prata 925 Ear Cuff 3 Corações.webp'
      },
      {
        nome: 'Brinco Zircônia Redonda',
        descricao: 'Unissex 9mm',
        esgotado: false,
        preco: 50,
        foto: 'Brinco de Prata 925 Zircônia Redonda Unissex 9mm.webp'
      },

      {
        nome: 'Brinco cuff 4 Corações',
        descricao: '',
        esgotado: false,
        preco: 55,
        categoria: Categoria.Brincos,
        foto: 'brinco-4-coracoes.jpeg'
      },
      {
        nome: 'Brinco Círculos Detalhados',
        descricao: '',
        esgotado: false,
        preco: 55,
        categoria: Categoria.Brincos,
        foto: 'brinco-argolas-iaguais.jpeg'
      },
      {
        nome: 'Brinco Argolas Lisas',
        descricao: '',
        esgotado: false,
        preco: 40,
        categoria: Categoria.Brincos,
        foto: 'brinco-argolas.jpeg'
      },
      {
        nome: 'Brinco Círculo e Coração Detalhado',
        descricao: '',
        esgotado: false,
        preco: 50,
        categoria: Categoria.Brincos,
        foto: 'brinco-coracao-argola.jpeg'
      },
      {
        nome: 'Brinco Pedra',
        descricao: 'unisex',
        esgotado: false,
        preco: 20,
        categoria: Categoria.Brincos,
        foto: 'brinco-masc.jpeg'
      },
      {
        nome: 'Brinco Borboletas e Ponto de Luz',
        descricao: 'Trio',
        esgotado: false,
        preco: 55,
        categoria: Categoria.Brincos,
        foto: 'brinco-trio-borboletas-pedrinha.jpeg'
      },
      {
        nome: 'Brinco Corações Rosé',
        descricao: 'Trio',
        esgotado: false,
        preco: 50,
        categoria: Categoria.Brincos,
        foto: 'brinco-trio-coracao-rosa.jpeg'
      },
      {
        nome: 'Brinco Corações Origami',
        descricao: 'Trio',
        esgotado: false,
        preco: 55,
        categoria: Categoria.Brincos,
        foto: 'brinco-trio-coracoes-origami.jpeg'
      },
      {
        nome: 'Brinco Estrela,Coração e Ponto de Luz',
        descricao: 'Trio',
        esgotado: false,
        preco: 50,
        categoria: Categoria.Brincos,
        foto: 'brinco-trio-estrela-coracao-pedrinha.jpeg'
      }
    ]
  },
  {
    name: Categoria.Colares,
    foto: 'DESTAQUE-COLAR.png',
    produtos: [
      {
        nome: 'Colar Pingente Coração Central e Zircônias Brancas',
        descricao: '',
        foto: 'Colar de Prata 925 Pingente Coração Central e Zircônias Brancas.webp',
        preco: 90,
        esgotado: false
      },
      {
        nome: 'Colar Cavalo Country',
        descricao: '',
        foto: 'Colar de Prata 925 Cavalo Country.webp',
        preco: 100,
        esgotado: false
      },
      {
        nome: 'Colar Pingente das Minhas Cicatrizes Nasceram Asas',
        descricao: '',
        foto: 'Colar de Prata 925 Pingente das Minhas Cicatrizes Nasceram Asas.webp',
        preco: 100,
        esgotado: false
      },
      {
        nome: 'Colar Gravatinha Regulável Triângulos',
        descricao: '',
        foto: 'Colar de Prata 925 Gravatinha Regulável Triângulos.webp',
        preco: 100,
        esgotado: false
      },
      {
        nome: 'Colar Árvore da Vida Cravejado em Zircônias',
        descricao: '',
        foto: 'Colar de Prata 925 Árvore da Vida Cravejado em Zircônias.webp',
        preco: 100,
        esgotado: false
      },
      {
        nome: 'Colar Borboleta Geométrico',
        descricao: '',
        foto: 'Colar de Prata 925 Borboleta Geométrico.webp',
        preco: 100,
        esgotado: false
      },
      {
        nome: 'Colar veneziana com Bolinhas',
        descricao: '',
        foto: 'Colar veneziana com Bolinhas.webp',
        preco: 70,
        esgotado: false
      },
      {
        nome: 'Colar Rabo de Baleia Geométrico',
        descricao: '',
        esgotado: false,
        preco: 100,
        foto: 'Colar de Prata 925 Rabo de Baleia Geométrico.webp'
      },
      {
        nome: 'Colar Trevo Detalhado Preto Pequeno',
        descricao: '',
        esgotado: false,
        preco: 90,
        foto: 'Colar de Prata 925 Trevo Detalhado Preto Pequeno.webp'
      },
      {
        nome: 'Colar Veneziana com Bolinhas',
        descricao: '',
        esgotado: false,
        preco: 65,
        foto: 'Colar de Prata 925 Veneziana com Bolinhas.webp'
      },
      {
        nome: 'Colar Mini Corações Vazados',
        descricao: '',
        esgotado: false,
        preco: 70,
        foto: 'Colar de Prata 925 Mini Corações Vazados.webp'
      },
      {
        nome: 'Colar Coração Cravaçao',
        descricao: '',
        esgotado: false,
        preco: 80,
        categoria: Categoria.Colares,
        foto: 'colar-coracao-pedrinha pequena.jpeg'
      },
      {
        nome: 'Colar Ponto de Luz',
        descricao: '',
        esgotado: false,
        preco: 65,
        categoria: Categoria.Colares,
        foto: 'colar-ponto-luz.jpeg'
      }
    ]
  },
  {
    name: Categoria.Conjuntos,
    foto: 'DESTAQUE-CONJUNTO.png',
    produtos: [
      {
        nome: 'Conjunto Coração Zircônia Preto',
        descricao: 'Conjunto',
        esgotado: false,
        preco: 100,
        foto: 'Conjunto De Prata 925 Coração Zircônia Preto.webp'
      },
      {
        nome: 'Conjunto Coração Vazado',
        descricao: 'Conjunto',
        esgotado: false,
        preco: 100,
        foto: 'Conjunto de Prata 925 Coração Vazado.webp'
      },
      {
        nome: 'Conjunto Gota Azul',
        descricao: 'Conjunto',
        esgotado: false,
        preco: 115,
        categoria: Categoria.Conjuntos,
        foto: 'conjunto-azul.jpeg'
      },
      {
        nome: 'Conjunto Gota Branca',
        descricao: 'Conjunto',
        esgotado: false,
        preco: 115,
        categoria: Categoria.Conjuntos,
        foto: 'conjunto-branco.jpeg'
      }
    ]
  },
  {
    name: Categoria.Pulseiras,
    foto: 'DESTAQUE-PULSEIRA.png',
    produtos: [
      {
        nome: 'Pulseira Corações Vazados e Zircônias Brancas',
        descricao: '',
        foto: 'Pulseira de Prata 925 Corações Vazados e Zircônias Brancas.webp',
        preco: 60,
        esgotado: false
      },
      {
        nome: 'Pulseira Religiosa Pingentes de Cruz e Bolinhas',
        descricao: '',
        foto: 'Pulseira de Prata 925 Religiosa Pingentes de Cruz e Bolinhas.webp',
        preco: 60,
        esgotado: false
      },
      {
        nome: 'Pulseira Trevo Detalhado Rosa',
        descricao: '',
        esgotado: false,
        preco: 60,
        foto: 'Pulseira de Prata 925 Trevo Detalhado Rosa.webp'
      },
      {
        nome: 'Pulseira Corações Rosas',
        descricao: '',
        esgotado: false,
        preco: 60,
        foto: 'Pulseira de Prata 925 Corações Rosas.webp'
      },
      {
        nome: 'Pulseira Corações Azuis',
        descricao: '',
        esgotado: false,
        preco: 55,
        categoria: Categoria.Pulseiras,
        foto: 'pulseira-coracoes-azuis.jpeg'
      },
      {
        nome: 'Pulseira Estrela e Coração',
        descricao: '',
        esgotado: false,
        preco: 65,
        categoria: Categoria.Pulseiras,
        foto: 'pulseira-estrela-coracao.jpeg'
      },
      {
        nome: 'Pulseira Pedrinhas Azuis',
        descricao: '',
        esgotado: false,
        preco: 65,
        categoria: Categoria.Pulseiras,
        foto: 'pulseira-pedrinhas-azuis.jpeg'
      },
      {
        nome: 'Pulseira Pedrinhas Douradas',
        descricao: '',
        esgotado: false,
        preco: 65,
        categoria: Categoria.Pulseiras,
        foto: 'pulseira-pedrinhas-douradas.jpeg'
      },
      {
        nome: 'Pulseira Pedrinhas Verdes',
        descricao: '',
        esgotado: false,
        preco: 65,
        categoria: Categoria.Pulseiras,
        foto: 'pulseira-pedrinhas-verde.jpeg'
      },
      {
        nome: 'Pulseira Trevo Vermelho',
        descricao: '',
        esgotado: false,
        preco: 70,
        categoria: Categoria.Pulseiras,
        foto: 'pulseira-trevo-vermelho.jpeg'
      }
    ]
  },
  {
    name: Categoria.Tornozeleiras,
    foto: 'TORNOZELEIRAS.png',
    produtos: [
      {
        nome: 'Tornozeleira Zircônias Rosas',
        descricao: '',
        foto: 'Tornozeleira de Prata 925 Zircônias Rosas Penduradas.webp',
        preco: 70,
        esgotado: false
      },
      {
        nome: 'Tornozeleira Corações em Zircônia Branca',
        descricao: '',
        foto: 'Tornozeleira de Prata 925 Corações em Zircônia Branca.webp',
        preco: 70,
        esgotado: false
      },
      {
        nome: 'Tornozeleira Mini Corações Brancos',
        descricao: '',
        foto: 'Tornozeleira de Prata 925 Mini Corações Brancos.webp',
        preco: 70,
        esgotado: false
      }
    ]
  },
  {
    name: Categoria.ColarMasc,
    foto: 'colar-masc.png',
    produtos: [
      {
        nome: 'Colar Masculino Cruz com Detalhes',
        descricao: '',
        esgotado: false,
        preco: 110,
        foto: 'Colar de Prata 925 Masculino Cruz com Detalhes.webp'
      },
      {
        nome: 'Colar Masculino Cruz Geométrica',
        descricao: '',
        esgotado: false,
        preco: 110,
        categoria: Categoria.ColarMasc,
        foto: 'colar-masc-cruz-geometrica.jpeg'
      },
      {
        nome: 'Colar Cruz Detalhada',
        descricao: '',
        esgotado: false,
        preco: 100,
        categoria: Categoria.ColarMasc,
        foto: 'colar-masc-cruz-preenchida.jpeg'
      },
      {
        nome: 'Colar Cruz Vazada',
        descricao: 'TAM Maior',
        esgotado: false,
        preco: 120,
        categoria: Categoria.ColarMasc,
        foto: 'colar-masc-cruz-vazada-grande.jpeg'
      },
      {
        nome: 'Colar Cruz Vazada',
        descricao: 'TAM Menor',
        esgotado: false,
        preco: 100,
        categoria: Categoria.ColarMasc,
        foto: 'colar-masc-cruz-vazada-pequena.jpeg'
      },
      {
        nome: 'Colar Estrela de Davi',
        descricao: '',
        esgotado: false,
        preco: 110,
        categoria: Categoria.ColarMasc,
        foto: 'colar-masc-estrela-davi.jpeg'
      }
    ]
  },
  {
    name: Categoria.PulseirasMasc,
    foto: 'pulseira-masc.png',
    produtos: [
      {
        nome: 'Pulseira Masculina Elos Piastrine',
        descricao: '',
        esgotado: false,
        preco: 90,
        foto: 'Pulseira de Prata 925 Masculina Elos Piastrine.webp'
      },
      {
        nome: 'Pulseira Elos Grumet Duplo',
        descricao: '3mm',
        esgotado: false,
        preco: 90,
        foto: 'Pulseira de Prata 925 Elos Grumet Duplo 3mm.webp'
      },
      {
        nome: 'Pulseira Masculina Elos 3x1',
        descricao: '4mm',
        esgotado: false,
        preco: 120,
        foto: 'Pulseira Masculina de Prata 925 Elos 3x1 4mm.webp'
      },
      {
        nome: 'Pulseira Masculina Elos Grumet',
        descricao: '4mm',
        esgotado: false,
        preco: 120,
        foto: 'Pulseira Masculina de Prata 925 Elos Grumet 4mm.webp'
      },
      {
        nome: 'Pulseira Masculina Elos 3x1',
        descricao: '5mm',
        esgotado: false,
        preco: 150,
        foto: 'Pulseira Masculina de Prata 925 Elos 3x1 5mm.webp'
      },
      {
        nome: 'Pulseira Masculina Elos Grumet',
        descricao: '5mm',
        esgotado: false,
        preco: 150,
        foto: 'Pulseira Masculina de Prata 925 Elos Grumet 5mm.webp'
      },
      {
        nome: 'Pulseira Masculina Lisa',
        descricao: '2mm',
        esgotado: false,
        preco: 90,
        categoria: Categoria.PulseirasMasc,
        foto: 'pulseira-masc-chapa-2mm.jpeg'
      }
    ]
  }
];


// Mapeando os produtos para incluir a categoria
export const products: Produto[] = categories.flatMap((category) =>
  category.produtos.map((product) => ({
    ...product,
    categoria: category.name,
  }))
);
