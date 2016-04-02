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

    return {
      getSaldos: getSaldos
    };
  }

})();
