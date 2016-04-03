(function(){

  angular.module('invApp')
    .controller('saldoBodegaCtrl', saldoBodegaCtrl);

  saldoBodegaCtrl.$inject = ['invData'];
  function saldoBodegaCtrl(invData){
    var vm = this;

    vm.data = {};
    vm.data.create = true;
    vm.data.saldobodegas = invData.getSaldos();

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
