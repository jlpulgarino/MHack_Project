(function(){

  angular.module('invApp')
    .controller('saldoBodegaCtrl', saldoBodegaCtrl);

  saldoBodegaCtrl.$inject = [];
  function saldoBodegaCtrl(){
    var vm = this;

    vm.data = {};
    vm.data.create = true;
    vm.data.saldobodegas = [
      {
        "id": 1,
        "nombre": "Bodega 1"
      },
      {
        "id": 2,
        "nombre": "Bodega 2"
      }
    ];

    vm.data.saldobodega = {};

    vm.editSaldoBodega = function(saldobodega){
      vm.data.create = false;
      vm.data.saldobodega = saldobodega;
    };

    vm.addSaldoBodega = function(saldobodega){
      vm.data.create = true;
      vm.data.saldobodega = {};
    };

    vm.removeSaldoBodega = function(saldobodega){

    };

  }

})();
