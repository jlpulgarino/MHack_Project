(function() {
  angular.module('invApp')
    .service('invData', invData);

  invData.$inject = ['$http'];
  function invData ($http) {
    var getSaldos = function(){
        /*
        return $http.get('/api/locations?lng=' + lng + '&lat=' + lat + '&maxDistance=200000');
        */
        return [
          {
            "id": 1,
            "nombre": "Bodega 1"
          },
          {
            "id": 3,
            "nombre": "Bodega 2"
          }
        ];
    };


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

    return {
      getBodegas: getBodegas,
      addBodega: addBodega,
      deleteBodega: deleteBodega,
      getSaldos: getSaldos
    };
  }

})();
