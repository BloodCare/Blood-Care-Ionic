angular.module('starter')

.controller('ProfileCtrl', function($scope, $filter, $ionicPopup, IonicClosePopupService, $ionicViewSwitcher){
   
   $scope.profileObject.MinDate = $filter('date')($scope.minimunDate, "yyyy-MM-dd");
   $scope.profileObject.MaxDate = $filter('date')($scope.currentDate, "yyyy-MM-dd");
    
    $scope.showConfirm = function () {
      
      var confirmPopup = $ionicPopup.confirm({
        title: 'Save Profile',
        template: 'Are you sure?',
        buttons: [
          { text: '<i class="icon ion-close-circled"></i>',
            onTap: function(e) { return false; }
          },
          { text: '<i class="icon ion-checkmark-circled""></i>',
            onTap: function(e) { $ionicViewSwitcher.nextDirection('back'); $scope.appGoBack(); }
          }
        ]
      });
      
      IonicClosePopupService.register(confirmPopup);
    };
    
})
