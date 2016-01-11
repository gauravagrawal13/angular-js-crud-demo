var app = angular.module("myApp", ['ngSanitize', 'ngCsv']);
app.controller("GetUsers", function ($scope, $http) {

//Reset Submit Form
	$scope.resetForm = function(){
		$scope.name = '';
		$scope.city = '';
	}
	
//Reset Filters
	$scope.resetFilter = function(){
		$scope.searchString.id = '';
		$scope.searchString.name = '';
		$scope.searchString.city = '';
	}
	
   $scope.get = function() {
	   // this is where the JSON from api.php is consumed
    $http.get('http://'+window.location.hostname+'/angular-demo/action/get-data.php').
        success(function(data) {
            // here the data from the get-data is assigned to a variable named users
            $scope.users = data;
        });
	}
        
    //Post request to Insert record into the database.
    $scope.insert = function () {
 
            var request = $http({
                method: "post",
                url: 'http://'+window.location.hostname+'/angular-demo/action/insert.php',
                data: {
                    name: $scope.name,
                    city: $scope.city
                },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    $scope.responseMessage = "Inserted Successfuly !";
    $scope.alertType = "success";
    $scope.resetForm();
    $scope.get();
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    $scope.responseMessage = "Some Error Occured";
    $scope.alertType = "danger";
  });
    }
    
            
    //Post request to Delete record from database.    
    $scope.remove = function ($id) {
 
            var request = $http({
                method: "post",
                url: 'http://'+window.location.hostname+'/angular-demo/action/remove.php',
                data: {
                    id: $id
                },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    
    $scope.responseMessage = "Deleted Successfuly!";
    $scope.alertType = "danger";
    $scope.get();
    
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    $scope.responseMessage = "Some Error Occured";
    $scope.alertType = "danger";
  });
    }    
    
    //Post request to Update record in database.
     $scope.update = function ($id,$name,$city) {
 
            var request = $http({
                method: "post",
                url: 'http://'+window.location.hostname+'/angular-demo/action/update.php',
                data: {
                    id: $id,
                    name: $name,
                    city: $city
                },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    
    $scope.responseMessage = "Updated Successfuly!";
    $scope.alertType = "success";
   
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    $scope.responseMessage = "Some Error Occured";
    $scope.alertType = "danger";
  });
    }    

});
