angular.module('starter')

.controller('EmergencyReminderCtrl', function($scope, $ionicPopup, IonicClosePopupService, $ionicViewSwitcher){
  
  $scope.emrReminderObj = {};
  
  $scope.emrReminderObj.hrsCount = 1;
  $scope.emrReminderObj.minCount = 30;
  
  $scope.increamentHrsCount = function (count) {
    
    if (count === 24) {
      count = count;
    } else {
      count = count + 1;
    }
    
    $scope.emrReminderObj.hrsCount = count;
  }
  
  $scope.increamentMinCount = function (count) {
    
    if (count === 59) {
      count = count;
    } else {
      count = count + 1;
    }
    
    $scope.emrReminderObj.minCount = count;
  }
  
  $scope.decreamentHrsCount = function (count) {
    
    if (count === 0) {
      count = count;
    } else {
      count = count - 1;
    }
    $scope.emrReminderObj.hrsCount = count;
  }
  
  $scope.decreamentMinCount = function (count) {
    
    if (count === 1) {
      count = count;
    } else {
      count = count - 1;
    }
    $scope.emrReminderObj.minCount = count;
  }
  
  $scope.showConfirm = function () {
      
      var confirmPopup = $ionicPopup.confirm({
        title: 'Save Emergency Reminder',
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
