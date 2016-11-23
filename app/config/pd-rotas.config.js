/**
 * Created by bru9isk on 19/11/16.
 */
angular.module('pdApp')
    .config(config);

config.$inject = ['$stateProvider'];

function config($stateProvider) {

    var visualizarBairro = {
        name: 'visualizarBairro',
        url: '/visualizar-bairro',
        params: {
            linha: null
        },
        templateUrl: 'app/views/bairro/visualizar-bairro.html',
        resolve: {
            carregarController: function ($ocLazyLoad) {
                return $ocLazyLoad.load('app/views/bairro/visualizar-bairro.controller.js');
            }
        }
    };

    var pesquisaCarro = {
        name: 'pesquisaCarro',
        url: '/pesquisa-carro',
        templateUrl: 'app/views/carro/pesquisa-carro.html',
        resolve: {
            carregarController: function ($ocLazyLoad) {
                return $ocLazyLoad.load('app/views/carro/pesquisa-carro.controller.js');
            }
        }
    };

    $stateProvider
        .state('pesquisaCarro', pesquisaCarro)
        .state('visualizarBairro', visualizarBairro)
}
