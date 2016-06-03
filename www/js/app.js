// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ionic.closePopup', 'ngCordova'])

.run(function($ionicPlatform, $rootScope, $cordovaVibration) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
     
     
    $rootScope.$on('$cordovaLocalNotification:trigger', function(event, notification, state){
      $cordovaVibration.vibrate(2000);
    });
    
  });
})

.config(function($stateProvider, $urlRouterProvider){
  
  $stateProvider
  
  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/navigation.html'
  })
  
  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html',
        controller: 'HomeCtrl'
      }
    }
  });
  
  $stateProvider
  
  .state('settings', {
    url: '/app/settings',
    templateUrl: 'templates/settings.html',
    controller: 'SettingsCtrl'
  })
  .state('profile', {
    url: '/app/settings/profile',
    templateUrl: 'templates/profile.html',
    controller: 'ProfileCtrl'
  })
  .state('feedback', {
    url: '/app/settings/feedback',
    templateUrl: 'templates/feedback.html',
    controller: 'FeedbackCtrl'
  })
  .state('about', {
    url: '/app/settings/about',
    templateUrl: 'templates/about.html',
    controller: 'AboutCtrl'
  })
  .state('reminder', {
    url: '/app/reminder',
    templateUrl: 'templates/reminder.html',
    controller: 'ReminderCtrl'
  })
  .state('monitor', {
    url: '/app/monitor',
    templateUrl: 'templates/monitor.html',
    controller: 'MonitorCtrl'
  })
  .state('appointment', {
    url: '/app/reminder/appointment',
    templateUrl: 'templates/appointment.html',
    controller: 'AppointmentCtrl'
  })
  .state('generalReminder', {
    url: '/app/reminder/general',
    templateUrl: 'templates/generalReminder.html',
    controller: 'GeneralReminderCtrl'
  })
  .state('emergencyReminder', {
    url: '/app/reminder/emergency',
    templateUrl: 'templates/emergencyReminder.html',
    controller: 'EmergencyReminderCtrl'
  })
  .state('medicineIntake', {
    url: '/app/monitor/medicine-intake',
    templateUrl: 'templates/medicineIntake.html',
    controller: 'MedicineIntakeCtrl'
  })
  .state('mealIntake', {
    url: '/app/monitor/meal-intake',
    templateUrl: 'templates/mealIntake.html',
    controller: 'MealIntakeCtrl'
  })
  .state('bloodSugar', {
    url: '/app/monitor/blood-sugar',
    templateUrl: 'templates/bloodSugar.html',
    controller: 'BloodSugarCtrl'
  })
  .state('physicalWorkout', {
    url: '/app/monitor/physical-workout',
    templateUrl: 'templates/physicalWorkout.html',
    controller: 'PhysicalWorkoutCtrl'
  })
  .state('weight', {
    url: '/app/monitor/weight',
    templateUrl: 'templates/weight.html',
    controller: 'WeightCtrl'
  })
  .state('medicineName', {
    url: '/app/monitor/medicine-intake/medicine-name',
    templateUrl: 'templates/medicine-add-edit-delete.html',
    controller: 'MedicineNameCtrl'
  })
  .state('mealCategory', {
    url: '/app/monitor/medicine-intake/meal-category',
    templateUrl: 'templates/meal-add-edit-delete.html',
    controller: 'MealCategoryCtrl'
  })
  .state('workoutType', {
    url: '/app/monitor/medicine-intake/workout-type',
    templateUrl: 'templates/workout-add-edit-delete.html',
    controller: 'WorkoutTypeCtrl'
  });

  $urlRouterProvider.otherwise('/app/home');
})

