let nomes = [
    "Miguel", "Arthur", "Bernardo", "Heitor", "Davi", "Lorenzo",
    "Théo", "Pedro", "Gabriel", "Enzo", "Matheus", "Lucas",
    "Benjamin", "Nicolas", "Guilherme", "Rafael", "Joaquim",
    "Samuel", "Enzo Gabriel", "João Miguel", "Henrique",
    "Pedro Henrique", "Gustavo", "Murilo", "Pietro",
    "Lucca", "Felipe", "João Pedro", "Isaac", "Benício",
    "Daniel", "Anthony", "Leonardo", "Davi Lucca", "Bryan",
    "Eduardo", "João Lucas", "Victor", "João", "Cauã", "Antônio",
    "Vicente", "Caleb", "Gael", "Bento", "Caio", "Emanuel",
    "Vinícius", "João Guilherme", "Davi Lucas", "Noah",
    "João Gabriel", "João Victor", "Oliver", "Miguel Henrique",
    "Ruan", "Anthony Gabriel", "Danilo", "Luiz Miguel",
    "Francisco", "Kaique", "Otávio", "Augusto", "Levi",
    "Yuri", "Enrico", "Thiago", "Victor Hugo", "Ian",
    "Thomas", "Henry", "Luiz Felipe", "Ryan", "Arthur Miguel",
    "Davi Luiz", "Nathan", "Pedro Lucas", "Davi Miguel", "Raul",
    "Pedro Miguel", "Luiz Henrique", "Luan", "Martin",
    "Yago", "José", "André", "Gabriel", "Carlos Eduardo",
    "Bruno", "Rodrigo", "Luiz Gustavo", "Arthur Gabriel",
    "Luiz Otávio", "Breno", "Arthur Henrique", "Fernando",
    "Enzo Miguel", "Kauê",
    "Alice", "Sophia", "Helena", "Valentina", "Laura",	
    "Isabella", "Manuela", "Júlia", "Heloísa", "Luiza",	
    "Maria Luiza", "Lorena", "Lívia", "Giovanna",
    "Maria Eduarda", "Beatriz", "Maria Clara", "Cecília",	
    "Eloá", "Lara", "Maria Júlia", "Isadora", "Mariana", 	
    "Emanuelly", "Ana Júlia", "Ana Luiza", "Ana Clara", "Melissa",
    "Yasmin", "Maria Alice", "Isabelly", "Lavínia", "Esther", 	
    "Sarah", "Elisa", "Antonella", "Rafaela", "Maria Cecília",	
    "Liz", "Marina", "Nicole", "Maitê", "Isis", "Alícia", "Luna",	
    "Rebeca", "Agatha", "Letícia", "Maria", "Gabriela", "Ana Laura",	
    "Catarina", "Clara", "Ana Beatriz", "Vitória", "Olívia", 
    "Maria Fernanda", "Emilly", "Maria Valentina", 	
    "Milena", "Maria Helena", "Bianca", "Larissa", "Mirella",	
    "Maria Flor", "Allana", "Ana Sophia", "Clarice", "Pietra",	
    "Maria Vitória", "Maya", "Laís", "Ayla", "Ana Lívia",	
    "Eduarda", "Mariah", "Stella", "Ana	Erick", "Gabrielly",	
    "Sophie", "Carolina", "Maria Laura", "Maria Heloísa",	
    "Maria Sophia", "Fernanda", "Malu", "Analu", "Amanda",	
    "Aurora", "Maria Isis", "Louise	Tomás", "Heloise Lucas", 
    "Ana Vitória", "Ana Cecília", "Ana Liz", "Joana", "Luana",	
    "Antônia", "Isabel", "Bruna"	
];
let sobrenomes = [
        "Agostinho", "Aguiar", "Albuquerque", "Alegria",
        "Alencastro", "Almada", "Alves", "Alvim",
        "Amorim", "Andrade", "Antunes", "Aparício",
        "Apolinário", "Araújo", "Arruda", "Assis",
        "Assunção", "Ávila", "Azambuja", "Baptista",
        "Barreto", "Barros", "Beira Mar", "Belchior",
        "Belém", "Bernardes", "Bittencourt", "Boaventura",
        "Bonfim", "Botelho", "Brites", "Brito", "Caetano",
        "Calixto", "Camacho", "Camilo", "Capelo", "Castro",
        "Cavalcante", "Chaves", "Conceição", "Corte", "Real",
        "Cortês", "Coutinho", "Crespo", "Cunha", "Curado",
        "Custódio", "Córdoba", "Damásio", "Dantas", "Dias",
        "Dinís", "Domingues", "Dorneles dos Reis", "Drumond",
        "D’Ávila", "Escobar", "Espinosa", "Esteves", "Evangelista",
        "Farias", "Ferrari", "Figueiredo", "Figueiroa", "Flores",
        "Fogaça", "Freitas", "Frutuoso", "Furtado", "Félix",
        "Galvão", "Garcia", "Gaspar", "Gentil", "Geraldes",
        "Gil", "Godinho", "Gomes", "Gonzaga", "Goulart",
        "Gouveia", "Guedes", "Guimarães", "Guterres",
        "Góis", "Hernandes", "Hilário", "Hipólito", "Ibrahim",
        "Ilha", "Infante", "Jaques", "Jesus", "Jordão",
        "Lacerda", "Lancastre", "Leiria", "Lessa", "Machado",
        "Maciel", "Magalhães", "Maia", "Maldonado", "Marinho",
        "Marques", "Martins", "Medeiros", "Meireles",  "Mello",
        "Mendes", "Menezes", "Mesquita", "Modesto", "Monteiro",
        "Morais", "Moreira", "Morgado", "Moura", "Muniz", "Neves",
        "Nogueira", "Novais", "Nóbrega", "Ornélas", "Oliveira", "Ourique",
        "Pacheco", "Padilha", "Paiva", "Paraíso", "Paris", "Peixoto", "Peralta",
        "Peres", "Pilar", "Pimenta", "Pinheiro", "Portela", "Quaresma",
        "Quarteira", "Queiroz", "Ramires", "Ramos", "Rebelo", "Resende",
        "Ribeiro", "Salazar", "Sales", "Salgado", "Salgueiro", "Sampaio",
        "Sanches", "Santana", "Siqueira", "Soares", "Subtil", "Tavares",
        "Taveira", "Teixeira", "Teles", "Torres", "Trindade", "Varela",
        "Vargas", "Vasconcelos", "Vasques", "Veiga", "Veloso", "Vidal",
        "Vieira", "Vilela", "Xavier", "Ximenes", "Xisco", "Zagalo", "Zanette", "Zaganelli"
];

