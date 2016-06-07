// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ionic.closePopup', 'ngCordova', 'firebase'])

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
  })
  .state('graphs', {
    url: '/app/monitor/graphs',
    templateUrl: 'templates/monitorGraphs.html',
    controller: 'GraphsCtrl'
  })
  .state('history', {
    url: '/app/monitor/history',
    templateUrl: 'templates/monitorHistory.html',
    controller: 'HistoryCtrl'
  });

  $urlRouterProvider.otherwise('/app/home');
})

.controller('AppCtrl', function($scope, $ionicHistory, $ionicViewSwitcher, $filter, $firebaseArray){
  
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
  
  /*------------------------------------ Medicine Intake Data ---------------------------------------*/
  
  var medicineNameRef = new Firebase("https://blood-care-ionic.firebaseio.com/medicineList");
  
  $scope.medicineList = $firebaseArray(medicineNameRef);
  
  $scope.medicineIntakeObject = {};
  
  $scope.loadDefaultMedicineName = function () {
    
    $scope.medicineList.$loaded().
    then(function (medicines) {
      
      var defaultMedicineIndex = $scope.medicineList.$keyAt(0);
      var defaultMedicine = medicines.$getRecord(defaultMedicineIndex);

      $scope.medicineIntakeObject.name = defaultMedicine.name;
      $scope.medicineIntakeObject.unit = defaultMedicine.unit;
      
    });
    
  };
  
  $scope.loadDefaultMedicineName();
  
  /*------------------------------------------------------------------------------------------------------------------------*/
  
  /*------------------------ Meal Intake Data -----------------*/
  
  var mealCategoriesRef = new Firebase("https://blood-care-ionic.firebaseio.com/mealCategories");
  
  $scope.mealCategories = $firebaseArray(mealCategoriesRef);

  $scope.mealIntakeObject = {}; 
  
  $scope.loadDefaultMealCategories = function () {
    
    $scope.mealCategories.$loaded().
    then(function (categories) {
      
      var defaultMealCategoryIndex = $scope.mealCategories.$keyAt(0);
      var defaultMealCategory = categories.$getRecord(defaultMealCategoryIndex);

      $scope.mealIntakeObject.name = defaultMealCategory.name;
    });
    
  };
  
  $scope.loadDefaultMealCategories();

  $scope.mealIntakeObject.unit = "gm of Carbs";
  
  /*------------------------------------------------------------------*/
  
  /*------------------------ Blood Sugar Data ---------------------*/
  
  var bloodSugarUnitsRef = new Firebase("https://blood-care-ionic.firebaseio.com/bloodSugarUnits");
  
  $scope.bloodSugarUnits = $firebaseArray(bloodSugarUnitsRef);
  
  $scope.bloodSugarObject = {};
  
  $scope.loadDefaultBloodSugarUnits = function () {
    
    $scope.bloodSugarUnits.$loaded().
    then(function (units) {
      
      var defaultBloodSugarUnitIndex = $scope.bloodSugarUnits.$keyAt(0);
      var defaultBloodSugarUnit = units.$getRecord(defaultBloodSugarUnitIndex);

      $scope.bloodSugarObject.unit = defaultBloodSugarUnit.name;
    });
    
  };
  
  $scope.loadDefaultBloodSugarUnits();
  
  /*------------------------------------------------------------------*/
  
  /*------------------------------ Weight Data ---------------------------*/
  
  var weightUnitsRef = new Firebase("https://blood-care-ionic.firebaseio.com/weightUnits");
  
  $scope.weightUnits = $firebaseArray(weightUnitsRef);
  
  $scope.weightObject = {};
  
  $scope.loadDefaultWeightUnits = function () {
    
    $scope.weightUnits.$loaded().
    then(function (units) {
      
      var defaultWeightUnitIndex = $scope.weightUnits.$keyAt(0);
      var defaultWeightUnit = units.$getRecord(defaultWeightUnitIndex);

      $scope.weightObject.unit = defaultWeightUnit.name;
    });
    
  };
  
  $scope.loadDefaultWeightUnits();
  
  /*----------------------------------------------------------------------*/
  
  /*------------------------- Physical Workout Data ----------------------*/
  
  var workoutTypesRef = new Firebase("https://blood-care-ionic.firebaseio.com/workoutTypes");
  
  $scope.workoutTypes = $firebaseArray(workoutTypesRef);

  $scope.phyWorkoutObject = {};

  $scope.loadDefaultWorkoutTypes = function () {
    
    $scope.workoutTypes.$loaded().
    then(function (types) {
      
      var defaultWorkoutTypeIndex = $scope.workoutTypes.$keyAt(0);
      var defaultWorkoutType = types.$getRecord(defaultWorkoutTypeIndex);

      $scope.phyWorkoutObject.name = defaultWorkoutType.name;
    });
    
  };
  
  $scope.loadDefaultWorkoutTypes();
  
  /*------------------------------------------------------------------------------*/

  $scope.getReminderDateTime = function (inputDate, inputTime) {
    var date = new Date(inputDate);
    var time = new Date(inputTime).getTime();
    var reminderDateTime = new Date(date.setTime(date.getTime() + time));
    reminderDateTime.setHours(reminderDateTime.getHours() + 1);
    return reminderDateTime;
  };
  
  $scope.getCurrentTime = function () {
    var hours = new Date().getHours();
    var mins = new Date().getMinutes();
    return new Date(1970, 0, 1, hours, mins, 0);
  }
  
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

.controller('MonitorCtrl', function($scope, $state, $ionicViewSwitcher){
  $scope.navigate = function () {
    $ionicViewSwitcher.nextDirection('back');
    $state.go('app.home');
  }
})

.controller('MedicineIntakeCtrl', function($scope, IonicClosePopupService, $ionicPopup, $filter, $ionicViewSwitcher, $firebaseArray){

  var medsPopup;
  var confirmPopup;

  $scope.medicineIntakeObject.title = "Medicine Intake";
  $scope.medicineIntakeObject.notes = "";
  $scope.medicineIntakeObject.MinDate = $filter('date')($scope.minimunDate, "yyyy-MM-dd");
  $scope.medicineIntakeObject.MaxDate = $filter('date')($scope.currentDate, "yyyy-MM-dd");
  $scope.medicineIntakeObject.date = new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate());
  $scope.medicineIntakeObject.time = $scope.getCurrentTime();
  
  var addMedicineIntake = function (medicineTitle, medicineName, medicineValue, medicineUnit, medicineDate, medicineTime, medicineNotes) {
    var medsDate = $filter('date')(medicineDate, "yyyy-MM-dd");
    var medicineIntakeRef = new Firebase("https://blood-care-ionic.firebaseio.com/monitor/" + medsDate);
    $scope.medicineIntake = $firebaseArray(medicineIntakeRef);
    $scope.medicineIntake.$add({
      title: medicineTitle,
      name: medicineName,
      value: medicineValue,
      unit: medicineUnit,
      date: new Date(medicineDate).toDateString(),
      time: new Date(medicineTime).toString(),
      notes: medicineNotes
    });
  };
  
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
     
       confirmPopup = $ionicPopup.confirm({
          title: 'Save Medicine Intake',
          template: 'Are you sure?',
          buttons: [
            { text: '<i class="icon ion-close-circled"></i>',
              onTap: function(e) { return false; }
            },
            { text: '<i class="icon ion-checkmark-circled""></i>',
              onTap: function(e) {
                addMedicineIntake($scope.medicineIntakeObject.title,
                                  $scope.medicineIntakeObject.name,
                                  $scope.medicineIntakeObject.value,
                                  $scope.medicineIntakeObject.unit,
                                  $scope.medicineIntakeObject.date,
                                  $scope.medicineIntakeObject.time,
                                  $scope.medicineIntakeObject.notes);
                $ionicViewSwitcher.nextDirection('back'); $scope.appGoBack();
              }
            }
          ]
        });

      IonicClosePopupService.register(confirmPopup);
  };
  
})

