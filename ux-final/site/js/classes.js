

class Atendente{
    constructor(){
        this.nome = randomizar_nomes(); 
    }
}
class Pessoa{
    constructor(numero){
        this.nome = randomizar_nomes();
        let data = randomizar_data_nascimento();
        this.data_nascimento = data[0];
        this.dia =  data[1];
        this.mes =  data[2];
        this.ano =  data[3];
        this.email = randomizar_email(this.nome);
        this.nacionalidade = randomizar_nacionalidade();
        this.numero = numero;
        this.no_apartemento = randomizar_boleano();
        this.pagamento = randomizar_pagamento();
        let data_repr =  randomizar_data_nascimento();
        this.data_entrada = data_repr[0]; 
        this.data_saida = (data_repr[1]+randomizar_inteiro(1, 10))+'/'+
                            (data_repr[2]+randomizar_inteiro(1, 5))+'/'+
                            (data_repr[3]+randomizar_inteiro(1, 100));
        
    };
    setStatus(){
        if(this.no_apartemento == false){
            this.no_apartemento = true;
        }
        else{
            this.no_apartemento = false;
        }
    };
}
class Apartemento{
    constructor(numero, maximo){
        this.numero = numero;
        this.tipo = randomizar_apartamento_tipo();
        this.status = randomizar_status();
        
        if(this.status == 'Occupied' || this.status == 'Reservated'){
            this.dono = new Pessoa(numero);
        }
        this.quartos = 0;
        this.icone = '';

        switch(this.status){
            case 'Occupied':
                this.icone = 'fas fa-lock';
            break;
            case 'Unoccupied':
                this.icone = 'fas fa-lock-open';
            break;
            case 'Reservated':
                this.icone = 'fas fa-suitcase-rolling" aria-hidden="true"';
            break;
            case 'Maintenance':
                this.icone = 'fas fa-screwdriver';
            break;
        }

        switch(this.tipo){
            case 'Single': 
                this.quartos = [0, 1]; 
                this.tamanho_quarto = 'Small'; 
                
            break;
            case 'Double': 
                this.quartos = [0, 1, 2]; 
                this.tamanho_quarto = 'Medium'; 
                
            break;
            case 'Luxe': 
                this.quartos = [0, 1, 2]; 
                this.tamanho_quarto = 'Big';
                
            break;
            case 'Master': 
                this.quartos = [0, 1, 2, 3]; 
                this.tamanho_quarto = 'Large'; 
                
            break;
            case 'Presidential': 
                this.quartos = [0, 1, 2, 3, 4]; 
                this.tamanho_quarto = 'Large'; 
                
            break;
        }
    }
    setStatus(status){
        if(this.status != 'Occupied'){
            this.dono = undefined;
        }
        else{
            this.dono = new Pessoa(numero);    
        }
        this.status = status;
    }
}

class Mensagem{
    constructor(pessoa){
        this.usuario = pessoa;
        let ipsum = new LoremIpsum();
        this.mensagem = ipsum.paragraph();
    }
}

