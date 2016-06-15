angular.module('starter')

.controller('HomeCtrl', function($scope, $ionicSlideBoxDelegate){
    
  $scope.navSlide = function (index) {
    $ionicSlideBoxDelegate.slide(index, 500);
  }
  
})