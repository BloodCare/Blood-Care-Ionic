angular.module('starter')

.controller('AppointmentCtrl', function($scope, $ionicPopup, IonicClosePopupService, $ionicViewSwitcher, $filter){
  
  $scope.appointmentObj = {};
  
  $scope.appointmentObj.MinDate = $filter('date')($scope.currentDate, "yyyy-MM-dd");
  
  $scope.showConfirm = function () {
      
      var confirmPopup = $ionicPopup.confirm({
        title: 'Save Appointment',
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