angular.module('starter')

.controller('AppointmentCtrl', function($scope, $ionicPopup, IonicClosePopupService, $ionicViewSwitcher, $filter, $cordovaCalendar, $ionicPlatform){
  
  $scope.appointmentObj = {};
  
  var getAppointmentEndDateTime = function (inputDate) {
    var appointmentDateTime = new Date((new Date(inputDate)).getFullYear(), (new Date(inputDate)).getMonth(), (new Date(inputDate)).getDate() + 1);
    return appointmentDateTime;
  };
  
  var getAppointmentStartDateTime = function (inputDate, inputTime) {
    var date = new Date(inputDate);
    var time = new Date(inputTime).getTime();
    var appointmentDateTime = new Date(date.setTime(date.getTime() + time));
    appointmentDateTime.setHours(appointmentDateTime.getHours() + 1);
    return appointmentDateTime;
  };
  
  $scope.appointmentObj.Title = "Appointment";
  $scope.appointmentObj.Notes = "";
  $scope.appointmentObj.MinDate = $filter('date')($scope.currentDate, "yyyy-MM-dd");
  $scope.appointmentObj.Date = new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate());
  $scope.appointmentObj.Time = $scope.getCurrentTime();
 
  $scope.showConfirm = function () {
      
      var confirmPopup = $ionicPopup.confirm({
        title: 'Save Appointment',
        template: 'Are you sure?',
        buttons: [
          { text: '<i class="icon ion-close-circled"></i>',
            onTap: function(e) { return false; }
          },
          { text: '<i class="icon ion-checkmark-circled""></i>',
            onTap: function(e) {
              $scope.addAppointment();
              $ionicViewSwitcher.nextDirection('back'); 
              $scope.appGoBack();
            }
          }
        ]
      });
      
      IonicClosePopupService.register(confirmPopup);
  };
  
  $ionicPlatform.ready(function(){
    
    $scope.addAppointment = function(){
        
        $cordovaCalendar.createEvent({
          title: $scope.appointmentObj.Name,
          notes: $scope.appointmentObj.Notes,
          startDate: getAppointmentStartDateTime($scope.appointmentObj.Date, $scope.appointmentObj.Time),
          endDate: getAppointmentEndDateTime($scope.appointmentObj.Date)
        }).then(function (result) {
          console.log('Appointment Event is Set!');
        }, function (err) {
          console.log(err);
        });
                                                
    }
    
  });
  
})

