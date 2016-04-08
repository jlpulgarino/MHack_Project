(function() {
  angular.module('invApp')
    .service('invData', invData);

  invData.$inject = ['$http'];
  function invData ($http) {

    /**
     * Bodegas
     */
    var getBodegas = function(callback){
      $http.get('/api/bodega/').then(function(response){
        callback(response.data);
      },
      function(response){//error
        console.log(response);
      });
    };

    var addBodega = function(data, callback){
      $http.post('/api/bodega/', data).then(function(response){
        callback(response.data);
      },
      function(response){//error
        console.log(response);
      });
    };

    var deleteBodega = function(id, callback){
      $http.delete('/api/bodega/' + id).then(function(response){
        callback(response.data);
      },
      function(response){//error
        console.log(response);
      });
    };

    /**
     * Saldos
     */

    var getSaldos = function(callback){
      $http.get('/api/saldo/').then(function(response){
        callback(response.data);
      },
      function(response){//error
        console.log(response);
      });
    };

    var addSaldos = function(data, callback){
      $http.post('/api/saldo/', data).then(function(response){
        callback(response.data);
      },
      function(response){//error
        console.log(response);
      });
    };

    var deleteSaldos = function(id, callback){
      $http.delete('/api/saldo/' + id).then(function(response){
        callback(response.data);
      },
      function(response){//error
        console.log(response);
      });
    };

    return {
      getBodegas: getBodegas,
      addBodega: addBodega,
      deleteBodega: deleteBodega,
      getSaldos: getSaldos,
      addSaldos: addSaldos,
      deleteSaldos: deleteSaldos

    };
  }

})();
