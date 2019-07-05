angular.module('ux', []);
angular.module('ux').controller('uxCtrl', ($scope)=>{
    $scope.titulo = "Eagle hotel";
    $scope.subtitulo = "Welcome!";

    $scope.atendente = new Atendente();

    $scope.status_login = "Logout - "+$scope.atendente.nome;

    $scope.apartamentos = [];
    $scope.usuarios = [];

    let quantidade_aps = 600;
    // console.log("****************************************");
    for(let i = 400; i <= quantidade_aps; i++){
        let ap = new Apartemento(i, quantidade_aps);
        // console.log(ap.status);        
        $scope.apartamentos.push(ap);
    }
    // console.log("****************************************");
    $scope.apartamentos.forEach((valor, chave) => {
        if(valor.dono != undefined && valor.status == 'Occupied'){
            $scope.usuarios.push(valor.dono);
        }      
    });

    $scope.geraId = (nome) => {
        return nome.toLowerCase().replace(/\s/igm, '-');
    };

    $scope.chamar_close_and_pay = (id, numero, nome, estado, desligar) =>{
        document.querySelector('#'+geraId(id)+'-'+numero+'').style.display = estado;
        if(desligar == true){
            $scope.close_and_pay(nome);
        }
    };

    $scope.close_and_pay = (nome)=>{
        let parcial_usuarios = [];
        let parcial_apartamentos = [];
        let numero = 0;

        for(let i = 0; i < $scope.usuarios.length; i++){
            if($scope.usuarios[i] != null){
                if($scope.usuarios[i].nome != nome){
                    numero =  $scope.usuarios[i].numero;
                    parcial_usuarios.push($scope.usuarios[i]);
                }
            }            
        }

        for(let i = 0; i < $scope.apartamentos.length; i++){
            if($scope.apartamentos[i] != null){
                if($scope.apartamentos[i].numero != numero){
                    parcial_apartamentos.push($scope.apartamentos[i]);
                }
            }
        }
        $scope.usuarios = parcial_usuarios;
        $scope.apartamentos = parcial_apartamentos;


    };

    $scope.trocaSubtitulo = (subtitulo) =>{
        $scope.subtitulo = subtitulo;
    };

    $scope.trocaSubtituloEAparece = (subtitulo, id)=> {
        $scope.subtitulo = subtitulo;
        let x = document.getElementsByClassName('conteudo');
        for(let i = 0; i < x.length; i++){
            x[i].style.display = 'none';
        }
        document.querySelector('#'+id).style.display = 'block';
    };


    $scope.quantidadeEmManutencao = 0;
    $scope.quantidadeOcupados = 0;
    let parcialQuantidadeOcupados = 0;
    $scope.quantidadeReservados = 0;

    $scope.apartamentos.forEach((valor, chave) => {
        if(valor.status == 'Maintenance'){
            $scope.quantidadeEmManutencao++;
        }
        else if(valor.status == 'Occupied'){
            parcialQuantidadeOcupados++;
        }      
        else if(valor.status = 'Reservated'){
            $scope.quantidadeReservados++;
        }
    });

    $scope.quantidadeOcupados = Math.floor((parcialQuantidadeOcupados / $scope.apartamentos.length) * 100);
    
    $scope.quantidade_mensagens = randomizar_inteiro(1, $scope.usuarios.length);

    $scope.mensagens = [];
    for(let i  = 0; i < $scope.quantidade_mensagens; i++){
        $scope.mensagens.push(new Mensagem(randomizar_lista($scope.usuarios)));
    };
    

    $scope.quantidade_servicos = randomizar_inteiro(1, $scope.usuarios.length);

    $scope.servicos = [];
    for(let i  = 0; i < $scope.quantidade_servicos; i++){
        $scope.servicos.push(new Service(randomizar_lista($scope.usuarios)));
    };
    
    $scope.tipo_servico = [
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
    

    $scope.nacionalidades = [
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

    $scope.modo_pagamento = [ 'Money', 'Card', 'Check'];


    $scope.status_controle_tv  = 'Off';
    $scope.status_controle_tv_volume  = 55;
    $scope.status_controle_tv_chanel  = 12;
    $scope.status_controle_air  = 'Off';
    $scope.status_controle_air_temperature  = 20;

    $scope.status_controle_bedroom_light = 'Off';
    $scope.status_controle_livin_room_light = 'Off';
    $scope.status_controle_kitchen_light = 'Off';
    $scope.status_controle_bathroom_light = 'Off';
    
    
    $scope.usuario =  randomizar_lista($scope.usuarios);
    $scope.status_login_usuario = "User: "+$scope.usuario.nome;
    $scope.mensagem = new Mensagem($scope.usuario);

    $scope.pratos = [];
    for(let i = 0; i < 11; i++){
        $scope.pratos.push(new Food());
    }

    //console.log($scope.pratos);
    
    // console.log($scope.apartamentos);



    $scope.grupo_canais = [
        'ABERTOS',
        'ESPORTES',
        'INFANTIL',
        'CULTURA',
        'FILMES E SÉRIES',
        'NOTÍCIAS',
        'CANAIS PÚBLICOS',
        'VARIEDADES',
        'ADULTO',
        'RÁDIOS',
        'SOUND!',
        'CORTESIA'

    ];

    $scope.canais = [

'29  Assembleia Estadual ou Municipal',
'13  BAND',
'413 BAND HD',
'8   CANÇÃO NOVA',
'376 Cidadania',
'14  CNT',
'28  Comunitário',
'5   GLOBO',
'405 GLOBO HD',
'16  IDEAL TV',
'20  RBI TV',
'18  RCI',
'19  RECORD NEWS',
'17  REDE BRASIL',
'7   REDE RECORD',
'15  REDE TV',
'6   REDE VIDA',
'3   RIT',
'9   SBT',
'11  TV APARECIDA',
'2   TV CULTURA',
'30  Universitário',


'210 BANDSPORTS',
'610 BANDSPORTS HD',
'197 ESPN',
'198 ESPN BRASIL',
'598 ESPN BRASIL HD',
'600 ESPN Extra',
'600 ESPN EXTRA HD',
'597 ESPN HD',
'599 ESPN+',
'203 Esporte Interativo',
'604 Esporte Interativo 2 HD',
'202 Esporte Interativo BR',
'603 Esporte Interativo HD',
'194 FOX SPORTS',
'195 FOX SPORTS 2',
'226 FOX SPORTS 2 HD',
'595 FOX SPORTS HD',
'206 GOLF CHANNEL',
'596 Mosaico ESPN',
'230 PREMIERE',
'634 PREMIERE HD',
'39  SPORTV',
'38  SPORTV 2',
'438 SPORTV 2 HD',
'37  SPORTV 3',
'437 SPORTV 3 HD',
'439 SPORTV HD',


'461 BOOMERANG HD',
'460 CARTOON HD',
'60  CARTOON NETWORK',
'50  DISCOVERY KIDS',
'450 DISCOVERY KIDS HD',
'55  DISNEY CHANNEL',
'455 DISNEY HD',
'459 DISNEY JUNIOR HD',
'53  DISNEY XD',
'56  GLOOB',
'456 GLOOB HD',
'57  NICK',
'457 NICK HD',
'458 NICK JR HD',
'48  TV RÁ-TIM-BUM',
'52  ZOOMOO',


'71  ANIMAL PLANET',
'471 ANIMAL PLANET HD',
'81  ARTE 1',
'157 CINEBRASIL TV',
'70  DISCOVERY',
'470 DISCOVERY HD',
'477 H2',
'76  HISTORY CHANNEL',
'476 HISTORY HD',
'78  NAT GEO',
'479 NAT GEO WILD HD',
'478 NATIONAL GEOGRAPHIC HD',
'473 THEATER HD',
'486 TLC HD',
'487 WORLD HD',


'114 AMC',
'514 AMC HD',
'136 AXN',
'536 AXN HD',
'113 CANAL BRASIL',
'513 CANAL BRASIL HD',
'112 CINEMAX',
'512 CINEMAX HD',
'141 FOX',
'541 FOX HD',
'544 Fox Premium 1',
'545 Fox Premium 2',
'143 FX',
'543 FX HD',
'120 HBO',
'121 HBO 2',
'521 HBO 2 HD',
'124 HBO FAMILY',
'524 HBO FAMILY HD',
'520 HBO HD',
'526 HBO MAX HD',
'122 HBO PLUS',
'522 HBO PLUS HD',
'123 HBO PLUS*E',
'125 HBO SIGNATURE',
'525 HBO SIGNATURE HD',
'126 MAX',
'128 MAX PRIME',
'528 MAX PRIME HD',
'129 MAX PRIME*E',
'127 MAX UP',
'527 MAX UP HD',
'107 MEGAPIX',
'507 MEGAPIX HD',
'517 PARAMOUNT HD',
'137 SONY',
'537 SONY HD',
'110 SPACE',
'510 SPACE HD',
'111 STUDIO UNIVERSAL',
'511 STUDIO UNIVERSAL HD',
'516 Sundance HD',
'142 SYFY',
'542 SYFY HD',
'155 TBS',
'101 TC ACTION',
'501 TC ACTION HD',
'105 TC CULT',
'505 TC CULT HD',
'104 TC FUN',
'504 TC FUN HD',
'103 TC PIPOCA',
'503 TC PIPOCA HD',
'100 TC PREMIUM',
'500 TC PREMIUM HD',
'102 TC TOUCH',
'502 TC TOUCH HD',
'115 TCM',
'108 TNT',
'508 TNT HD',
'140 UNIVERSAL',
'540 UNIVERSAL HD',
'139 WARNER',
'539 WARNER HD',


'171 BANDNEWS',
'571 BANDNEWS HD',
'172 BBC – WORLD',
'173 BLOOMBERG',
'170 CLIMATEMPO',
'174 CNN',
'40  GLOBO NEWS',
'440 GLOBO NEWS HD',


'44  GLOBOSAT',
'444 GLOBOSAT HD',
'138 A&E',
'538 A&E HD',
'160 BIS',
'560 BIS HD',
'158 COMEDY CENTRAL',
'472 DISCOVERY TURBO HD',
'91  E!',
'491 E! HD',
'162 Fish TV',
'492 FOOD NETWORK HD',
'148 FOX LIFE',
'548 FOX LIFE HD',
'41  GNT',
'441 GNT HD',
'485 H&H HD',
'85  HOME & HEALTH',
'149 ID',
'549 ID HD',
'90  LIFETIME',
'490 LIFETIME HD',
'159 MTV',
'559 MTV HD',
'42  MULTISHOW',
'442 MULTISHOW HD',
'35  OFF',
'435 OFF HD',
'161 PLAY TV',
'86  TLC',
'43  VIVA',
'443 VIVA HD',
'191 WOOHOO',


'276 SEX ZONE',
'277 SEX ZONE HD',


'706 Anos 2000',
'716 ANOS 60',
'717 ANOS 70',
'712 ANOS 80',
'718 ANOS 90',
'721 BLACK',
'722 BLUES',
'703 BOSSA NOVA',
'708 DISCO',
'713 ELETRÔNICA',
'725 ESPECIAL',
'714 FESTA',
'704 FORRÓ',
'726 GOSPEL',
'724 HIP HOP',
'729 JAZZ',
'479 JAZZ',
'701 KIDS',
'710 LOUNGE',
'730 Metal',
'702 MPB',
'732 MÚSICA CLÁSSICA',
'711 NEW ROCK',
'705 PAGODE',
'715 Pop Hits',
'720 REGGAE',
'731 Rock Brasil',
'709 ROCK CLÁSSICO',
'723 Românticas',
'728 SAMBA DE RAIZ',
'707 SERTANEJO',
'719 Sertanejo Universitário',
'727 TRILHAS SONORAS',


'25  CANAL NBR',
'23  TV BRASIL',
'22  TV CÂMARA',
'21  TV ESCOLA',
'24  TV JUSTIÇA',
'26  TV SENADO',


'794 BAND FM',
'793 BAND NEWS FM',
'782 BH FM',
'776 CBN',
'779 CBN BH',
'778 CBN BSB',
'777 CBN RJ',
'780 CLUBE DO PARÁ',
'792 CLUBE FM',
'789 ITATIAIA AM-FM',
'783 JOVEM PAN AM',
'784 JOVEM PAN FM',
'796 NATIVA',
'795 RÁDIO BANDEIRANTES',
'785 RÁDIO GAÚCHA',
'787 RADIO GLOBO RJ',
'781 RÁDIO GLOBO SP',
'786 RFI',
'788 TRANSAMÉRICA',
'790 VERDES MARES',


'164 CANAL RURAL',
'34  FUTURA',
'33  JOIAS VIP',
'32  POLISHOP',
'31  SHOPTIME',
'163 TERRA VIVA'

]
    $scope.autal_chanell = '13';


    $scope.mudaCanal = (canal) => {
        $scope.autal_chanell = canal;
    };
});