var app = angular.module('angularPostPHP', []);
 
app.controller('loginCtrl', function ($scope, $http) {
 
   //Post request to Insert record into the database.
    $scope.login = function () {
 
            var request = $http({
                method: "post",
                url: "http://localhost/angular-demo/action/insert.php",
                data: {
                    name: $scope.name,
                    city: $scope.city
                },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    $scope.responseMessage = "Inserted Successfuly !";
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    $scope.responseMessage = "Some Error Occured";
  });
    }
    
});