.controller('AppCtrl', function($scope, $ionicHistory, $ionicViewSwitcher, $filter){
  
  /*-------------------------- Navigation Data --------------------------*/
  
   $scope.menuGroups = [
    
    {
      name: 'Reminder',
      url: '#/app/reminder',
      groupIcon: 'ion-ios-calendar',
      items: [
        {
          name: 'Appointment',
          url: '#/app/reminder/appointment'
        },
        {
          name: 'General Reminder',
          url: '#/app/reminder/general'
        },
        {
          name: 'Emergency Reminder',
          url: '#/app/reminder/emergency'
        }
      ] 
    },
    
    {
      name: 'Monitor',
      url: '#/app/monitor',
      groupIcon: 'ion-ios-list',
      items: [
        {
          name: 'Medicine Intake',
          url: '#/app/monitor/medicine-intake'
        },
        {
          name: 'Meal Intake',
          url: '#/app/monitor/meal-intake'
        },
        {
          name: 'Blood Sugar Level',
          url: '#/app/monitor/blood-sugar'
        },
        {
          name: 'Physical Workout',
          url: '#/app/monitor/physical-workout'
        },
        {
          name: 'Weight',
          url: '#/app/monitor/weight'
        }
      ]
    },
    
    {
      name: 'Settings',
      url: '#/app/settings',
      groupIcon: 'ion-ios-gear',
      items: [
        {
          name: 'Profile',
          url: '#/app/settings/profile'
        },
        {
          name: 'Feedback',
          url: '#/app/settings/feedback'
        },
        {
          name: 'About',
          url: '#/app/settings/about'
        }
      ]
    }
  ];
  
  $scope.toggleGroup = function(group) {
    if ($scope.isGroupShown(group)) {
      $scope.shownGroup = null;
    } else {
      $scope.shownGroup = group;
    }
  };
  
  $scope.isGroupShown = function(group) {
    return $scope.shownGroup === group;
  };
  
  /*---------------------------------------------------------------------*/
  var today = new Date();
  var minDate = new Date(1900, 01 - 1, 01);
  $scope.currentDate = today;
  $scope.minimunDate = minDate;
  
  $scope.appGoBack = function () {
    $ionicViewSwitcher.nextDirection('back');
    $ionicHistory.goBack();
  };

  /*------------------------ Profile Data ------------------------*/
  
  $scope.genderList = [
    'Male',
    'Female',
    'Other'
  ];
  
  $scope.diabetesTypes = [
    'Type 1',
    'Type 2'
  ];
  
  $scope.profileObject = {};
  $scope.profileObject.gender = $scope.genderList[1];
  $scope.profileObject.diabetes = $scope.diabetesTypes[0];
  
  /*------------------------------------------------------------------*/
  
  $scope.feedbackObject = {};
  
  /*-------------------- Medicine Intake Data -------------*/
  $scope.medicineList = [
    {
      name: 'Insulin',
      unit: 'mg'
    },
    {
      name: 'Humalin',
      unit: 'qty2'
    },
    {
      name: 'Humalog',
      unit: 'qty3'
    },
    {
      name: 'Asder',
      unit: 'cdf'
    }
  ];
  
  $scope.medicineIntakeObject = {};
  $scope.medicineIntakeObject.title = "Medicine Intake";
  $scope.medicineIntakeObject.name = $scope.medicineList[0].name;
  $scope.medicineIntakeObject.unit = $scope.medicineList[0].unit;
  /*------------------------------------------------------------------*/
  
  /*------------------------ Meal Intake Data -----------------*/
  
  $scope.mealCategories = [
    'Breakfast',
    'Lunch',
    'Dinner',
    'Supper'
  ];
  
  $scope.mealIntakeObject = {}; 
  $scope.mealIntakeObject.title = "Meal Intake";
  $scope.mealIntakeObject.name = $scope.mealCategories[0];
  $scope.mealIntakeObject.unit = "gm of Carbs";
  
  /*------------------------------------------------------------------*/
  
  /*------------------------ Blood Sugar Data ---------------------*/
  
  $scope.bloodSugarUnits = [
    'mmo/l',
    'mg/dL'
  ];
  
  $scope.bloodSugarObject = {};
  $scope.bloodSugarObject.title = "Blood Sugar";
  $scope.bloodSugarObject.name = "Blood Sugar";
  $scope.bloodSugarObject.unit = $scope.bloodSugarUnits[0];
  
  /*------------------------------------------------------------------*/
  
  /*------------------------------ Weight Data ---------------------------*/
  
  $scope.weightUnits = [
    'Kgs',
    'Pounds'
  ];
  
  $scope.weightObject = {};
  $scope.weightObject.title ="Weight";
  $scope.weightObject.name = "Weight";
  $scope.weightObject.unit = $scope.weightUnits[0];
  
  /*----------------------------------------------------------------------*/
  
  /*------------------------- Physical Workout Data ----------------------*/
  
  $scope.workoutTypes = [
    'Running',
    'Walking',
    'Sit-ups'
  ];
  
  $scope.phyWorkoutObject = {};
  $scope.phyWorkoutObject.title = "Physical Workout";
  $scope.phyWorkoutObject.name = $scope.workoutTypes[0];
  $scope.phyWorkoutObject.unit = "";
  
  /*------------------------------------------------------------------------------*/

  $scope.getReminderDateTime = function (inputDate, inputTime) {
    var date = new Date(inputDate);
    var time = new Date(inputTime).getTime();
    var reminderDateTime = new Date(date.setTime(date.getTime() + time));
    reminderDateTime.setHours(reminderDateTime.getHours() + 1);
    return reminderDateTime;
  };
  
})

