angular.module('starter')

.controller('EditWeightCtrl', function($scope, $stateParams, $firebaseArray, $firebaseObject, IonicClosePopupService, $ionicPopup, $filter, $ionicViewSwitcher){
  
  $scope.weightObject.MaxDate = $filter('date')($scope.currentDate, "yyyy-MM-dd");
  $scope.weightObject.MinDate = $filter('date')($scope.minimunDate, "yyyy-MM-dd");
  
  var monitorItemRef = new Firebase("https://blood-care-ionic.firebaseio.com/monitor/" + $stateParams.key);
  $scope.monitorItem = $firebaseObject(monitorItemRef);
  $scope.monitorItem.$loaded()
  .then(function(record) {
    $scope.weightObject.title = record.title;
    $scope.weightObject.name = record.name;
    $scope.weightObject.notes = record.notes;
    $scope.weightObject.value = record.value;
    $scope.weightObject.unit = record.unit;
    $scope.weightObject.state = record.state;
    $scope.weightObject.date = new Date((new Date(record.date)).getFullYear(), (new Date(record.date)).getMonth(), (new Date(record.date)).getDate());
    $scope.weightObject.time = new Date(1970, 0, 1, (new Date(record.time)).getHours(), (new Date(record.time)).getMinutes(), 0);
  });
  
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
              $scope.monitorItem.$loaded()
                    .then(function(record) {
                      record.title = $scope.weightObject.title;
                      record.name = $scope.weightObject.name;
                      record.notes = $scope.weightObject.notes;
                      record.value = $scope.weightObject.value;
                      record.unit = $scope.weightObject.unit;
                      record.state = $scope.weightObject.state;
                      record.date = $filter('date')(new Date($scope.weightObject.date), "yyyy-MM-dd");
                      record.time = $filter('date')(new Date($scope.weightObject.time), "yyyy-MM-dd HH:mm");
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