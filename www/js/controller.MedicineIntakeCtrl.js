angular.module('starter')

.controller('MedicineIntakeCtrl', function($scope, IonicClosePopupService, $ionicPopup, $filter, $ionicViewSwitcher, $firebaseArray){

  var medsPopup;
  var confirmPopup;

  $scope.medicineIntakeObject.title = "Medicine Intake";
  $scope.medicineIntakeObject.notes = "";
  $scope.medicineIntakeObject.value = "";
  $scope.medicineIntakeObject.MinDate = $filter('date')($scope.minimunDate, "yyyy-MM-dd");
  $scope.medicineIntakeObject.MaxDate = $filter('date')($scope.currentDate, "yyyy-MM-dd");
  $scope.medicineIntakeObject.date = new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate());
  $scope.medicineIntakeObject.time = $scope.getCurrentTime();
  $scope.medicineIntakeObject.state = 'editMedicineIntake';
  
  var addMedicineIntake = function (medicineTitle, medicineName, medicineValue, medicineUnit, medicineDate, medicineTime, medicineNotes, medicineState) {
    var medsDate = $filter('date')(new Date(medicineDate), "yyyy-MM-dd");
    var medsTime = $filter('date')(new Date(medicineTime), "yyyy-MM-dd HH:mm");
    $scope.monitor.$add({
      title: medicineTitle,
      name: medicineName,
      value: medicineValue,
      unit: medicineUnit,
      date: medsDate,
      time: medsTime,
      notes: medicineNotes,
      state: medicineState
    });
  };
  
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
                addMedicineIntake($scope.medicineIntakeObject.title,
                                  $scope.medicineIntakeObject.name,
                                  $scope.medicineIntakeObject.value,
                                  $scope.medicineIntakeObject.unit,
                                  $scope.medicineIntakeObject.date,
                                  $scope.medicineIntakeObject.time,
                                  $scope.medicineIntakeObject.notes,
                                  $scope.medicineIntakeObject.state);
                $ionicViewSwitcher.nextDirection('back'); $scope.appGoBack();
              }
            }
          ]
        });

      IonicClosePopupService.register(confirmPopup);
  };
  
})