.controller('HomeCtrl', function($scope, $ionicSlideBoxDelegate){
  $scope.navSlide = function (index) {
    $ionicSlideBoxDelegate.slide(index, 500);
  }
})

.controller('SettingsCtrl', function($scope){
  
})

.controller('ProfileCtrl', function($scope, $filter, $ionicPopup, IonicClosePopupService, $ionicViewSwitcher){
   
   $scope.profileObject.MinDate = $filter('date')($scope.minimunDate, "yyyy-MM-dd");
   $scope.profileObject.MaxDate = $filter('date')($scope.currentDate, "yyyy-MM-dd");
   
  /*
   $scope.dateOptions = {
      dateFormat: 'dd-mm-yy',
      changeMonth:true,
      changeYear:true,
      minDate: new Date(1900, 01 - 1, 01),
      maxDate: 'today',
      yearRange: '1900:c' 
    };*/
    
    $scope.showConfirm = function () {
      
      var confirmPopup = $ionicPopup.confirm({
        title: 'Save Profile',
        template: 'Are you sure?',
        buttons: [
          { text: '<i class="icon ion-close-circled"></i>',
            onTap: function(e) { return false; }
          },
          { text: '<i class="icon ion-checkmark-circled""></i>',
            onTap: function(e) { $ionicViewSwitcher.nextDirection('back'); $scope.appGoBack(); }
          }
        ]
      });
      
      IonicClosePopupService.register(confirmPopup);
    };
    
})

.controller('FeedbackCtrl', function($scope, $ionicPopup, IonicClosePopupService, $ionicViewSwitcher){
  
  $scope.ratingArr = [
    {
      value: 1,
      icon: 'ion-ios-star-outline'
    }, 
    {
      value: 2,
      icon: 'ion-ios-star-outline'
    },
    {
      value: 3,
      icon: 'ion-ios-star-outline'
    },
    {
      value: 4,
      icon: 'ion-ios-star-outline'
    },
    {
      value: 5,
      icon: 'ion-ios-star-outline'
    }    
  ];
  
  $scope.setRating = function (value) {
    var ratings = $scope.ratingArr;
    for (var i = 0; i < ratings.length; i++) {
      if (i < value) {
        $scope.feedbackObject.ratings = value;
        ratings[i].icon = 'ion-ios-star';
      } else {
        ratings[i].icon = 'ion-ios-star-outline';
      }
    }
  };
  
  $scope.showConfirm = function () {
      
      var confirmPopup = $ionicPopup.confirm({
        title: 'Save Feedback',
        template: 'Are you sure?',
        buttons: [
          { text: '<i class="icon ion-close-circled"></i>',
            onTap: function(e) { return false; }
          },
          { text: '<i class="icon ion-checkmark-circled""></i>',
            onTap: function(e) { 
              $ionicViewSwitcher.nextDirection('back'); 
              $scope.appGoBack(); 
            }
          }
        ]
      });
      
      IonicClosePopupService.register(confirmPopup);
      
    };
    
})

