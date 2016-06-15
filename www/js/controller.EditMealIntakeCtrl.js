angular.module('starter')

.controller('EditMealIntakeCtrl', function($scope, $stateParams, $firebaseArray, $firebaseObject, IonicClosePopupService, $ionicPopup, $filter, $ionicViewSwitcher){
  
  var mealPopup;
  
  $scope.mealIntakeObject.MinDate = $filter('date')($scope.minimunDate, "yyyy-MM-dd");
  $scope.mealIntakeObject.MaxDate = $filter('date')($scope.currentDate, "yyyy-MM-dd");
  
  var monitorItemRef = new Firebase("https://blood-care-ionic.firebaseio.com/monitor/" + $stateParams.key);
  $scope.monitorItem =$firebaseObject(monitorItemRef);
  $scope.monitorItem.$loaded()
  .then(function(record) {
    $scope.mealIntakeObject.title = record.title;
    $scope.mealIntakeObject.name = record.name;
    $scope.mealIntakeObject.notes = record.notes;
    $scope.mealIntakeObject.value = record.value;
    $scope.mealIntakeObject.unit = record.unit;
    $scope.mealIntakeObject.state = record.state;
    $scope.mealIntakeObject.date = new Date((new Date(record.date)).getFullYear(), (new Date(record.date)).getMonth(), (new Date(record.date)).getDate());
    $scope.mealIntakeObject.time = new Date(1970, 0, 1, (new Date(record.time)).getHours(), (new Date(record.time)).getMinutes(), 0);
  });
  
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
              $scope.monitorItem.$loaded()
                .then(function(record) {
                   record.title = $scope.mealIntakeObject.title;
                   record.name = $scope.mealIntakeObject.name;
                   record.notes = $scope.mealIntakeObject.notes;
                   record.value = $scope.mealIntakeObject.value;
                   record.unit = $scope.mealIntakeObject.unit;
                   record.state = $scope.mealIntakeObject.state;
                   record.date = $filter('date')(new Date($scope.mealIntakeObject.date), "yyyy-MM-dd");
                   record.time = $filter('date')(new Date($scope.mealIntakeObject.time), "yyyy-MM-dd HH:mm");
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