angular.module('starter')

.controller('BloodSugarCtrl', function($scope, $filter, IonicClosePopupService, $ionicPopup, $ionicViewSwitcher, $firebaseArray){
    
    $scope.bloodSugarObject.title = "Blood Sugar";
    $scope.bloodSugarObject.name = "Blood Sugar";
    $scope.bloodSugarObject.notes = "";
    $scope.bloodSugarObject.value = "";
    $scope.bloodSugarObject.MinDate = $filter('date')($scope.minimunDate, "yyyy-MM-dd");
    $scope.bloodSugarObject.MaxDate = $filter('date')($scope.currentDate, "yyyy-MM-dd");
    $scope.bloodSugarObject.date = new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate());
    $scope.bloodSugarObject.time = $scope.getCurrentTime();
    $scope.bloodSugarObject.state = 'editBloodSugar';
    
    var addBloodSugar = function (bloodSugarTitle, bloodSugarName, bloodSugarValue, 
                                  bloodSugarUnit, bloodSugarDate, bloodSugarTime, 
                                  bloodSugarNotes, bloodSugarState) {
    var bsDate = $filter('date')(new Date(bloodSugarDate), "yyyy-MM-dd");
    var bsTime = $filter('date')(new Date(bloodSugarTime), "yyyy-MM-dd HH:mm");
      $scope.monitor.$add({
        title: bloodSugarTitle,
        name: bloodSugarName,
        value: bloodSugarValue,
        unit: bloodSugarUnit,
        date: bsDate,
        time: bsTime,
        notes: bloodSugarNotes,
        state: bloodSugarState
      });
    };
    
    $scope.showConfirm = function () {
      
      var confirmPopup = $ionicPopup.confirm({
        title: 'Save Blood Sugar Details',
        template: 'Are you sure?',
        buttons: [
          { text: '<i class="icon ion-close-circled"></i>',
            onTap: function(e) { return false; }
          },
          { text: '<i class="icon ion-checkmark-circled""></i>',
            onTap: function(e) {
              addBloodSugar($scope.bloodSugarObject.title,
                            $scope.bloodSugarObject.name,
                            $scope.bloodSugarObject.value,
                            $scope.bloodSugarObject.unit,
                            $scope.bloodSugarObject.date,
                            $scope.bloodSugarObject.time,
                            $scope.bloodSugarObject.notes,
                            $scope.bloodSugarObject.state);
              $ionicViewSwitcher.nextDirection('back'); $scope.appGoBack();
            }
          }
        ]
      });
      
      IonicClosePopupService.register(confirmPopup);
  };
    
})