.controller('AboutCtrl', function($scope){
  
})

.controller('ReminderCtrl', function($scope){
  
})

.controller('MonitorCtrl', function($scope){
  
})

.controller('MedicineIntakeCtrl', function($scope, IonicClosePopupService, $ionicPopup, $filter, $ionicViewSwitcher){

  var medsPopup;
  
  $scope.medicineIntakeObject.MinDate = $filter('date')($scope.minimunDate, "yyyy-MM-dd");
  $scope.medicineIntakeObject.MaxDate = $filter('date')($scope.currentDate, "yyyy-MM-dd");
  
  $scope.showMeds = function () {
      
     medsPopup = $ionicPopup.show({
        title: 'Select Medicine',
        templateUrl: 'medicine-popup.html',
        scope: $scope,
         buttons: [
          { text: 'Cancel',
            onTap: function(e) { return false; }
          },
        ]
      });
      
      IonicClosePopupService.register(medsPopup);
    };
  
  $scope.closeMeds = function (name, unit) {
    $scope.medicineIntakeObject.name = name;
    $scope.medicineIntakeObject.unit = unit;
    medsPopup.close();
  }
  
  $scope.showConfirm = function () {
      
      var confirmPopup = $ionicPopup.confirm({
        title: 'Save Appointment',
        template: 'Are you sure?',
        buttons: [
          { text: '<i class="icon ion-close-circled"></i>',
            onTap: function(e) { return false; }
          },
          { text: '<i class="icon ion-checkmark-circled""></i>',
            onTap: function(e) { $ionicViewSwitcher.nextDirection('back'); $scope.appGoBack(); }
          }
        ]
      });
      
      IonicClosePopupService.register(confirmPopup);
  };
  
})

.controller('MealIntakeCtrl', function($scope, IonicClosePopupService, $ionicPopup, $filter, $ionicViewSwitcher){
  
  var mealPopup;
  
  $scope.medicineIntakeObject.MinDate = $filter('date')($scope.minimunDate, "yyyy-MM-dd");
  $scope.mealIntakeObject.MaxDate = $filter('date')($scope.currentDate, "yyyy-MM-dd");
  
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
        title: 'Save Appointment',
        template: 'Are you sure?',
        buttons: [
          { text: '<i class="icon ion-close-circled"></i>',
            onTap: function(e) { return false; }
          },
          { text: '<i class="icon ion-checkmark-circled""></i>',
            onTap: function(e) { $ionicViewSwitcher.nextDirection('back'); $scope.appGoBack(); }
          }
        ]
      });
      
      IonicClosePopupService.register(confirmPopup);
  };
  
})

.controller('BloodSugarCtrl', function($scope, $filter, IonicClosePopupService, $ionicPopup, $ionicViewSwitcher){

    $scope.bloodSugarObject.MinDate = $filter('date')($scope.minimunDate, "yyyy-MM-dd");
    $scope.bloodSugarObject.MaxDate = $filter('date')($scope.currentDate, "yyyy-MM-dd");
    
    $scope.showConfirm = function () {
      
      var confirmPopup = $ionicPopup.confirm({
        title: 'Save Appointment',
        template: 'Are you sure?',
        buttons: [
          { text: '<i class="icon ion-close-circled"></i>',
            onTap: function(e) { return false; }
          },
          { text: '<i class="icon ion-checkmark-circled""></i>',
            onTap: function(e) { $ionicViewSwitcher.nextDirection('back'); $scope.appGoBack(); }
          }
        ]
      });
      
      IonicClosePopupService.register(confirmPopup);
  };
    
})

