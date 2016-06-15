angular.module('starter')

.controller('GeneralReminderCtrl', function($scope, $ionicPopup, IonicClosePopupService, $ionicViewSwitcher, $filter, $cordovaLocalNotification, $ionicPlatform){

  $scope.genReminderObj = {};
  
  $scope.genReminderObj.MinDate = $filter('date')($scope.currentDate, "yyyy-MM-dd");
  
  $scope.showConfirm = function () {
      
      var confirmPopup = $ionicPopup.confirm({
        title: 'Save General Reminder',
        template: 'Are you sure?',
        buttons: [
          { text: '<i class="icon ion-close-circled"></i>',
            onTap: function(e) { return false; }
          },
          { text: '<i class="icon ion-checkmark-circled""></i>',
            onTap: function(e) { 
              $scope.addGeneralReminder();
              $ionicViewSwitcher.nextDirection('back'); 
              $scope.appGoBack(); 
            }
          }
        ]
      });
      
      IonicClosePopupService.register(confirmPopup);
  };
  
  $ionicPlatform.ready(function(){
    
    $scope.addGeneralReminder = function(){
     
      $cordovaLocalNotification.add({
        id: "12345",
        date: $scope.getReminderDateTime($scope.genReminderObj.Date, $scope.genReminderObj.Time),
        message: $scope.genReminderObj.Msg,
        title: $scope.genReminderObj.Name,
        autoCancel: true
      }).then(function () {
        console.log("General Reminder is Set.");
      });
      
    }
    
  });
  
})