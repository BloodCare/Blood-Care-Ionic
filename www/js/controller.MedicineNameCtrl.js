angular.module('starter')

.controller('MedicineNameCtrl', function($scope, IonicClosePopupService, $ionicPopup){

  var addMedsPopup;
  var editMedsPopup;
  var deleteMedsPopup;
  
  $scope.showAddMeds = function () {
      
      $scope.medicineIntakeObject.name = "";
      $scope.medicineIntakeObject.unit = "";
      
     addMedsPopup = $ionicPopup.show({
        title: 'Add Medicine',
        templateUrl: 'add-medicine-popup.html',
        scope: $scope,
        buttons: [
          { text: '<i class="icon ion-close-circled"></i>',
            onTap: function(e) { 
              $scope.loadDefaultMedicineName();
              return false; 
            }
          },
          { text: '<i class="icon ion-checkmark-circled""></i>',
            onTap: function(e) { 
              
              if (!$scope.medicineIntakeObject.name || !$scope.medicineIntakeObject.unit) {
                e.preventDefault();
              } else {
                $scope.medicineList.$add({
                  name: $scope.medicineIntakeObject.name,
                  unit: $scope.medicineIntakeObject.unit
                });
                return false;
              }
              
            }
          }
        ]
      });
      
      IonicClosePopupService.register(addMedsPopup);
    };
    
    $scope.showEditMeds = function (item) {

      $scope.medicineIntakeObject.name = item.name;
      $scope.medicineIntakeObject.unit = item.unit;
      
     editMedsPopup = $ionicPopup.show({
        title: 'Edit Medicine',
        templateUrl: 'edit-medicine-popup.html',
        scope: $scope,
        buttons: [
          { text: '<i class="icon ion-close-circled"></i>',
            onTap: function(e) { 
              $scope.loadDefaultMedicineName();
              return false; 
            }
          },
          { text: '<i class="icon ion-checkmark-circled""></i>',
            onTap: function(e) { 
              if (!$scope.medicineIntakeObject.name || !$scope.medicineIntakeObject.unit) {
                e.preventDefault();
              } else {
                item.name = $scope.medicineIntakeObject.name;
                item.unit = $scope.medicineIntakeObject.unit;
                $scope.medicineList.$save(item);
                return false;
              }
            }
          }
        ]
      });
      
      IonicClosePopupService.register(editMedsPopup);
    };
  
    $scope.showDeleteMeds = function (item) {
      
      $scope.medicineIntakeObject.name = item.name;
      $scope.medicineIntakeObject.unit = item.unit;
      
     deleteMedsPopup = $ionicPopup.show({
        title: 'Delete Medicine',
        templateUrl: 'delete-medicine-popup.html',
        scope: $scope,
        buttons: [
          { text: '<i class="icon ion-close-circled"></i>',
            onTap: function(e) { return false; }
          },
          { text: '<i class="icon ion-checkmark-circled""></i>',
            onTap: function(e) { 
                $scope.medicineList.$remove(item);
                $scope.loadDefaultMedicineName();
            }
          }
        ]
      });
      
      IonicClosePopupService.register(deleteMedsPopup);
    };
})