class Food{
    constructor(){
       

        let descricoes = [
        "It's a bit different for us Brazilians. The drink has the blend of lightly roasted arabic bean, cardamom and saffron that are ground and cooked. The coffee is cooked and served hot in small cups, maintaining the right temperature to be served.",

        "Boiled with spices and often peppers added, the Dungaw / Chickpea is part of the traditional local meal. It's like our rice here in Brazil.",
        
        "It is a type of sweet dough, served at breakfast, dinner or as a dessert. The recipe takes eggs and spices such as cardamom and raisins and saffron. A very original dish from the Emirates.",
        
        "The traditional pancake of the Emirates carries flour, eggs, sugar and spices, like cardamom. The yellow color is thanks to the pinch of saffron. The dish is served with date syrup.",
        
        "A staple in the diet of the Emirates, there are more than 40 varieties of dates, which are served traditionally at the beginning of the meal.",
        
        "Khamir, is the Arabic name for what we know as yeast. It is a type of bread served at breakfast with fresh cheese. The recipe is a mixture of yeast, flour, milk powder. The bread is sprinkled with sesame seeds and roasted until roasted.",
        
        "Very common on tables in Dubai, the Machboos is a dish that can be done in many ways. With rice, some recipes carry meat, other chicken or fish. It is seasoned with spices such as cardamom, cloves, cinnamon, dried lemon, raisins and yellow lentils.",
        
        "The dish consists of layers of fine bread, like the Syrian breads we usually see in Brazil. On the layers of bread is placed a mixture of meat and vegetables well cooked, seasoned, resulting in a stew.",
        
        "It is a stew of seasonal vegetables and meat, chicken or fish. Served most often with cooked white rice.",
        
        "Being located along the coast, the Emirates are known for their fish. In this dish, small local fish are seasoned and prepared whole. These fish are served with sweet caramel onions and yellow rice. The taste of the salty mixes with the sweet, in a different experience for the palate.",
        
        "It is one of the most common sweets of the Emirates. It is a fried dumpling bathed in ghee, a type of butter made from cow's milk or buffalo, served with date syrup. Served for breakfast or dessert."
        ];
        let pratos = [ "Gahwa Arabia", 
        "Nikhee or Dungaw (chickpeas)", 
        "Balalit (balalete)", 
        "Chabab", 
        "Dates", 
        "Khamir",
        "Machboos", 
        "Fareeth", 
        "Saluna", 
        "Mhammar",
        "Ligamat" ];
        let imagens = [
            'https://www.blueabaya.com/wp-content/uploads/2011/09/21-177-post/arabic-coffee-dallah-finja-dates-1-1.jpg',
            'https://cdn.shortpixel.ai/client/q_glossy,ret_img/http://www.etcintercambio.com.br/novosite/wp-content/uploads/2017/06/comida-arabe-para-banquetes-y-eventos-822201-mco20304186341_052015-f-650x433-650x400.jpg',
            'https://paraondefor.com.br/wp-content/uploads/2019/01/iStock-864457604-1180x585.jpg',
            'https://i.ytimg.com/vi/GPxu6rGzQig/maxresdefault.jpg',
            'https://www.bestturkishfood.com/content/images/thumbs/0003792_medjool-dates-xl_480.jpeg',
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT_ZgnlhJj7z909gfpR79a4HVj9meCiiq4LC2zMRncSrTXtEmK',
            'https://smccudubai.files.wordpress.com/2016/08/img_4828.jpg',
            'https://spguia.melhoresdestinos.com.br/system/fotos_comunidade/fotos/4234/show/dubai.jpg',
            'https://www.cityshor.com/uploads/article/09_2014/1410441770_1.jpg',
            'https://tasteofmaroc.com/wp-content/uploads/2017/08/lham-mhammar-edit-740x555.jpg',
            'https://www.tastesafari.co.ke/wp-content/uploads/2014/08/Emirati-ligamat-640x640.jpg'
        ];
        let aux = Math.floor(Math.random() * pratos.length);
        this.prato = pratos[aux];
        this.descricao = descricoes[aux];
        this.imagem = imagens[aux];
        this.preco = (Math.random() * Math.floor(Math.random() * 200)).toFixed(2);
    }
}

class Service{
    constructor(pessoa){
        let tipo = [
            'Food',
            'Laundry service',
            'Rent of Clothes',
            'Academy',
            'Swimming pool - indoor',
            'Meeting rooms and boardrooms',
            'Car Rental',
            'Bicycle Rental',
            'Tickets',
            'Excursion'
        ];
        this.servico = randomizar_lista(tipo);
        this.preco = (Math.random() * (Math.random() * 1000)).toFixed(2);
        if(this.servico == 'Food'){
            this.comida = new Food();
        }
        this.pessoa = pessoa;
    }
}