angular.module('starter')

.controller('EditBloodSugarCtrl', function($scope, $stateParams, $firebaseArray, $firebaseObject, IonicClosePopupService, $ionicPopup, $filter, $ionicViewSwitcher){
  
  $scope.bloodSugarObject.MinDate = $filter('date')($scope.minimunDate, "yyyy-MM-dd");
  $scope.bloodSugarObject.MaxDate = $filter('date')($scope.currentDate, "yyyy-MM-dd");
  
  var monitorItemRef = new Firebase("https://blood-care-ionic.firebaseio.com/monitor/" + $stateParams.key);
  $scope.monitorItem = $firebaseObject(monitorItemRef);
  $scope.monitorItem.$loaded()
  .then(function(record) {
    $scope.bloodSugarObject.title = record.title;
    $scope.bloodSugarObject.name = record.name;
    $scope.bloodSugarObject.notes = record.notes;
    $scope.bloodSugarObject.value = record.value;
    $scope.bloodSugarObject.unit = record.unit;
    $scope.bloodSugarObject.state = record.state;
    $scope.bloodSugarObject.date = new Date((new Date(record.date)).getFullYear(), (new Date(record.date)).getMonth(), (new Date(record.date)).getDate());
    $scope.bloodSugarObject.time = new Date(1970, 0, 1, (new Date(record.time)).getHours(), (new Date(record.time)).getMinutes(), 0);
  });
  
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
              $scope.monitorItem.$loaded()
                    .then(function(record) {
                      record.title = $scope.bloodSugarObject.title;
                      record.name = $scope.bloodSugarObject.name;
                      record.notes = $scope.bloodSugarObject.notes;
                      record.value = $scope.bloodSugarObject.value;
                      record.unit = $scope.bloodSugarObject.unit;
                      record.state = $scope.bloodSugarObject.state;
                      record.date = $filter('date')(new Date($scope.bloodSugarObject.date), "yyyy-MM-dd");
                      record.time = $filter('date')(new Date($scope.bloodSugarObject.time), "yyyy-MM-dd HH:mm");
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