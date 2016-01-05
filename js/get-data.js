function GetUsers($scope, $http) {
    // this is where the JSON from api.php is consumed
    $http.get('http://localhost/angular-demo/action/get-data.php').
        success(function(data) {
            // here the data from the get-data is assigned to a variable named users
            $scope.users = data;
        });
        
            
    //Post request to Delete record from database.    
    $scope.remove = function ($id) {
 
            var request = $http({
                method: "post",
                url: "http://localhost/angular-demo/action/remove.php",
                data: {
                    id: $id
                },
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
            }).then(function successCallback(response) {
    // this callback will be called asynchronously
    // when the response is available
    
    $scope.responseMessage = "Deleted Successfuly!";
    $scope.alertType = "danger";
    
  }, function errorCallback(response) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
    $scope.responseMessage = "Some Error Occured";
  });
    }    
    
    //Post request to Update record in database.
     $scope.update = function ($id,$name,$city) {
 
            var request = $http({
                method: "post",
                url: "http://localhost/angular-demo/action/update.php",
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
  });
    }    
}
