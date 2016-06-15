angular.module('starter')

.controller('WeightCtrl', function($scope, $filter, IonicClosePopupService, $ionicPopup, $ionicViewSwitcher, $firebaseArray){
  
  $scope.weightObject.title ="Weight";
  $scope.weightObject.name = "Weight";
  $scope.weightObject.notes = "";
  $scope.weightObject.value = "";
  $scope.weightObject.MaxDate = $filter('date')($scope.currentDate, "yyyy-MM-dd");
  $scope.weightObject.MinDate = $filter('date')($scope.minimunDate, "yyyy-MM-dd");
  $scope.weightObject.date = new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate());
  $scope.weightObject.time = $scope.getCurrentTime();
  $scope.weightObject.state = 'editWeight';
  
  var addWeight = function (weightTitle, weightName, weightValue, weightUnit, 
                            weightDate, weightTime, weightNotes, weightState) {
    var wtDate = $filter('date')(new Date(weightDate), "yyyy-MM-dd");
    var wtTime = $filter('date')(new Date(weightTime), "yyyy-MM-dd HH:mm");
      $scope.monitor.$add({
        title: weightTitle,
        name: weightName,
        value: weightValue,
        unit: weightUnit,
        date: wtDate,
        time: wtTime,
        notes: weightNotes,
        state: weightState
      });
  };
  
  $scope.showConfirm = function () {
      
      var confirmPopup = $ionicPopup.confirm({
        title: 'Save Weight Details',
        template: 'Are you sure?',
        buttons: [
          { text: '<i class="icon ion-close-circled"></i>',
            onTap: function(e) { return false; }
          },
          { text: '<i class="icon ion-checkmark-circled""></i>',
            onTap: function(e) {
              addWeight($scope.weightObject.title,
                        $scope.weightObject.name,
                        $scope.weightObject.value,
                        $scope.weightObject.unit,
                        $scope.weightObject.date,
                        $scope.weightObject.time,
                        $scope.weightObject.notes,
                        $scope.weightObject.state);
              $ionicViewSwitcher.nextDirection('back'); $scope.appGoBack();
            }
          }
        ]
      });
      
      IonicClosePopupService.register(confirmPopup);
  };
  
})