.controller('PhysicalWorkoutCtrl', function($scope, $filter, IonicClosePopupService, $ionicPopup, $ionicViewSwitcher){
  
  var workoutPopup;
  
  $scope.phyWorkoutObject.MinDate = $filter('date')($scope.minimunDate, "yyyy-MM-dd");
  $scope.phyWorkoutObject.MaxDate = $filter('date')($scope.currentDate, "yyyy-MM-dd");
  
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
    
    var msToTime = function (duration) {
        var milliseconds = parseInt((duration%1000)/100)
            , seconds = parseInt((duration/1000)%60)
            , minutes = parseInt((duration/(1000*60))%60)
            , hours = parseInt((duration/(1000*60*60))%24);

        hours = (hours < 10) ? "0" + hours : hours;
        minutes = (minutes < 10) ? "0" + minutes : minutes;
        seconds = (seconds < 10) ? "0" + seconds : seconds;

        return hours + " Hrs " + minutes + " min ";
    };
    
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
              var startTime = new Date($scope.phyWorkoutObject.startTime).getTime();
              var endTime = new Date($scope.phyWorkoutObject.endTime).getTime();
              var totalTime = msToTime(endTime - startTime);
              $scope.phyWorkoutObject.value = totalTime;
              //console.log("totalTime : " + totalTime);
              $ionicViewSwitcher.nextDirection('back'); 
              $scope.appGoBack(); 
            }
          }
        ]
      });
      
      IonicClosePopupService.register(confirmPopup);
  };
    
})

.controller('WeightCtrl', function($scope, $filter, IonicClosePopupService, $ionicPopup, $ionicViewSwitcher){
  
  $scope.weightObject.MaxDate = $filter('date')($scope.currentDate, "yyyy-MM-dd");
  $scope.weightObject.MinDate = $filter('date')($scope.minimunDate, "yyyy-MM-dd");
  
  $scope.showConfirm = function () {
      
      var confirmPopup = $ionicPopup.confirm({
        title: 'Save Appointment',
        template: 'Are you sure?',
        buttons: [
          { text: '<i class="icon ion-close-circled"></i>',
            onTap: function(e) { return false; }
          },
          { text: '<i class="icon ion-checkmark-circled""></i>',
            onTap: function(e) { $ionicViewSwitcher.nextDirection('back'); $scope.appGoBack(); }
          }
        ]
      });
      
      IonicClosePopupService.register(confirmPopup);
  };
  
})

.controller('MealCategoryCtrl', function($scope, IonicClosePopupService, $ionicPopup){
  
  $scope.mealCatObj = {};
  var addMealCatPopup;
  
  $scope.listData = {
    showReorder: false
  };
  
  $scope.moveItem = function(item, fromIndex, toIndex) {
    $scope.mealCategories.splice(fromIndex, 1);
    $scope.mealCategories.splice(toIndex, 0, item);
  };
  
   $scope.showAddMealCategory = function () {
      
     $scope.mealIntakeObject.name = "";
      
     addMealCatPopup = $ionicPopup.show({
        title: 'Add Meal Category',
        templateUrl: 'add-mealCategory-popup.html',
        scope: $scope,
        buttons: [
          { text: '<i class="icon ion-close-circled"></i>',
            onTap: function(e) { 
              $scope.mealIntakeObject.name = $scope.mealCategories[0];
              return false; 
            }
          },
          { text: '<i class="icon ion-checkmark-circled""></i>',
            onTap: function(e) { 
              if (!$scope.mealIntakeObject.name) {
                e.preventDefault();
              } else {
                $scope.mealCategories.push($scope.mealIntakeObject.name);
                return false;
              }
            }
          }
        ]
      });
      
      IonicClosePopupService.register(addMealCatPopup);
    };
    
    $scope.showEditMealCat = function (item) {
      
      $scope.mealIntakeObject.name = item;
      
     editMealCatPopup = $ionicPopup.show({
        title: 'Edit Meal Category',
        templateUrl: 'edit-mealCategory-popup.html',
        scope: $scope,
        buttons: [
          { text: '<i class="icon ion-close-circled"></i>',
            onTap: function(e) { 
              $scope.mealIntakeObject.name = $scope.mealCategories[0];
              return false; 
            }
          },
          { text: '<i class="icon ion-checkmark-circled""></i>',
            onTap: function(e) { 
              if (!$scope.mealIntakeObject.name) {
                e.preventDefault();
              } else {
                /*
                if ($scope.selectedMedicineName == item.name && $scope.selectedMedicineUnit == item.unit) {
                  $scope.selectedMedicineName = $scope.medsObj.editMedsName;
                  $scope.selectedMedicineUnit = $scope.medsObj.editMedsUnit;
                }*/
                
                var index = $scope.mealCategories.indexOf(item);
                $scope.mealCategories[index] = $scope.mealIntakeObject.name;
                return false;
              }
            }
          }
        ]
      });
      
      IonicClosePopupService.register(editMealCatPopup);
    };
    
    $scope.showDeleteMealCat = function (item) {
      
      $scope.mealIntakeObject.name = item;
      
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
                $scope.mealCategories.splice($scope.mealCategories.indexOf(item), 1);
                $scope.mealIntakeObject.name = $scope.mealCategories[0];
            }
          }
        ]
      });
      
      IonicClosePopupService.register(deleteMealCatPopup);
    };
    
})

