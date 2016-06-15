angular.module('starter')

.controller('PhysicalWorkoutCtrl', function($scope, $filter, IonicClosePopupService, $ionicPopup, $ionicViewSwitcher, $firebaseArray){
  
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
  
  $scope.phyWorkoutObject.title = "Physical Workout";
  $scope.phyWorkoutObject.unit = "";
  $scope.phyWorkoutObject.notes = "";
  $scope.phyWorkoutObject.value = "";
  $scope.phyWorkoutObject.MinDate = $filter('date')($scope.minimunDate, "yyyy-MM-dd");
  $scope.phyWorkoutObject.MaxDate = $filter('date')($scope.currentDate, "yyyy-MM-dd");
  $scope.phyWorkoutObject.date = new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate());
  $scope.phyWorkoutObject.time = $scope.getCurrentTime();
  $scope.phyWorkoutObject.startTime = $scope.getCurrentTime();
  $scope.phyWorkoutObject.endTime = $scope.getCurrentTime();
  $scope.phyWorkoutObject.state = 'editPhysicalWorkout';
  
  var addPhysicalWorkout = function (phyWorkoutTitle, phyWorkoutName, phyWorkoutValue, phyWorkoutUnit, phyWorkoutStartTime,
                                     phyWorkoutEndTime, phyWorkoutDate, phyWorkoutTime, phyWorkoutNotes, phyWorkoutState) {
    
    var pwDate = $filter('date')(new Date(phyWorkoutDate), "yyyy-MM-dd");
    var pwTime = $filter('date')(new Date(phyWorkoutTime), "yyyy-MM-dd HH:mm");
    $scope.monitor.$add({
      title: phyWorkoutTitle,
      name: phyWorkoutName,
      value: phyWorkoutValue,
      unit: phyWorkoutUnit,
      startTime: new Date(phyWorkoutStartTime).toString(),
      endTime: new Date(phyWorkoutEndTime).toString(),
      date: pwDate,
      time: pwTime,
      notes:phyWorkoutNotes,
      state: phyWorkoutState
    });
  };
  
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
              addPhysicalWorkout($scope.phyWorkoutObject.title, $scope.phyWorkoutObject.name,
                                 $scope.phyWorkoutObject.value, $scope.phyWorkoutObject.unit,
                                 $scope.phyWorkoutObject.startTime, $scope.phyWorkoutObject.endTime,
                                 $scope.phyWorkoutObject.date, $scope.phyWorkoutObject.time,
                                 $scope.phyWorkoutObject.notes, $scope.phyWorkoutObject.state);
              $ionicViewSwitcher.nextDirection('back'); 
              $scope.appGoBack(); 
            }
          }
        ]
      });
      
      IonicClosePopupService.register(confirmPopup);
  };
    
})
