angular.module('pdApp')
    .controller('VisualizarBairroController', VisualizarBairroController);

function VisualizarBairroController($scope, $state) {

    $scope.bairro = $state.params.linha;
}