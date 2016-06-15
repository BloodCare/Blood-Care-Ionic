angular.module('starter')

.controller('EditPhysicalWorkoutCtrl', function($scope, $stateParams, $firebaseArray, $firebaseObject, IonicClosePopupService, $ionicPopup, $filter, $ionicViewSwitcher){
    
    var workoutPopup;

    var getTotalTime = function (start, end) {
      var startTime = new Date(start).getTime();
      var endTime = new Date(end).getTime();
      var duration;
      if (endTime > startTime) {
        duration = endTime - startTime;
      } else {
        duration = startTime - endTime;
      }
      
      var milliseconds = parseInt((duration%1000)/100)
            , seconds = parseInt((duration/1000)%60)
            , minutes = parseInt((duration/(1000*60))%60)
            , hours = parseInt((duration/(1000*60*60))%24);
     
     hours = (hours < 10) ? "0" + hours : hours;
     minutes = (minutes < 10) ? "0" + minutes : minutes;
     seconds = (seconds < 10) ? "0" + seconds : seconds;       
            
      return hours + " Hours " + minutes + " Minutes ";
    };
    
  $scope.phyWorkoutObject.MinDate = $filter('date')($scope.minimunDate, "yyyy-MM-dd");
  $scope.phyWorkoutObject.MaxDate = $filter('date')($scope.currentDate, "yyyy-MM-dd");
    
  var monitorItemRef = new Firebase("https://blood-care-ionic.firebaseio.com/monitor/" + $stateParams.key);
  $scope.monitorItem = $firebaseObject(monitorItemRef);
  $scope.monitorItem.$loaded().then(function (record) {
      $scope.phyWorkoutObject.title = record.title;
      $scope.phyWorkoutObject.name = record.name;
      $scope.phyWorkoutObject.notes = record.notes;
      $scope.phyWorkoutObject.value = record.value;
      $scope.phyWorkoutObject.unit = record.unit;
      $scope.phyWorkoutObject.state = record.state;
      $scope.phyWorkoutObject.startTime = new Date(1970, 0, 1, (new Date(record.startTime)).getHours(), (new Date(record.startTime)).getMinutes(), 0);
      $scope.phyWorkoutObject.endTime = new Date(1970, 0, 1, (new Date(record.endTime)).getHours(), (new Date(record.endTime)).getMinutes(), 0);
      $scope.phyWorkoutObject.date = new Date((new Date(record.date)).getFullYear(), (new Date(record.date)).getMonth(), (new Date(record.date)).getDate());
      $scope.phyWorkoutObject.time = new Date(1970, 0, 1, (new Date(record.time)).getHours(), (new Date(record.time)).getMinutes(), 0);
  });
  
  $scope.showWorkoutType = function () {
      
     workoutPopup = $ionicPopup.show({
        title: 'Select Workout Type',
        templateUrl: 'workout-popup.html',
        scope: $scope,
         buttons: [
          { text: 'Cancel',
            onTap: function(e) { return false; }
          },
        ]
      });
      
      IonicClosePopupService.register(workoutPopup);
    };
    
    $scope.closeWorkout = function (name) {
      $scope.phyWorkoutObject.name = name;
      workoutPopup.close();
    };

    $scope.showConfirm = function () {
      
      var confirmPopup = $ionicPopup.confirm({
        title: 'Save Physical Workout Details',
        template: 'Are you sure?',
        buttons: [
          { text: '<i class="icon ion-close-circled"></i>',
            onTap: function(e) { return false; }
          },
          { text: '<i class="icon ion-checkmark-circled""></i>',
            onTap: function(e) { 
              $scope.phyWorkoutObject.value = getTotalTime($scope.phyWorkoutObject.startTime, $scope.phyWorkoutObject.endTime);
              $scope.monitorItem.$loaded()
                    .then(function(record) {
                      record.title = $scope.phyWorkoutObject.title;
                      record.name = $scope.phyWorkoutObject.name;
                      record.notes = $scope.phyWorkoutObject.notes;
                      record.value = $scope.phyWorkoutObject.value;
                      record.unit = $scope.phyWorkoutObject.unit;
                      record.state = $scope.phyWorkoutObject.state;
                      record.startTime = new Date($scope.phyWorkoutObject.startTime).toString();
                      record.endTime = new Date($scope.phyWorkoutObject.endTime).toString();
                      record.date = $filter('date')(new Date($scope.phyWorkoutObject.date), "yyyy-MM-dd");
                      record.time = $filter('date')(new Date($scope.phyWorkoutObject.time), "yyyy-MM-dd HH:mm");
                      $scope.monitorItem.$save();
                    });
              $ionicViewSwitcher.nextDirection('back'); 
              $scope.appGoBack(); 
            }
          }
        ]
      });
      
      IonicClosePopupService.register(confirmPopup);
  };
    
})
