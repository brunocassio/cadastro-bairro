angular.module('pdApp')
    .service('AlertService', AlertService);

function AlertService(toastr){

    this.success = sucess;
    this.error = error;
    this.info = info;
    this.alert = alert;


    function sucess(mensagem, titulo){
        titulo = titulo || 'ok';
        toastr.success(mensagem, titulo);
    }

    function error(mensagem, titulo){
        titulo = titulo || 'erro';
        toastr.error(mensagem, titulo);
    }

    function info(mensagem, titulo){
        titulo = titulo || 'info';
        toastr.success(mensagem, titulo);
    }

    function alert(mensagem, titulo){
        titulo = titulo || 'Atenção!';
        toastr.success(mensagem, titulo);
    }

}