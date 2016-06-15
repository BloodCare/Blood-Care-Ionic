angular.module('starter')

.controller('EditMedicineIntakeCtrl', function($scope, $stateParams, $firebaseArray, $firebaseObject, IonicClosePopupService, $ionicPopup, $filter, $ionicViewSwitcher){
  
  var medsPopup;
  var confirmPopup;
  
  $scope.medicineIntakeObject.MinDate = $filter('date')($scope.minimunDate, "yyyy-MM-dd");
  $scope.medicineIntakeObject.MaxDate = $filter('date')($scope.currentDate, "yyyy-MM-dd");
  
  var monitorItemRef = new Firebase("https://blood-care-ionic.firebaseio.com/monitor/" + $stateParams.key);
  $scope.monitorItem = $firebaseObject(monitorItemRef);
  $scope.monitorItem.$loaded()
  .then(function(record) {
    $scope.medicineIntakeObject.title = record.title;
    $scope.medicineIntakeObject.name = record.name;
    $scope.medicineIntakeObject.notes = record.notes;
    $scope.medicineIntakeObject.value = record.value;
    $scope.medicineIntakeObject.unit = record.unit;
    $scope.medicineIntakeObject.state = record.state;
    $scope.medicineIntakeObject.date = new Date((new Date(record.date)).getFullYear(), (new Date(record.date)).getMonth(), (new Date(record.date)).getDate());
    $scope.medicineIntakeObject.time = new Date(1970, 0, 1, (new Date(record.time)).getHours(), (new Date(record.time)).getMinutes(), 0);
  });
  
  $scope.showMeds = function () {
      
     medsPopup = $ionicPopup.show({
        title: 'Select Medicine',
        templateUrl: 'medicine-popup.html',
        scope: $scope,
         buttons: [
          { text: 'Cancel',
            onTap: function(e) { return false; }
          },
        ]
      });
      
      IonicClosePopupService.register(medsPopup);
    };
  
  $scope.closeMeds = function (name, unit) {
    $scope.medicineIntakeObject.name = name;
    $scope.medicineIntakeObject.unit = unit;
    medsPopup.close();
  }
  
  $scope.showConfirm = function () {
     
       confirmPopup = $ionicPopup.confirm({
          title: 'Save Medicine Intake',
          template: 'Are you sure?',
          buttons: [
            { text: '<i class="icon ion-close-circled"></i>',
              onTap: function(e) { return false; }
            },
            { text: '<i class="icon ion-checkmark-circled""></i>',
              onTap: function(e) {
                   $scope.monitorItem.$loaded()
                    .then(function(record) {
                      record.title = $scope.medicineIntakeObject.title;
                      record.name = $scope.medicineIntakeObject.name;
                      record.notes = $scope.medicineIntakeObject.notes;
                      record.value = $scope.medicineIntakeObject.value;
                      record.unit = $scope.medicineIntakeObject.unit;
                      record.state = $scope.medicineIntakeObject.state;
                      record.date = $filter('date')(new Date($scope.medicineIntakeObject.date), "yyyy-MM-dd");
                      record.time = $filter('date')(new Date($scope.medicineIntakeObject.time), "yyyy-MM-dd HH:mm");
                      $scope.monitorItem.$save();
                    });
                  $ionicViewSwitcher.nextDirection('back'); $scope.appGoBack();
              }
            }
          ]
        });

      IonicClosePopupService.register(confirmPopup);
  };
  
})