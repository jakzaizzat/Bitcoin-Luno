angular.module('myApp', [])
    .controller('myAppController', function ($scope, $http, $window) {

        $scope.calculateProfit = function () {
            $scope.baseUrl2 = 'https://angularjs.org/greet.php';
            $scope.baseUrl = 'https://api.mybitx.com/api/1/ticker';


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
                .then(function (res) {
                    console.log(res.json());
                    $window.localStorage.setItem('btc', $scope.userBtc);
                    $window.localStorage.setItem('myr', $scope.userMyr);
                    $scope.userAsset = $scope.userBtc * res.data.ask;
                    $scope.userProfit = $scope.userAsset - $scope.userMyr;
                    $scope.showCard = true;
                })
                .catch(function (err) {
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