/**
 * Created by bru9isk on 19/11/16.
 */
angular.module('pdApp')
    .config(config);

config.$inject = ['$stateProvider'];

function config($stateProvider) {

    var cadastroBairro = {
        name: 'cadastroBairro',
        url: '/cadastro-bairro',
        templateUrl: 'app/views/bairro/index-bairro.html',
        resolve: {
            carregarController: function ($ocLazyLoad) {
                return $ocLazyLoad.load('app/views/bairro/cadastro-bairro.controller.js');
            }
        }
    };

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

    $stateProvider
        .state('cadastroBairro', cadastroBairro)
        .state('visualizarBairro', visualizarBairro)
}
