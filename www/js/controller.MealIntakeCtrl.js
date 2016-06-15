angular.module('starter')

.controller('MealIntakeCtrl', function($scope, IonicClosePopupService, $ionicPopup, $filter, $ionicViewSwitcher, $firebaseArray){
  
  var mealPopup;
  
  $scope.mealIntakeObject.title = "Meal Intake";
  $scope.mealIntakeObject.notes = "";
  $scope.mealIntakeObject.value = "";
  $scope.mealIntakeObject.MinDate = $filter('date')($scope.minimunDate, "yyyy-MM-dd");
  $scope.mealIntakeObject.MaxDate = $filter('date')($scope.currentDate, "yyyy-MM-dd");
  $scope.mealIntakeObject.date = new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate());
  $scope.mealIntakeObject.time = $scope.getCurrentTime();
  $scope.mealIntakeObject.state = 'editMealIntake';
  
  var addMealIntake = function (mealTitle, mealName, mealValue, mealUnit, mealDate, mealTime, mealNotes, mealState) {
    var mealsDate = $filter('date')(new Date(mealDate), "yyyy-MM-dd");
    var mealsTime = $filter('date')(new Date(mealTime), "yyyy-MM-dd HH:mm");
    $scope.monitor.$add({
      title: mealTitle,
      name: mealName,
      value: mealValue,
      unit: mealUnit,
      date: mealsDate,
      time: mealsTime,
      notes: mealNotes,
      state: mealState
    });
  };
  
  $scope.showMealCategory = function () {
      
     mealPopup = $ionicPopup.show({
        title: 'Select Meal Category',
        templateUrl: 'meal-popup.html',
        scope: $scope,
         buttons: [
          { text: 'Cancel',
            onTap: function(e) { return false; }
          },
        ]
      });
      
      IonicClosePopupService.register(mealPopup);
    };
  
  $scope.closeMealCat = function (name) {
    $scope.mealIntakeObject.name = name;
    mealPopup.close();
  };
  
  $scope.showConfirm = function () {
      
      var confirmPopup = $ionicPopup.confirm({
        title: 'Save Meal Intake',
        template: 'Are you sure?',
        buttons: [
          { text: '<i class="icon ion-close-circled"></i>',
            onTap: function(e) { return false; }
          },
          { text: '<i class="icon ion-checkmark-circled""></i>',
            onTap: function(e) {
              addMealIntake($scope.mealIntakeObject.title,
                            $scope.mealIntakeObject.name,
                            $scope.mealIntakeObject.value,
                            $scope.mealIntakeObject.unit,
                            $scope.mealIntakeObject.date,
                            $scope.mealIntakeObject.time,
                            $scope.mealIntakeObject.notes,
                            $scope.mealIntakeObject.state);
              $ionicViewSwitcher.nextDirection('back'); $scope.appGoBack();
            }
          }
        ]
      });
      
      IonicClosePopupService.register(confirmPopup);
  };
  
})