.controller('MedicineNameCtrl', function($scope, IonicClosePopupService, $ionicPopup){
  
  $scope.medsObj = {};
  var addMedsPopup;
  var editMedsPopup;
  var deleteMedsPopup;
  
  $scope.listData = {
    showReorder: false
  };
  
  $scope.moveItem = function(item, fromIndex, toIndex) {
    $scope.medicineList.splice(fromIndex, 1);
    $scope.medicineList.splice(toIndex, 0, item);
  };
  
  $scope.showAddMeds = function () {
      
      $scope.medicineIntakeObject.name = "";
      $scope.medicineIntakeObject.unit = "";
      
     addMedsPopup = $ionicPopup.show({
        title: 'Add Medicine',
        templateUrl: 'add-medicine-popup.html',
        scope: $scope,
        buttons: [
          { text: '<i class="icon ion-close-circled"></i>',
            onTap: function(e) { 
              $scope.medicineIntakeObject.name = $scope.medicineList[0].name;
              $scope.medicineIntakeObject.unit = $scope.medicineList[0].unit;
              return false; 
            }
          },
          { text: '<i class="icon ion-checkmark-circled""></i>',
            onTap: function(e) { 
              if (!$scope.medicineIntakeObject.name || !$scope.medicineIntakeObject.unit) {
                e.preventDefault();
              } else {
                var obj = { name: $scope.medicineIntakeObject.name,
                            unit: $scope.medicineIntakeObject.unit};
                $scope.medicineList.push(obj);
                return false;
              }
            }
          }
        ]
      });
      
      IonicClosePopupService.register(addMedsPopup);
    };
    
    $scope.showEditMeds = function (item) {

      $scope.medicineIntakeObject.name = item.name;
      $scope.medicineIntakeObject.unit = item.unit;
      
     editMedsPopup = $ionicPopup.show({
        title: 'Edit Medicine',
        templateUrl: 'edit-medicine-popup.html',
        scope: $scope,
        buttons: [
          { text: '<i class="icon ion-close-circled"></i>',
            onTap: function(e) { 
              $scope.medicineIntakeObject.name = $scope.medicineList[0].name;
              $scope.medicineIntakeObject.unit = $scope.medicineList[0].unit;
              return false; 
            }
          },
          { text: '<i class="icon ion-checkmark-circled""></i>',
            onTap: function(e) { 
              if (!$scope.medicineIntakeObject.name || !$scope.medicineIntakeObject.unit) {
                e.preventDefault();
              } else {
                var index = $scope.medicineList.indexOf(item);
                $scope.medicineList[index].name = $scope.medicineIntakeObject.name;
                $scope.medicineList[index].unit = $scope.medicineIntakeObject.unit;
                return false;
              }
            }
          }
        ]
      });
      
      IonicClosePopupService.register(editMedsPopup);
    };
  
    $scope.showDeleteMeds = function (item) {
      
      $scope.medicineIntakeObject.name = item.name;
      $scope.medicineIntakeObject.unit = item.unit;
      
     deleteMedsPopup = $ionicPopup.show({
        title: 'Delete Medicine',
        templateUrl: 'delete-medicine-popup.html',
        scope: $scope,
        buttons: [
          { text: '<i class="icon ion-close-circled"></i>',
            onTap: function(e) { return false; }
          },
          { text: '<i class="icon ion-checkmark-circled""></i>',
            onTap: function(e) { 
                $scope.medicineList.splice($scope.medicineList.indexOf(item), 1);
                $scope.medicineIntakeObject.name = $scope.medicineList[0].name;
                $scope.medicineIntakeObject.unit = $scope.medicineList[0].unit;
            }
          }
        ]
      });
      
      IonicClosePopupService.register(deleteMedsPopup);
    };
})

