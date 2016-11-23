/**
 * Created by bru9isk on 19/11/16.
 */
angular.module('pdApp')
    .controller('CadastroBairroController', CadastroBairroController);

function CadastroBairroController($scope, toastr, $state, AlertService) {

    $scope.listaBairros = [];
    $scope.entidade = {};
    $scope.index = null;

    $scope.salvar = salvar;
    $scope.limpar = limpar;
    $scope.excluir = excluir;
    $scope.editar = editar;
    $scope.visualizar = visualizar;

    $scope.gridOptions = {
        columnDefs: [
            {name: 'Nome do Bairro', field: 'nomeBairro', width: 300},
            {name: 'Nome da Cidade', field:'nomeCidade', width: 300},
            {name: 'Estado', field:'estado', width: 300},
            {name: '', field:'acoes', cellTemplate: 'app/template/grid/cell-template.html'}
        ],
        data:'listaBairros',
        enableColumnsMenus: false
    };

    function salvar() {
        if($scope.bairroForm.$invalid){
            AlertService.error('Formulario Inválido');
            $scope.bairroForm.nomeBairro.$setTouched();
            $scope.bairroForm.nomeCidade.$setTouched();
            $scope.bairroForm.estado.$setTouched();
            return;
        }else if($scope.index === null){
            $scope.listaBairros.push($scope.entidade);
            AlertService.success('Registro salvo com sucesso!');
        }else{
            $scope.listaBairros[$scope.index] = $scope.entidade;
        }

        limpar();
    }

    function limpar() {
        $scope.index = null;
        $scope.entidade = {};
        $scope.bairroForm.$setUntouched();
    }

    function excluir(linha) {
        var index = $scope.listaBairros.indexOf(linha);
        $scope.listaBairros.splice(index, 1);
    }

    function visualizar(linha){
        $state.go('visualizarBairro', {linha: linha})
    }

    function editar(linha){
        $scope.index = $scope.listaBairros.indexOf(linha);

        $scope.entidade = {
            nomeBairro : linha.nomeBairro,
            nomeCidade : linha.nomeCidade,
            estado : linha.estado
        }
    }
}