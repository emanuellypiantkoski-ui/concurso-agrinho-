// Banco de dados das árvores nativas
const arvores = [
    {
        nome: "Ipê-Amarelo",
        cientifico: "Handroanthus albus",
        bioma: "Mata Atlântica e Cerrado",
        altura: "7 a 30 metros",
        curiosidade: "É considerada a flor nacional do Brasil. Sua floração ocorre no inverno e dura poucos dias, deixando a árvore completamente sem folhas e coberta de flores.",
        descricao: "O Ipê-Amarelo é famoso por sua espetacular floração que colore a paisagem urbana e florestal entre os meses de julho e setembro. Sua madeira é extremamente resistente, sendo uma das mais valorizadas do país. É uma árvore pioneira, muito utilizada na recuperação de áreas degradadas."
    },
    {
        nome: "Pau-Brasil",
        cientifico: "Paubrasilia echinata",
        bioma: "Mata Atlântica",
        altura: "10 a 15 metros",
        curiosidade: "Deu nome ao nosso país. Os indígenas o chamavam de 'Ibirapitanga' (madeira vermelha).",
        descricao: "O Pau-Brasil possui um tronco repleto de espinhos (acúleos) e uma madeira avermelhada da qual se extraía um corante muito cobiçado na Europa colonial para tingir tecidos de luxo. Hoje, sua madeira de alta ressonância é utilizada internacionalmente de forma controlada para a confecção de arcos de violino."
    },
    {
        nome: "Araucária",
        cientifico: "Araucaria angustifolia",
        bioma: "Mata de Araucárias (Sul do Brasil)",
        altura: "20 a 50 metros",
        curiosidade: "É um fóssil vivo que conviveu com os dinossauros. Suas sementes (pinhão) são base da alimentação de diversas aves e roedores no inverno.",
        descricao: "Também conhecida como Pinheiro-do-Paraná, a Araucária possui uma copa única em formato de cálice ou candelabro. É a árvore símbolo do sul do país. Infelizmente, devido à exploração madeireira intensa no século passado, encontra-se hoje criticamente ameaçada de extinção."
    },
    {
        nome: "Castanheira-do-Pará",
        cientifico: "Bertholletia excelsa",
        bioma: "Amazônia",
        altura: "30 a 50 metros",
        curiosidade: "Pode viver mais de 500 anos e é uma das maiores árvores da Floresta Amazônica.",
        descricao: "A Castanheira desempenha papel vital no ecossistema amazônico e na economia de comunidades tradicionais. Seus frutos são capsulas lenhosas muito duras (conhecidas como 'ouriços') que abrigam as famosas castanhas. Sua polinização depende de espécies muito específicas de abelhas robustas."
    },
    {
        nome: "Jatobá",
        cientifico: "Hymenaea courbaril",
        bioma: "Amazônia, Cerrado e Mata Atlântica",
        altura: "15 a 40 metros",
        curiosidade: "Produz uma seiva que se fossiliza formando o âmbar, muito procurado para estudos paleontológicos.",
        descricao: "O Jatobá se destaca por sua imponência e longevidade. Seus frutos têm casca dura e uma polpa farinácea verde-amarelada, comestível e altamente nutritiva. Sua madeira é extremamente dura e pesada, muito resistente a pragas. É considerada uma árvore sagrada por diversos povos indígenas."
    }
];

// Elementos da página
const buttonsContainer = document.getElementById("buttonsContainer");
const treeName = document.getElementById("treeName");
const treeScientific = document.getElementById("treeScientific");
const treeBioma = document.getElementById("treeBioma");
const treeHeight = document.getElementById("treeHeight");
const treeCuriosity = document.getElementById("treeCuriosity");
const treeDescription = document.getElementById("treeDescription");

// Função para renderizar os botões na tela
function gerarBotoes() {
    arvores.forEach((arvore, index) => {
        const btn = document.createElement("button");
        btn.classList.add("tree-btn");
        btn.innerText = arvore.nome;
        
        // Evento de clique para mostrar os dados da árvore
        btn.addEventListener("click", () => {
            // Remove a classe ativa de todos os botões
            document.querySelectorAll(".tree-btn").forEach(b => b.classList.remove("active"));
            // Adiciona classe ativa no botão clicado
            btn.classList.add("active");
            
            mostrarDetalhes(arvore);
        });

        buttonsContainer.appendChild(btn);
    });
}

// Função para atualizar o painel de informações
function mostrarDetalhes(arvore) {
    // Efeito suave de transição de conteúdo
    const card = document.getElementById("detailsCard");
    card.style.opacity = 0;

    setTimeout(() => {
        treeName.innerText = arvore.nome;
        treeScientific.innerHTML = `<em>${arvore.cientifico}</em>`;
        treeBioma.innerText = arvore.bioma;
        treeHeight.innerText = arvore.altura;
        treeCuriosity.innerText = arvore.curiosidade;
        treeDescription.innerText = arvore.descricao;
        
        card.style.opacity = 1;
    }, 200);
}

// Inicializa o site gerando os botões
gerarBotoes();
