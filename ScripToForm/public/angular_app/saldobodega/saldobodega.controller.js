(function(){

  angular.module('invApp')
    .controller('saldoBodegaCtrl', saldoBodegaCtrl);

  saldoBodegaCtrl.$inject = ['invData'];
  function saldoBodegaCtrl(invData){
    var vm = this;
    vm.data = {};

    invData.getSaldos(function(data){
      vm.data.lista = data;
    });

    vm.data.create = true;
    vm.data.detalle = {};
    vm.addSaldo = function(){
      vm.data.create = true;
      vm.data.detalle = {};
    };

    vm.editSaldo = function(detalle){
      vm.data.create = false;
      vm.data.detalle = {};
      vm.data.detalle.id = detalle.id;
      vm.data.detalle.cantidad = detalle.cantidad;
    };

    vm.crearSaldo = function(){
      vm.data.create = false;
      var detalle = angular.copy(vm.data.detalle);

      invData.addSaldos(detalle, function(detalle){
          vm.data.lista.push(detalle);
      });

      vm.data.detalle = {};
    };

    vm.updateSaldo = function(){
      vm.data.create = false;
      var detalle = angular.copy(vm.data.detalle);

      invData.updateSaldo(detalle, function(detalle){
        for(var i = 0; i < vm.data.lista.length; i++){
          if(vm.data.lista[i].id === detalle.id){
            vm.data.lista[i] = detalle;
            break;
          }
        }
      });

      vm.data.detalle = {};
    };

    vm.deleteSaldo = function(id){
      invData.deleteSaldos(id, function(data){
        for(var i = 0; i < vm.data.lista.length; i++){
          if(vm.data.lista[i].id === id){
            vm.data.lista.splice(i, 1);
            break;
          }
        }
      });
    };

  }

})();
