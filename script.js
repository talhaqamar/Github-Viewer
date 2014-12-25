
 var app = angular.module("c.controllers",[]);
app.controller("MainController",["$scope","$http","$interval",function($scope,$http,$interval)
{
 
  var oncomplete = function(response)
  {
    $scope.user = response.data;
    console.log($scope.user);
  };
    var onError = function(reason)
  {
  $scope.error = reason;
    
  };
  $scope.search = function(username)
  {
     var request = $http.get("https://api.github.com/users/" + username);
 request.then(oncomplete,onError);
  };  
  
  var decrementcountdown = function()
  {
    $scope.countdown  -= 1;
    if($scope.countdown < 1)
    {
    $scope.search($scope.username); 
      
    }
  };
  var startCountdown = function()
  {
    $interval(decrementcountdown,1000,$scope.countdown);
  };
 $scope.countdown = 5;
startCountdown();
}]);
