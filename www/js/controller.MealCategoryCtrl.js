angular.module('starter')

.controller('MealCategoryCtrl', function($scope, IonicClosePopupService, $ionicPopup){

  var addMealCatPopup;
  var editMealCatPopup;
  var deleteMealCatPopup;
  
   $scope.showAddMealCategory = function () {
      
     $scope.mealIntakeObject.name = "";
      
     addMealCatPopup = $ionicPopup.show({
        title: 'Add Meal Category',
        templateUrl: 'add-mealCategory-popup.html',
        scope: $scope,
        buttons: [
          { text: '<i class="icon ion-close-circled"></i>',
            onTap: function(e) { 
              $scope.loadDefaultMealCategories();
              return false; 
            }
          },
          { text: '<i class="icon ion-checkmark-circled""></i>',
            onTap: function(e) { 
              if (!$scope.mealIntakeObject.name) {
                e.preventDefault();
              } else {
                $scope.mealCategories.$add({
                  name: $scope.mealIntakeObject.name
                });
                return false;
              }
            }
          }
        ]
      });
      
      IonicClosePopupService.register(addMealCatPopup);
    };
    
    $scope.showEditMealCat = function (item) {
      
      $scope.mealIntakeObject.name = item.name;
      
     editMealCatPopup = $ionicPopup.show({
        title: 'Edit Meal Category',
        templateUrl: 'edit-mealCategory-popup.html',
        scope: $scope,
        buttons: [
          { text: '<i class="icon ion-close-circled"></i>',
            onTap: function(e) { 
              $scope.loadDefaultMealCategories();
              return false; 
            }
          },
          { text: '<i class="icon ion-checkmark-circled""></i>',
            onTap: function(e) { 
              if (!$scope.mealIntakeObject.name) {
                e.preventDefault();
              } else {
                item.name = $scope.mealIntakeObject.name;
                $scope.mealCategories.$save(item);
                return false;
              }
            }
          }
        ]
      });
      
      IonicClosePopupService.register(editMealCatPopup);
    };
    
    $scope.showDeleteMealCat = function (item) {
      
      $scope.mealIntakeObject.name = item.name;
      
     deleteMealCatPopup = $ionicPopup.show({
        title: 'Delete Meal Category',
        templateUrl: 'delete-mealCategory-popup.html',
        scope: $scope,
        buttons: [
          { text: '<i class="icon ion-close-circled"></i>',
            onTap: function(e) { return false; }
          },
          { text: '<i class="icon ion-checkmark-circled""></i>',
            onTap: function(e) { 
                $scope.mealCategories.$remove(item);
                $scope.loadDefaultMealCategories();
            }
          }
        ]
      });
      
      IonicClosePopupService.register(deleteMealCatPopup);
    };
    
})