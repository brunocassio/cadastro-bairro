/**
 * Created by bru9isk on 19/11/16.
 */
angular.module('pdApp')
    .controller('CadastroBairroController', CadastroBairroController);

function CadastroBairroController($scope, toastr, AlertService) {

    $scope.listaBairros = [];
    $scope.entidade = {};

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
            {name: '', field:'acoes',
                cellTemplate: 'app/template/grid/cell-template.html',
                width: 30}
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
        }
        $scope.listaBairros.push($scope.entidade);
        AlertService.success('Registro salvo com sucesso!');
        limpar();
    }

    function limpar() {
        $scope.entidade = {};
        $scope.bairroForm.$setUntouched();
    }

    function excluir(linha) {
        var index = $scope.listaBairros.indexOf(linha);
        $scope.listaBairros.splice(index, 1);
    }

    function visualizar(linha){

    }

    function editar(linha){

    }
}