.controller('WorkoutTypeCtrl', function($scope, IonicClosePopupService, $ionicPopup){
  
  $scope.workoutObj = {};
  var addWorkoutTypePopup;
  var editWorkoutTypePopup;
  var deleteWorkoutTypePopup;
  
  $scope.listData = {
    showReorder: false
  };
  
  $scope.moveItem = function(item, fromIndex, toIndex) {
    $scope.workoutTypes.splice(fromIndex, 1);
    $scope.workoutTypes.splice(toIndex, 0, item);
  };
  
  $scope.showAddWorkoutType = function () {
      
      $scope.phyWorkoutObject.name = "";
      
     addWorkoutTypePopup = $ionicPopup.show({
        title: 'Add Workout Type',
        templateUrl: 'add-workoutType-popup.html',
        scope: $scope,
        buttons: [
          { text: '<i class="icon ion-close-circled"></i>',
            onTap: function(e) { 
              $scope.phyWorkoutObject.name = $scope.workoutTypes[0];
              return false; 
            }
          },
          { text: '<i class="icon ion-checkmark-circled""></i>',
            onTap: function(e) { 
              if (!$scope.phyWorkoutObject.name) {
                e.preventDefault();
              } else {
                $scope.workoutTypes.push($scope.phyWorkoutObject.name);
                return false;
              }
            }
          }
        ]
      });
      
      IonicClosePopupService.register(addWorkoutTypePopup);
    };
    
    $scope.showEditWorkoutType = function (item) {
      
      $scope.phyWorkoutObject.name = item;
      
     editWorkoutTypePopup = $ionicPopup.show({
        title: 'Edit Workout Type',
        templateUrl: 'edit-workoutType-popup.html',
        scope: $scope,
        buttons: [
          { text: '<i class="icon ion-close-circled"></i>',
            onTap: function(e) { 
              $scope.phyWorkoutObject.name = $scope.workoutTypes[0];
              return false; 
            }
          },
          { text: '<i class="icon ion-checkmark-circled""></i>',
            onTap: function(e) { 
              if (!$scope.phyWorkoutObject.name) {
                e.preventDefault();
              } else {
                var index = $scope.workoutTypes.indexOf(item);
                $scope.workoutTypes[index] = $scope.phyWorkoutObject.name;
                return false;
              }
            }
          }
        ]
      });
      
      IonicClosePopupService.register(editWorkoutTypePopup);
    };
    
    $scope.showDeleteWorkoutType = function (item) {
      
      $scope.phyWorkoutObject.name = item;
      
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
                $scope.workoutTypes.splice($scope.workoutTypes.indexOf(item), 1);
                $scope.phyWorkoutObject.name = $scope.workoutTypes[0];
            }
          }
        ]
      });
      
      IonicClosePopupService.register(deleteWorkoutTypePopup);
    };
    
})

.controller('AppointmentCtrl', function($scope, $ionicPopup, IonicClosePopupService, $ionicViewSwitcher, $filter){
  
  $scope.appointmentObj = {};
  
  $scope.appointmentObj.MinDate = $filter('date')($scope.currentDate, "yyyy-MM-dd");
  
  $scope.showConfirm = function () {
      
      var confirmPopup = $ionicPopup.confirm({
        title: 'Save Appointment',
        template: 'Are you sure?',
        buttons: [
          { text: '<i class="icon ion-close-circled"></i>',
            onTap: function(e) { return false; }
          },
          { text: '<i class="icon ion-checkmark-circled""></i>',
            onTap: function(e) { $ionicViewSwitcher.nextDirection('back'); $scope.appGoBack(); }
          }
        ]
      });
      
      IonicClosePopupService.register(confirmPopup);
  };
})

