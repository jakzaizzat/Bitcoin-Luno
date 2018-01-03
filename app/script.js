angular.module('myApp', [])
    .controller('myAppController', function($scope, $http, $window) {

        $scope.calculateProfit = function() {
            $scope.baseUrl = 'https://cors-anywhere.herokuapp.com/https://api.mybitx.com/api/1/ticker';

            $http({
                    method: 'GET',
                    url: $scope.baseUrl,
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    params: {
                        pair: 'XBTMYR'
                    }
                })
                .then(function(res) {
                    $window.localStorage.setItem('btc', $scope.userBtc);
                    $window.localStorage.setItem('myr', $scope.userMyr);
                    $scope.currencyBTC = res.data.ask;
                    $scope.userAsset = $scope.userBtc * res.data.ask;
                    $scope.userProfit = $scope.userAsset - $scope.userMyr;
                    $scope.showCard = true;

                    $scope.margin = 100 * (($scope.userAsset - $scope.userMyr) / $scope.userAsset);
                    console.log($scope.margin);
                })
                .catch(function(err) {
                    console.log(err);
                });
        }

        //Initialize
        if ($window.localStorage.getItem('btc') && $window.localStorage.getItem('myr')) {
            $scope.userBtc = JSON.parse($window.localStorage.getItem('btc'));
            $scope.userMyr = JSON.parse($window.localStorage.getItem('myr'));
            $scope.calculateProfit();
        }
        $scope.showCard = false;

    });