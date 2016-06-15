angular.module('starter')

.controller('WorkoutTypeCtrl', function($scope, IonicClosePopupService, $ionicPopup){

  var addWorkoutTypePopup;
  var editWorkoutTypePopup;
  var deleteWorkoutTypePopup;
  
  $scope.showAddWorkoutType = function () {
      
      $scope.phyWorkoutObject.name = "";
      
     addWorkoutTypePopup = $ionicPopup.show({
        title: 'Add Workout Type',
        templateUrl: 'add-workoutType-popup.html',
        scope: $scope,
        buttons: [
          { text: '<i class="icon ion-close-circled"></i>',
            onTap: function(e) { 
              $scope.loadDefaultWorkoutTypes();
              return false; 
            }
          },
          { text: '<i class="icon ion-checkmark-circled""></i>',
            onTap: function(e) { 
              if (!$scope.phyWorkoutObject.name) {
                e.preventDefault();
              } else {
                $scope.workoutTypes.$add({
                  name: $scope.phyWorkoutObject.name
                });
                return false;
              }
            }
          }
        ]
      });
      
      IonicClosePopupService.register(addWorkoutTypePopup);
    };
    
    $scope.showEditWorkoutType = function (item) {
      
      $scope.phyWorkoutObject.name = item.name;
      
     editWorkoutTypePopup = $ionicPopup.show({
        title: 'Edit Workout Type',
        templateUrl: 'edit-workoutType-popup.html',
        scope: $scope,
        buttons: [
          { text: '<i class="icon ion-close-circled"></i>',
            onTap: function(e) { 
              $scope.loadDefaultWorkoutTypes();
              return false; 
            }
          },
          { text: '<i class="icon ion-checkmark-circled""></i>',
            onTap: function(e) { 
              if (!$scope.phyWorkoutObject.name) {
                e.preventDefault();
              } else {
                item.name = $scope.phyWorkoutObject.name;
                $scope.workoutTypes.$save(item);
                return false;
              }
            }
          }
        ]
      });
      
      IonicClosePopupService.register(editWorkoutTypePopup);
    };
    
    $scope.showDeleteWorkoutType = function (item) {
      
      $scope.phyWorkoutObject.name = item.name;
      
     deleteWorkoutTypePopup = $ionicPopup.show({
        title: 'Delete Workout Type',
        templateUrl: 'delete-workoutType-popup.html',
        scope: $scope,
        buttons: [
          { text: '<i class="icon ion-close-circled"></i>',
            onTap: function(e) { return false; }
          },
          { text: '<i class="icon ion-checkmark-circled""></i>',
            onTap: function(e) { 
                $scope.workoutTypes.$remove(item);
                $scope.loadDefaultWorkoutTypes();
            }
          }
        ]
      });
      
      IonicClosePopupService.register(deleteWorkoutTypePopup);
    };
    
})