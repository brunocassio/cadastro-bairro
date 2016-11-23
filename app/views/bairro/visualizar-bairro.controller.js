angular.module('pdApp')
    .controller('VisualizarBairroController', VisualizarBairroController);

function VisualizarBairroController($scope, $stateParams, $state) {

    $scope.voltar = voltar;
    $scope.bairro = $stateParams.linha;

    function voltar() {
        $state.go('cadastroBairro');
    }
}