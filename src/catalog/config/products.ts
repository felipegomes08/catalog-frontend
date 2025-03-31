// Definindo o enum para as categorias.
export enum Categoria {
  Aneis = "Anéis",
  Brincos = "Brincos",
  Colares = "Colares",
  Conjuntos = "Conjuntos",
  Pulseiras = "Pulseiras",
  PulseirasMasc = "Pulseiras Masculinas",
  ColarMasc = "Colares Masculinos",
  Tornozeleiras = "Tornozeleiras",
  Personalizados = "Personalizados",
}

// Definindo a interface para os produtos
interface Produto {
  nome: string;
  descricao: string;
  foto: string;
  preco?: number | null;
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
        foto: '65cb84ba86871ae0fed0803ec0116591-08398c30f4b635c25917366032324259-1024-1024.webp'
      },
      {
        nome: 'Anel Corações Cravejados',
        descricao: 'TAM 23',
        esgotado: false,
        preco: 60,
        categoria: Categoria.Aneis,
        foto: '40eeb451556ac2afc892149fb81d5335-49ee9a739b7161ee6c17366032231067-1024-1024.webp'
      },
      {
        nome: 'Anel Meia Aliança',
        descricao: 'TAM 20',
        esgotado: false,
        preco: 60,
        categoria: Categoria.Aneis,
        foto: '5d572e291090c895fe7c81cc5835ba22-a76769cfbcc870c0f417366038536117-1024-1024.webp'
      },
      {
        nome: 'Anel Amor Infinito',
        descricao: 'Regulável',
        esgotado: false,
        preco: 50,
        categoria: Categoria.Aneis,
        foto: '3d45cc9485bd9965bcc6b2e27f7fd57d-ce1fc9482d5058271917393846278783-1024-1024.webp'
      },
      {
        nome: 'Anel Zircônia Quadrangular',
        descricao: 'TAM 18',
        esgotado: false,
        preco: 60,
        categoria: Categoria.Aneis,
        foto: '5b4c24c363ab6e4ac5123ce32e7bae9c-c3beb5fb312fab733817392996859183-1024-1024.webp'
      },
      {
        nome: 'Anel Triângulos',
        descricao: 'Regulável',
        esgotado: false,
        preco: 50,
        categoria: Categoria.Aneis,
        foto: 'fbd16e5b4ea8a1ffd3344db11d8470b4-e536a402a039f7c88d17366034698812-1024-1024.webp'
      },
      {
        nome: 'Anel Trançado',
        descricao: 'TAM 20, 17',
        esgotado: false,
        preco: 55,
        categoria: Categoria.Aneis,
        foto: '746eedf92c9142408ba854bd972e4b19-1237bc601173e570eb17392992027016-1024-1024.webp'
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
        nome: 'Brinco Círculos Detalhados',
        descricao: '',
        esgotado: false,
        preco: 55,
        categoria: Categoria.Brincos,
        foto: 'facetune_17-01-2025-15-10-06-6exi33hg5j-3ded2706d63b6154e417393890693814-1024-1024-d526deaf34dde3728d17399915160168-1024-1024.webp'
      },
      {
        nome: 'Brinco Argolas Lisas',
        descricao: '',
        esgotado: false,
        preco: 40,
        categoria: Categoria.Brincos,
        foto: '4462f073d0af6c75f0ad27d9a206baac-a3e28fdfe5a5f5a69917366043223316-1024-1024.webp'
      },
      {
        nome: 'Brinco Círculo e Coração Detalhado',
        descricao: '',
        esgotado: false,
        preco: 50,
        categoria: Categoria.Brincos,
        foto: '59ad4c8fbb31b3bd5b24460e450a0ff8-1ac7ee6836fe32348817366047457483-1024-1024.webp'
      },
      {
        nome: 'Brinco Pedra',
        descricao: 'unisex',
        esgotado: false,
        preco: 20,
        categoria: Categoria.Brincos,
        foto: '8b57516e723fa4cd3ae32adef65d60cf-d3f3c1c937867bee4b17366046198134-1024-1024-8caf32c5208fac546117399199098094-1024-1024.webp'
      },
      {
        nome: 'Brinco Borboletas e Ponto de Luz',
        descricao: 'Trio',
        esgotado: false,
        preco: 55,
        categoria: Categoria.Brincos,
        foto: 'df529bc65a2c93af876ae646ae65d61d-b5e2b6a4b3d5106e5c17398281151166-1024-1024.webp'
      },
      {
        nome: 'Brinco Corações Rosé',
        descricao: 'Trio',
        esgotado: false,
        preco: 50,
        categoria: Categoria.Brincos,
        foto: '742163963340d21340104db5f30a8435-d60816611a85ad094217401558634006-1024-1024.webp'
      },
      {
        nome: 'Brinco Estrela,Coração e Ponto de Luz',
        descricao: 'Trio',
        esgotado: false,
        preco: 50,
        categoria: Categoria.Brincos,
        foto: 'facetune_20-03-2025-09-00-45-9a64417a725f82e41617431097456932-1024-1024.webp'
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
        foto: '5e1e2f0fc4da07420cbaff765c010201-b0fdd40532061fb5d517366058682748-1024-1024.webp',
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
        foto: '606e0f835ffabd85c8f248d1a38f7179-9814c2da9debe9b4e917366057166403-1024-1024.webp'
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
        foto: '4d1c1715297eadeb39f73ec6f1140e23-59953295ce4db7065017366053416380-1024-1024.webp'
      },
      {
        nome: 'Conjunto Gota Branca',
        descricao: 'Conjunto',
        esgotado: false,
        preco: 115,
        categoria: Categoria.Conjuntos,
        foto: 'a77f085b45c13253d422769907c3e9f1-54bbac49bd64c2788b17366053463847-1024-1024.webp'
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
        foto: '69de0f8343446cfb8920134e97329eca-fe345b1d32d916958417366105098355-1024-1024.webp'
      },
      {
        nome: 'Pulseira Estrela e Coração',
        descricao: '',
        esgotado: false,
        preco: 65,
        categoria: Categoria.Pulseiras,
        foto: '9bff8b95fcda79e5d798f8bbf185b4c2-e4cc451fcec924028a17366106957575-1024-1024.webp'
      },
      {
        nome: 'Pulseira Pedrinhas Azuis',
        descricao: '',
        esgotado: false,
        preco: 65,
        categoria: Categoria.Pulseiras,
        foto: '5972abd3e48290974d869b26676cb9bc-ca5a8524a9c89fb36c17366109545786-1024-1024-4e00bbb2b6e431609317401401377061-1024-1024.webp'
      },
      {
        nome: 'Pulseira Pedrinhas Douradas',
        descricao: '',
        esgotado: false,
        preco: 65,
        categoria: Categoria.Pulseiras,
        foto: '1132fa31e5ce2b0f433fed91a49d7fab-bf7100a544a5e3812e17366114728191-1024-1024.webp'
      },
      {
        nome: 'Pulseira Pedrinhas Verdes',
        descricao: '',
        esgotado: false,
        preco: 65,
        categoria: Categoria.Pulseiras,
        foto: 'fb7aa73814bc62901478dd02f957e5bd-0f66cd66a61d486dd617366105985709-1024-1024-f6fc0a94ebe604fe4617401409414156-1024-1024.webp'
      },
      {
        nome: 'Pulseira Trevo Vermelho',
        descricao: '',
        esgotado: false,
        preco: 70,
        categoria: Categoria.Pulseiras,
        foto: '45dc54b973e5dac4b89676b76e27bb39-bd28490d246f2c71d317366115351168-1024-1024.webp'
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
        foto: 'facetune_04-12-2024-14-34-37-hhc2nmgoq7-ff7b61f71e8e3aa5f117394719783296-1024-1024.webp'
      },
      {
        nome: 'Colar Cruz Detalhada',
        descricao: '',
        esgotado: false,
        preco: 100,
        categoria: Categoria.ColarMasc,
        foto: 'd6597252cfc477560cb10e6195eec6c9-ed349ce26b74280c1417381734376713-1024-1024.webp'
      },
      {
        nome: 'Colar Cruz Vazada',
        descricao: 'TAM Menor',
        esgotado: false,
        preco: 100,
        categoria: Categoria.ColarMasc,
        foto: '5e813f57a668315bd7be5123a8d6f9cc-9cf883cd203579f7df17379972248651-1024-1024.webp'
      },
      {
        nome: 'Colar Estrela de Davi',
        descricao: '',
        esgotado: false,
        preco: 110,
        categoria: Categoria.ColarMasc,
        foto: 'af0fbe565e6667040922591d762ae7c1-e905329be0377d291b17366066464254-1024-1024.webp'
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
      }
    ]
  },
  {
    name: Categoria.Personalizados,
    foto: 'DESTAQUE PERSONALIZADOS.png',
    produtos: [
      {
        nome: 'Pulseira Masculina Elos Piastrine',
        descricao: '',
        esgotado: false,
        preco: null,
        foto: 'Pulseira de Prata 925 Masculina Elos Piastrine.webp'
      },
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
