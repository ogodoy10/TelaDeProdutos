import Products from './components/Products';

const Produtos = [
  {
    "id": 1,
    "title": "Blusas MetroWave Hoodie",
    "description": "A MetroWave Hoodie captura a essência do estilo urbano com um toque de modernidade. Com um design inovador e detalhes elegantes, esta blusa de moletom com touca é ideal para quem quer se destacar na multidão. Disponível em diversas cores, ela é confeccionada com um tecido macio e resistente, garantindo conforto e durabilidade. A touca ajustável e o bolso canguru oferecem praticidade, enquanto o corte slim fit proporciona um caimento perfeito.",
    "imageUrl": "https://tse1.mm.bing.net/th?id=OIG4.7PILpSOHrE_1I6IBpkg2&pid=ImgGn"
  },

  {
    "id": 2,
    "title": "Blusas Urban Pulse",
    "description": "As blusas de moletom Urban Pulse são a escolha perfeita para quem busca estilo e conforto no dia a dia. Com um design moderno e atual, essas blusas são confeccionadas com materiais de alta qualidade que garantem durabilidade e maciez. Disponíveis em diferentes cores e estampas, elas são ideais para compor looks casuais e despojados, proporcionando um visual urbano e descolado.",
    "imageUrl": "https://tse4.mm.bing.net/th?id=OIG4._Sghj1zJrZQlfpW3E.Pz&pid=ImgGn"
  },

  {
    "id": 3,
    "title": "Blusas Urban Hoodie",
    "description": "A Urban Hoodie é a combinação perfeita de estilo e conforto. Com um design moderno e minimalista, esta blusa de moletom com touca é ideal para qualquer ocasião casual. Disponível em várias cores vibrantes, ela é feita de um tecido macio e durável que garante aquecimento e conforto durante todo o dia.",
    "imageUrl": "https://tse1.mm.bing.net/th?id=OIG3.W_lbhpwkpQR7dUXifH1U&pid=ImgGn"
  },

  {
    "id": 4,
    "title": "Calças Urban Flex",
    "description": "As Urban Flex são a escolha ideal para quem busca conforto e estilo em ocasiões casuais. Com um design moderno e versátil, essas calças são confeccionadas em tecido elástico de alta qualidade, proporcionando liberdade de movimento e durabilidade. Disponíveis em várias cores, elas apresentam um corte slim fit que valoriza a silhueta sem comprometer o conforto.",
    "imageUrl": "https://tse3.mm.bing.net/th?id=OIG3.SqkxDbP5NR0E.TGng85x&w=270&h=270&c=6&r=0&o=5&pid=ImgGn"    
  },

  {
    "id": 5,
    "title": "CityStride Pants",
    "description": "As CityStride Pants são perfeitas para quem busca um visual casual e sofisticado. Com um design contemporâneo e detalhes elegantes, essas calças são confeccionadas em tecido leve e respirável, garantindo conforto durante todo o dia. Disponíveis em diversas cores, elas apresentam um corte reto que combina estilo e praticidade.",
    "imageUrl": "https://tse1.mm.bing.net/th?id=OIG3.fN.VUmv3xQvAWtUKVK.u&w=270&h=270&c=6&r=0&o=5&pid=ImgGn"
  },

  {
    "id": 6,
    "title": "VibeFlex Pants",
    "description": "As VibeFlex Pants são a escolha perfeita para quem quer unir estilo e conforto em um só look. Com um design moderno e detalhes únicos, essas calças são confeccionadas em tecido elástico de alta qualidade, proporcionando liberdade de movimento e durabilidade.",
    "imageUrl": "https://tse2.mm.bing.net/th?id=OIG3.WyTANm0gGXQQ6VsC9TP6&pid=ImgGn"
  },

  {
    "id": 7,
    "title": "Tênis BlackSpark Elite",
    "description": "O BlackSpark Elite é um tênis moderno e elegante, projetado para quem busca estilo e conforto. Com um design arrojado, ele combina cores clássicas como preto e branco, realçadas por texturas metálicas e brilhantes que dão um toque de sofisticação.",
    "imageUrl": "https://th.bing.com/th/id/OIG2.WgczDJ_5.i62s7.Q2C.h?pid=ImgGn"
  },

  {
    "id": 8,
    "title": "Tênis ColorWave",
    "description": "Os tênis ColorWave são a combinação perfeita de estilo e conforto. Com um design moderno e disponível em uma variedade de cores vibrantes, eles são ideais para quem quer se destacar.",
    "imageUrl": "https://tse4.mm.bing.net/th?id=OIG2.j6HbQWNU9OdtcTkXAP2V&pid=ImgGn"
  },

  {
    "id": 9,
    "title": "Tênis Yeezy MetroPulse",
    "description": "Os tênis Yeezy MetroPulse são a escolha perfeita para quem busca estilo e praticidade no dia a dia. Com um design contemporâneo e disponível em uma paleta de cores sofisticadas, eles são ideais para qualquer ocasião, desde um passeio pela cidade até um encontro casual.",
    "imageUrl": "https://tse4.mm.bing.net/th?id=OIG2.U1ulhDcfL9HVAbmKy148&pid=ImgGn"
  },

  {
    "id": 10,
    "title": "Camisetas Sociais com Estampa",
    "description": "Modelos casuais, perfeitos para o dia a dia. Elas vêm em uma variedade de cores sólidas e são projetadas para oferecer conforto e estilo.",
    "imageUrl": "https://tse2.mm.bing.net/th?id=OIG3.oAVn4FMw6ky3Ry1kCA2u&pid=ImgGn"
  },

  {
    "id": 11,
    "title": "Camisetas Sociais Lisas",
    "description": "Camisas de modelos casuais versáteis, perfeitos para diversas ocasiões. Disponíveis em várias cores sólidas, elas oferecem opções de cortes modernos como slim e oversized.",
    "imageUrl": "https://tse3.mm.bing.net/th?id=OIG3._CwvFvhcOEOSJfi6S1eV&w=270&h=270&c=6&r=0&o=5&pid=ImgGn"
  },

  {
    "id": 12,
    "title": "Camisetas Modelo Slim",
    "description": "As camisetas slim são ideais para quem busca um visual moderno e ajustado ao corpo. Disponíveis em várias cores sólidas, essas camisetas oferecem um toque de elegância casual, perfeito para diversas ocasiões. Feitas com materiais de alta qualidade, elas garantem conforto e durabilidade.",
    "imageUrl": "https://tse1.mm.bing.net/th?id=OIG3.E_atGvd67rmT2scHR7VS&pid=ImgGn"
  },

  {
    "id": 13,
    "title": "Camisas Vibes Tropicais",
    "description": "Sinta a energia vibrante do verão com a nossa camiseta “Vibes Tropicais”. Disponível em uma variedade de cores frescas, esta camiseta apresenta uma estampa inspirada nas paisagens tropicais, com palmeiras, ondas do mar e um pôr do sol deslumbrante. Feita de algodão 100% de alta qualidade.",
    "imageUrl": "https://tse1.mm.bing.net/th?id=OIG2.a8c9fbsj98CAcXyNwtsF&pid=ImgGn"
  },

  {
    "id": 14,
    "title": "Camisas Nature Essence",
    "description": "Mergulhe na beleza da natureza com a nossa coleção “Nature’s Essence”. Cada camiseta apresenta estampas vibrantes de animais majestosos e paisagens deslumbrantes, capturando a essência da vida selvagem e dos cenários naturais. Feitas de algodão premium, essas camisetas oferecem conforto e durabilidade, perfeitas para qualquer ocasião.",
    "imageUrl": "https://tse1.mm.bing.net/th?id=OIG2.E09hLeTR8e.CTbCPD1vB&pid=ImgGn"
  },

  {
    "id": 15,
    "title": "Camisas Nature Essence - Vol. 2",
    "description": " Explore ainda mais a beleza da natureza com a nossa coleção “Nature’s Essence Volume 2”. Esta linha apresenta novas estampas deslumbrantes de animais selvagens e paisagens naturais, capturando a majestade e a serenidade do mundo ao nosso redor. Cada camiseta é confeccionada com algodão de alta qualidade, garantindo o mesmo conforto, durabilidade e qualidade de nossa primeira linha.",
    "imageUrl": "https://tse3.mm.bing.net/th?id=OIG3.2D4mUUPGAPhshyZcIu2F&pid=ImgGn"
  },

  {
    "id": 16,
    "title": "Jaquetas Elegância Urbana",
    "description": "A jaqueta de couro Elegância Urbana é a combinação perfeita de estilo e conforto. Feita com couro de alta qualidade, ela apresenta um design moderno e sofisticado, ideal para qualquer ocasião.",
    "imageUrl": "https://tse1.mm.bing.net/th?id=OIG2.4PrxHhloWHcxdjBcxxGN&pid=ImgGn"
  },

  {
    "id": 17,
    "title": "Jaquetas Leather Luxe",
    "description": " Descubra a sofisticação e o estilo com a nossa linha “Leather Luxe”. Estas jaquetas de couro destacam-se pela sua qualidade premium e design moderno. Disponíveis em diversas cores e modelos, cada jaqueta é confeccionada com couro genuíno, proporcionando durabilidade e conforto.",
    "imageUrl": "https://tse1.mm.bing.net/th?id=OIG2.AayPe7sGs1OOfShbiq92&pid=ImgGn"
  },

  {
    "id": 18,
    "title": "Jaquetas Classic Edge",
    "description": "A linha “Classic Edge” combina o charme atemporal do couro com um toque moderno e ousado. Cada jaqueta é confeccionada com couro de alta qualidade, garantindo durabilidade e conforto. Disponíveis em uma variedade de cores e estilos, essas jaquetas são perfeitas para qualquer ocasião, desde um encontro casual até um evento mais sofisticado. Com detalhes cuidadosamente trabalhados e um design que nunca sai de moda.",
    "imageUrl": "https://tse2.mm.bing.net/th?id=OIG2.UHUypUdLJ_NIYHeGCH15&pid=ImgGn"
  },

  {
    "id": 19,
    "title": "Elegance Vision",
    "description": "O Elegance Vision é um óculos moderno e sofisticado, perfeito para quem busca estilo e conforto. Com armação leve e design minimalista, ele se adapta facilmente a qualquer formato de rosto. As lentes de alta qualidade oferecem proteção UV, garantindo segurança e clareza visual em todas as situações. Ideal para uso diário, seja no trabalho ou em momentos de lazer.",
    "imageUrl": "https://tse2.mm.bing.net/th?id=OIG3.RDNfRQvVG1vpKc2dJMNI&pid=ImgGn"
  },

  {
    "id": 20,
    "title": "Bolsas Femininas",
    "description": "Transforme seu estilo com nossas bolsas femininas, onde elegância encontra praticidade. Cada bolsa é cuidadosamente desenhada para atender às necessidades da mulher moderna, combinando design sofisticado com funcionalidade excepcional.",
    "imageUrl": "https://tse1.mm.bing.net/th?id=OIG1.ElUAdhL7ZcuFRg6mY6Eb&pid=ImgGn"
  },
]
function App(){
    return(
        <div className="App">
          <h1>Loja Virtual</h1>
          <Products products = {Produtos}/>
        </div>
    )
}


export default App;