.controller('MealIntakeCtrl', function($scope, IonicClosePopupService, $ionicPopup, $filter, $ionicViewSwitcher, $firebaseArray){
  
  var mealPopup;
  
  $scope.mealIntakeObject.title = "Meal Intake";
  $scope.mealIntakeObject.notes = "";
  $scope.medicineIntakeObject.MinDate = $filter('date')($scope.minimunDate, "yyyy-MM-dd");
  $scope.mealIntakeObject.MaxDate = $filter('date')($scope.currentDate, "yyyy-MM-dd");
  $scope.mealIntakeObject.date = new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate());
  $scope.mealIntakeObject.time = $scope.getCurrentTime();
  
  var addMealIntake = function (mealTitle, mealName, mealValue, mealUnit, mealDate, mealTime, mealNotes) {
    var mealsDate = $filter('date')(mealDate, "yyyy-MM-dd");
    var mealIntakeRef = new Firebase("https://blood-care-ionic.firebaseio.com/monitor/" + mealsDate);
    $scope.mealIntake = $firebaseArray(mealIntakeRef);
    $scope.mealIntake.$add({
      title: mealTitle,
      name: mealName,
      value: mealValue,
      unit: mealUnit,
      date: new Date(mealDate).toDateString(),
      time: new Date(mealTime).toString(),
      notes: mealNotes
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
                            $scope.mealIntakeObject.notes);
              $ionicViewSwitcher.nextDirection('back'); $scope.appGoBack();
            }
          }
        ]
      });
      
      IonicClosePopupService.register(confirmPopup);
  };
  
})

