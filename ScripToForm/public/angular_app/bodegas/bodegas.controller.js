(function(){

  angular.module('invApp')
    .controller('bodegaCtrl', bodegaCtrl);

  bodegaCtrl.$inject = ['invData'];
  function bodegaCtrl(invData){
    var vm = this;
    vm.data = {};

    invData.getBodegas(function(data){
      vm.data.bodegas = data;
    });

    vm.data.create = true;
    vm.data.bodega = {};
    vm.addBodega = function(){
      vm.data.create = true;
      vm.data.bodega = {};
    };

    vm.editBodega = function(bodega){
      vm.data.create = false;
      vm.data.bodega = {};
      vm.data.bodega.id = bodega.id;
      vm.data.bodega.nombre = bodega.nombre;
    };

    vm.crearBodega = function(){
      vm.data.create = false;
      var bodega = angular.copy(vm.data.bodega);

      invData.addBodega(bodega, function(data){
          vm.data.bodegas.push(bodega);
      });

      vm.data.bodega = {};
    };

    vm.deleteBodega = function(id){
      invData.deleteBodega(id, function(data){
        for(var i = 0; i < vm.data.bodegas.length; i++){
          if(vm.data.bodegas[i].id === id){
            vm.data.bodegas.splice(i, 1);
            break;
          }
        }
      });
    };


  }

})();
