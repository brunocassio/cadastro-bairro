angular.module('pdApp')
    .controller('IndexController', IndexController);

function IndexController($scope, $state, $rootScope) {

    $rootScope.listaBairros = [];

    $state.go('cadastroBairro');

}