function randomizar_lista(lista){
    let aux = lista[Math.floor(Math.random() * lista.length)];
    // console.log(aux);
    return aux;
};
function randomizar_inteiro(minimo, maximo){
    return Math.floor(Math.random() * (maximo - minimo) + minimo);
};
function randomizar_data(){
    let ano = randomizar_inteiro(1960, 2100);
    let mes = randomizar_inteiro(1,12);
    let dia = 0;
    let maximo = 0;
    switch(mes){
        case 1: maximo = 31; break;
        case 2: maximo = randomizar_inteiro(28, 29); break;
        case 3: maximo = 31; break;
        case 4: maximo = 30; break;
        case 5: maximo = 31; break;
        case 6: maximo = 30; break;
        case 7: maximo = 31; break;
        case 8: maximo = 31; break;
        case 9: maximo = 30; break;
        case 10: maximo = 31; break;
        case 11: maximo = 30; break;
        case 12: maximo = 31; break;
    }
    dia = randomizar_inteiro(1, maximo);

    dia_inteiro = dia;
    mes_inteiro = mes;

    if(dia <= 9){ dia = '0'+String(dia); }
    if(mes <= 9){ mes = '0'+String(mes); }

    representacao = dia+'/'+mes+'/'+ano;
    
    return representacao;
}

function randomizar_data_nascimento(){
    let ano = randomizar_inteiro(1960, 2100);
    let mes = randomizar_inteiro(1,12);
    let dia = 0;
    let maximo = 0;
    switch(mes){
        case 1: maximo = 31; break;
        case 2: maximo = randomizar_inteiro(28, 29); break;
        case 3: maximo = 31; break;
        case 4: maximo = 30; break;
        case 5: maximo = 31; break;
        case 6: maximo = 30; break;
        case 7: maximo = 31; break;
        case 8: maximo = 31; break;
        case 9: maximo = 30; break;
        case 10: maximo = 31; break;
        case 11: maximo = 30; break;
        case 12: maximo = 31; break;
    }
    dia = randomizar_inteiro(1, maximo);

    dia_inteiro = dia;
    mes_inteiro = mes;

    if(dia <= 9){ dia = '0'+String(dia); }
    if(mes <= 9){ mes = '0'+String(mes); }

    representacao = dia+'/'+mes+'/'+ano;
    
    return [ representacao, dia_inteiro, mes_inteiro, ano ];
};
function randomizar_nacionalidade(){
    let nacionalidades = [
            "South African", "German", "Argentine", "Australian", "Belgium",	
            "Bolivian",	"Brazilian",  "Canadian", "Chilean", "Chinese",	
            "Colombian", "Korean", "Ecuadorian", "Spanish", "American",	
            "Dannish", "Fins ou Finnish",  "French", "Greek", "Indian",
            "English ou British", "Israeli", "Italian", "Japanese",
            "Mexican", "Norwegian", "Paraguayan", "Peruvian", "Portugues",
            "Russian", "Swiss", "Uruguayan", "Venezuelan", "Persian / Iranian",
            "Iraqi", "Egyptian", "Lebanese", "Turkish", "Pakistani",
            "Syrian", "Thai", "Vietnamese", "Costa Rican"
    ];
    return randomizar_lista(nacionalidades);
};
function randomizar_email(nome){
    let tipo = [
        '@gmail.com',
        '@outlook.com',
        '@outlook.com.br',
        '@hotmail.com',
        '@yahoo.com',
        '@mail.com'
    ];
    return nome.replace(/\s/igm , '-')+randomizar_lista(tipo);
};
function randomizar_status(){
    let tipo = randomizar_lista([ 'Occupied', 'Unoccupied', 'Maintenance', 'Reservated']);
    // console.log(tipo);    
    return tipo;
};
function randomizar_apartamento_tipo(){
    let tipo = [ 'Duble', 'Double', 'Single', 'Single', 'Luxe', 'Master', 'Presidential'];
    return randomizar_lista(tipo);
};
function randomizar_nomes(){
    return randomizar_lista(nomes)+' '+randomizar_lista(sobrenomes)+' '+randomizar_lista(sobrenomes);
};
function randomizar_boleano(){
    return Boolean(Math.floor(Math.random() * (2 - 0) + 0));
};
function randomizar_pagamento(){
    let tipo = [ 'Money', 'Card', 'Check'];
    return randomizar_lista(tipo);
};

function geraId (nome){
    return nome.toLowerCase().replace(/\s/igm, '-');
};