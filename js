// Banco de dados em formato de Objeto (Dicionário do JavaScript)
const dadosAbc = {
    "A - Agricultura": "É o cultivo da terra para produzir plantas que usamos como alimentos, roupas e combustíveis.",
    "B - Biodiversidade": "É a variedade de plantas e animais que os agricultores precisam proteger para manter o campo saudável.",
    "C - Commodities (Gráficos e Estatística)": "Produtos básicos como soja e milho. Os preços mudam diariamente e os produtores usam gráficos de linhas e análise estatística para prever o melhor momento de venda.",
    "D - Drones": "Robôs voadores usados para tirar fotos das plantações e descobrir onde faltam água ou nutrientes.",
    "E - Escoamento": "É o transporte dos alimentos e grãos da fazenda até as cidades, portos e supermercados.",
    "F - Fertilizantes": "As 'vitaminas' que o agricultor coloca na terra para ajudar as plantas a crescerem fortes e bonitas.",
    "G - Georreferenciamento (Geometria)": "Mapeamento da fazenda por satélite. O computador usa a geometria analítica e coordenadas cartesianas (X, Y) para calcular as áreas exatas de plantio.",
    "H - Horticultura": "A área do agro que cuida da produção de verduras, legumes, frutas e flores.",
    "I - Insumos": "Tudo o que o produtor precisa comprar para fazer a fazenda funcionar, como sementes, adubo e ração.",
    "J - Jardins de Chuva": "Áreas com plantas feitas para segurar a água da chuva e evitar que a terra das plantações saia do lugar.",
    "K - Kg e Toneladas (Unidades de Medida)": "A pesagem exige conversão matemática de unidades. Os agricultores calculam a produtividade convertendo quilos (kg) em toneladas (t) ou sacas.",
    "L - Lavoura": "O nome dado ao pedaço de terra preparado e desenhado especialmente para o plantio de grãos.",
    "M - Maquinários": "As grandes máquinas do campo, como tratores e colheitadeiras, que ajudam a fazer o trabalho pesado mais rápido.",
    "N - Nutrientes": "Os alimentos químicos naturais do solo (como nitrogênio e fósforo) que alimentam as plantas.",
    "O - Orgânicos": "Alimentos produtos sem o uso de produtos químicos artificiais, focando no equilíbrio da natureza.",
    "P - Pecuária": "A atividade focada na criação de animais, como bois, porcos e galinhas, para a produção de carnes, leite e ovos.",
    "Q - Quarentena": "O tempo que plantas ou animais novos passam isolados para garantir que não têm nenhuma doença.",
    "R - Rastreabilidade": "Um sistema que permite ao consumidor saber exatamente em qual fazenda o seu alimento foi produzido.",
    "S - Sustentabilidade (Regra de Três)": "Produzir cuidando do futuro. Envolve calcular por Regra de Três a quantidade exata de água e adubo necessária por metro quadrado, evitando desperdícios.",
    "T - Tecnologia": "O uso de celulares, computadores, GPS e robôs para tornar o trabalho no campo mais moderno e eficiente.",
    "U - Umidade do Solo": "A quantidade de água que está escondida na terra, controlada por sensores para evitar o desperdício.",
    "V - Veterinária": "A ciência médica que cuida da saúde, vacinação e bem-estar dos animais criados na fazenda.",
    "W - Watt (Energia)": "Medida da energia elétrica, muitas vezes gerada na própria fazenda através de placas solares ou moinhos de vento.",
    "X - Xaxim": "Um tipo de planta que lembra a importância da preservação ambiental e da proibição da extração ilegal na natureza.",
    "Y - Yield (Razão Matemática da Produtividade)": "A fórmula matemática mais crucial do agro: Produtividade = (Total colhido / Área plantada). Uma razão usada para avaliar a eficiência econômica.",
    "Z - Zootecnia": "A ciência que estuda como criar e cuidar dos animais da fazenda de forma produtiva e com respeito."
};

// Captura o container HTML onde as letras vão aparecer
const container = document.getElementById("abc-container");

// Função executada automaticamente para construir os cartões na tela
function carregarDicionario() {
    for (const [letra, texto] of Object.entries(dadosAbc)) {
        // Cria a estrutura do cartão web
        const card = document.createElement("div");
        card.className = "letter-box";

        card.innerHTML = `
            <div class="letter-title">${letra}</div>
            <p style="margin: 0; line-height: 1.5;">${texto}</p>
        `;

        // Coloca o cartão dentro do container na página
        container.appendChild(card);
    }
}

// Inicia o carregamento quando o site abre
window.onload = carregarDicionario;
