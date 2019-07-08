angular.module('EagleStore', []);
angular.module('EagleStore').controller('EagleStoreCtrl', ($scope) => {
    $scope.data = new Date();
    $scope.hora_atual = $scope.data.getHours();
    $scope.minuto_atual = $scope.data.getMinutes();
    $scope.segundo_atual = $scope.data.getSeconds();
    
    $scope.titulo = "Eagle Store";
    $scope.horas = $scope.hora_atual+':'+$scope.minuto_atual; 
    
    $scope.trocaHoras = () => {
        $scope.hora_atual = $scope.data.getHours();
        $scope.minuto_atual = $scope.data.getMinutes();
        $scope.segundo_atual = $scope.data.getSeconds();       
        $scope.horas = $scope.hora_atual+':'+$scope.minuto_atual; 
        console.log('clicado horas');
                
    };

    $scope.remove = (categoria) =>{
        return categoria.replace(/\s/igm, '-');
    };

    $scope.categorias = [
        'Destaques',
        'Desenvolvimento',
        'Jogos',
        'Social',
        'Produtividade',
        'Utilitários',
        'Foto e Vídeo',
        'Servidor e Nuvem',
        'Segurança',
        'Disposisitvo e IOT',
        'Música e Áudio',
        'Entretenimento',
        'Arte e Design',
        'Finança',
        'Notícias e  Clima',
        'Ciência',
        'Saúde e Fitness',
        'Educação',
        'Personalização',
        'Livros e Referências'
    ];
});