.controller('BloodSugarCtrl', function($scope, $filter, IonicClosePopupService, $ionicPopup, $ionicViewSwitcher, $firebaseArray){
    
    $scope.bloodSugarObject.title = "Blood Sugar";
    $scope.bloodSugarObject.name = "Blood Sugar";
    $scope.bloodSugarObject.notes = "";
    $scope.bloodSugarObject.MinDate = $filter('date')($scope.minimunDate, "yyyy-MM-dd");
    $scope.bloodSugarObject.MaxDate = $filter('date')($scope.currentDate, "yyyy-MM-dd");
    $scope.bloodSugarObject.date = new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate());
    $scope.bloodSugarObject.time = $scope.getCurrentTime();
    
    var addBloodSugar = function (bloodSugarTitle, bloodSugarName, bloodSugarValue, bloodSugarUnit, bloodSugarDate, bloodSugarTime, bloodSugarNotes) {
      var bsDate = $filter('date')(bloodSugarDate, "yyyy-MM-dd");
      var bloodSugarRef = new Firebase("https://blood-care-ionic.firebaseio.com/monitor/" + bsDate);
      $scope.bloodSugar = $firebaseArray(bloodSugarRef);
      $scope.bloodSugar.$add({
        title: bloodSugarTitle,
        name: bloodSugarName,
        value: bloodSugarValue,
        unit: bloodSugarUnit,
        date: new Date(bloodSugarDate).toDateString(),
        time: new Date(bloodSugarTime).toString(),
        notes: bloodSugarNotes
      });
    };
    
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
              addBloodSugar($scope.bloodSugarObject.title,
                            $scope.bloodSugarObject.name,
                            $scope.bloodSugarObject.value,
                            $scope.bloodSugarObject.unit,
                            $scope.bloodSugarObject.date,
                            $scope.bloodSugarObject.time,
                            $scope.bloodSugarObject.notes);
              $ionicViewSwitcher.nextDirection('back'); $scope.appGoBack();
            }
          }
        ]
      });
      
      IonicClosePopupService.register(confirmPopup);
  };
    
})

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
  $scope.phyWorkoutObject.MinDate = $filter('date')($scope.minimunDate, "yyyy-MM-dd");
  $scope.phyWorkoutObject.MaxDate = $filter('date')($scope.currentDate, "yyyy-MM-dd");
  $scope.phyWorkoutObject.date = new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate());
  $scope.phyWorkoutObject.time = $scope.getCurrentTime();
  $scope.phyWorkoutObject.startTime = $scope.getCurrentTime();
  $scope.phyWorkoutObject.endTime = $scope.getCurrentTime();
  
  var addPhysicalWorkout = function (phyWorkoutTitle, phyWorkoutName, phyWorkoutValue, phyWorkoutUnit, phyWorkoutStartTime,
                                     phyWorkoutEndTime, phyWorkoutDate, phyWorkoutTime, phyWorkoutNotes) {
    var workoutDate = $filter('date')(phyWorkoutDate, "yyyy-MM-dd");
    var phyWorkoutRef = new Firebase("https://blood-care-ionic.firebaseio.com/monitor/" + workoutDate);
    $scope.phyWorkout = $firebaseArray(phyWorkoutRef);
    $scope.phyWorkout.$add({
      title: phyWorkoutTitle,
      name: phyWorkoutName,
      value: phyWorkoutValue,
      unit: phyWorkoutUnit,
      startTime: new Date(phyWorkoutStartTime).toString(),
      endTime: new Date(phyWorkoutEndTime).toString(),
      date: new Date(phyWorkoutDate).toDateString(),
      time: new Date(phyWorkoutTime).toString(),
      notes:phyWorkoutNotes
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
                                 $scope.phyWorkoutObject.notes);
              $ionicViewSwitcher.nextDirection('back'); 
              $scope.appGoBack(); 
            }
          }
        ]
      });
      
      IonicClosePopupService.register(confirmPopup);
  };
    
})

