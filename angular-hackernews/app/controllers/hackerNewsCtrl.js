myApp.controller('HackerNewsController', function($scope, $http) {
    $scope.items = [];
    $scope.busy = false;
    $scope.reachLast = false;
    $scope.range = 50,
    $scope.page = 0;

    $scope.nextPage = function() {
        if ($scope.reachLast) return false;
        if ($scope.busy) return false;

        $http.get('http://hn.algolia.com/api/v1/search_by_date?tags=story&page='+$scope.page+'&hitsPerPage='+$scope.range).then(function(value) {
            $scope.items = $scope.items.concat(value.data.hits);

            //console.log(value.data);

            if($scope.page === value.data.nbPages) {
                $scope.reachLast = true;
            } else {
                $scope.page = $scope.page + 1;
            }
            
            $scope.busy = false;
        });
    };
});
