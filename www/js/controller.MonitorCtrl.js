angular.module('starter')

.controller('MonitorCtrl', function($scope, $state, $ionicViewSwitcher){
  
  $scope.navigate = function () {
    $ionicViewSwitcher.nextDirection('back');
    $state.go('app.home');
  }
  
})