.controller('WeightCtrl', function($scope, $filter, IonicClosePopupService, $ionicPopup, $ionicViewSwitcher, $firebaseArray){
  
  $scope.weightObject.title ="Weight";
  $scope.weightObject.name = "Weight";
  $scope.weightObject.notes = "";
  $scope.weightObject.MaxDate = $filter('date')($scope.currentDate, "yyyy-MM-dd");
  $scope.weightObject.MinDate = $filter('date')($scope.minimunDate, "yyyy-MM-dd");
  $scope.weightObject.date = new Date((new Date()).getFullYear(), (new Date()).getMonth(), (new Date()).getDate());
  $scope.weightObject.time = $scope.getCurrentTime();
  
  var addWeight = function (weightTitle, weightName, weightValue, weightUnit, weightDate, weightTime, weightNotes) {
      var wtDate = $filter('date')(weightDate, "yyyy-MM-dd");
      var weightRef = new Firebase("https://blood-care-ionic.firebaseio.com/monitor/" + wtDate);
      $scope.weight = $firebaseArray(weightRef);
      $scope.weight.$add({
        title: weightTitle,
        name: weightName,
        value: weightValue,
        unit: weightUnit,
        date: new Date(weightDate).toDateString(),
        time: new Date(weightTime).toString(),
        notes: weightNotes
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
                        $scope.weightObject.notes);
              $ionicViewSwitcher.nextDirection('back'); $scope.appGoBack();
            }
          }
        ]
      });
      
      IonicClosePopupService.register(confirmPopup);
  };
  
})

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

.controller('MedicineNameCtrl', function($scope, IonicClosePopupService, $ionicPopup){

  var addMedsPopup;
  var editMedsPopup;
  var deleteMedsPopup;
  
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
              $scope.loadDefaultMedicineName();
              return false; 
            }
          },
          { text: '<i class="icon ion-checkmark-circled""></i>',
            onTap: function(e) { 
              
              if (!$scope.medicineIntakeObject.name || !$scope.medicineIntakeObject.unit) {
                e.preventDefault();
              } else {
                $scope.medicineList.$add({
                  name: $scope.medicineIntakeObject.name,
                  unit: $scope.medicineIntakeObject.unit
                });
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
              $scope.loadDefaultMedicineName();
              return false; 
            }
          },
          { text: '<i class="icon ion-checkmark-circled""></i>',
            onTap: function(e) { 
              if (!$scope.medicineIntakeObject.name || !$scope.medicineIntakeObject.unit) {
                e.preventDefault();
              } else {
                item.name = $scope.medicineIntakeObject.name;
                item.unit = $scope.medicineIntakeObject.unit;
                $scope.medicineList.$save(item);
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
                $scope.medicineList.$remove(item);
                $scope.loadDefaultMedicineName();
            }
          }
        ]
      });
      
      IonicClosePopupService.register(deleteMedsPopup);
    };
})

.controller('WorkoutTypeCtrl', function($scope, IonicClosePopupService, $ionicPopup){

  var addWorkoutTypePopup;
  var editWorkoutTypePopup;
  var deleteWorkoutTypePopup;
  
  $scope.showAddWorkoutType = function () {
      
      $scope.phyWorkoutObject.name = "";
      
     addWorkoutTypePopup = $ionicPopup.show({
        title: 'Add Workout Type',
        templateUrl: 'add-workoutType-popup.html',
        scope: $scope,
        buttons: [
          { text: '<i class="icon ion-close-circled"></i>',
            onTap: function(e) { 
              $scope.loadDefaultWorkoutTypes();
              return false; 
            }
          },
          { text: '<i class="icon ion-checkmark-circled""></i>',
            onTap: function(e) { 
              if (!$scope.phyWorkoutObject.name) {
                e.preventDefault();
              } else {
                $scope.workoutTypes.$add({
                  name: $scope.phyWorkoutObject.name
                });
                return false;
              }
            }
          }
        ]
      });
      
      IonicClosePopupService.register(addWorkoutTypePopup);
    };
    
    $scope.showEditWorkoutType = function (item) {
      
      $scope.phyWorkoutObject.name = item.name;
      
     editWorkoutTypePopup = $ionicPopup.show({
        title: 'Edit Workout Type',
        templateUrl: 'edit-workoutType-popup.html',
        scope: $scope,
        buttons: [
          { text: '<i class="icon ion-close-circled"></i>',
            onTap: function(e) { 
              $scope.loadDefaultWorkoutTypes();
              return false; 
            }
          },
          { text: '<i class="icon ion-checkmark-circled""></i>',
            onTap: function(e) { 
              if (!$scope.phyWorkoutObject.name) {
                e.preventDefault();
              } else {
                item.name = $scope.phyWorkoutObject.name;
                $scope.workoutTypes.$save(item);
                return false;
              }
            }
          }
        ]
      });
      
      IonicClosePopupService.register(editWorkoutTypePopup);
    };
    
    $scope.showDeleteWorkoutType = function (item) {
      
      $scope.phyWorkoutObject.name = item.name;
      
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
                $scope.workoutTypes.$remove(item);
                $scope.loadDefaultWorkoutTypes();
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

.controller('GraphsCtrl', function($scope){
  
})

.controller('HistoryCtrl', function($scope, $firebaseArray){
   var monitorRef = new Firebase("https://blood-care-ionic.firebaseio.com/monitor");
   $scope.monitor = $firebaseArray(monitorRef);
   $scope.toJsDate = function(str){
      if(!str)return null;
      return new Date(str);
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