.controller('GeneralReminderCtrl', function($scope, $ionicPopup, IonicClosePopupService, $ionicViewSwitcher, $filter, $cordovaLocalNotification, $ionicPlatform){

  $scope.genReminderObj = {};
  
  $scope.genReminderObj.MinDate = $filter('date')($scope.currentDate, "yyyy-MM-dd");
  
  $scope.showConfirm = function () {
      
      var confirmPopup = $ionicPopup.confirm({
        title: 'Save General Reminder',
        template: 'Are you sure?',
        buttons: [
          { text: '<i class="icon ion-close-circled"></i>',
            onTap: function(e) { return false; }
          },
          { text: '<i class="icon ion-checkmark-circled""></i>',
            onTap: function(e) { 
              console.log($scope.getReminderDateTime($scope.genReminderObj.Date, $scope.genReminderObj.Time));
              $scope.addGeneralReminder();
              $ionicViewSwitcher.nextDirection('back'); 
              $scope.appGoBack(); 
            }
          }
        ]
      });
      
      IonicClosePopupService.register(confirmPopup);
  };
  
  $ionicPlatform.ready(function(){
    
    $scope.addGeneralReminder = function(){
     
      $cordovaLocalNotification.add({
        id: "12345",
        date: $scope.getReminderDateTime($scope.genReminderObj.Date, $scope.genReminderObj.Time),
        message: $scope.genReminderObj.Msg,
        title: $scope.genReminderObj.Name,
        autoCancel: true
      }).then(function () {
        console.log("General Reminder is Set.");
      });
    }
    
  });
  
})

.controller('EmergencyReminderCtrl', function($scope, $ionicPopup, IonicClosePopupService, $ionicViewSwitcher){
  
  $scope.emrReminderObj = {};
  
  $scope.emrReminderObj.hrsCount = 1;
  $scope.emrReminderObj.minCount = 30;
  
  $scope.increamentHrsCount = function (count) {
    
    if (count === 24) {
      count = count;
    } else {
      count = count + 1;
    }
    
    $scope.emrReminderObj.hrsCount = count;
  }
  
  $scope.increamentMinCount = function (count) {
    
    if (count === 59) {
      count = count;
    } else {
      count = count + 1;
    }
    
    $scope.emrReminderObj.minCount = count;
  }
  
  $scope.decreamentHrsCount = function (count) {
    
    if (count === 0) {
      count = count;
    } else {
      count = count - 1;
    }
    $scope.emrReminderObj.hrsCount = count;
  }
  
  $scope.decreamentMinCount = function (count) {
    
    if (count === 1) {
      count = count;
    } else {
      count = count - 1;
    }
    $scope.emrReminderObj.minCount = count;
  }
  
  $scope.showConfirm = function () {
      
      var confirmPopup = $ionicPopup.confirm({
        title: 'Save Emergency Reminder',
        template: 'Are you sure?',
        buttons: [
          { text: '<i class="icon ion-close-circled"></i>',
            onTap: function(e) { return false; }
          },
          { text: '<i class="icon ion-checkmark-circled""></i>',
            onTap: function(e) { $ionicViewSwitcher.nextDirection('back'); $scope.appGoBack(); }
          }
        ]
      });
      
      IonicClosePopupService.register(confirmPopup);
  };
  
})

.directive('groupedRadio', function() {
  return {
    restrict: 'A',
    require: 'ngModel',
    scope: {
      model: '=ngModel',
      value: '=groupedRadio'
    },
    link: function(scope, element, attrs, ngModelCtrl) {
      element.addClass('button');
      element.on('click', function(e) {
        scope.$apply(function() {
          ngModelCtrl.$setViewValue(scope.value);
        });
      });

      scope.$watch('model', function(newVal) {
        element.removeClass('button-positive');
        if (newVal === scope.value) {
          element.addClass('button-positive');
        }
      });
    }
  };
})