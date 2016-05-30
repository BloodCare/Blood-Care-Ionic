// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ionic.closePopup', 'ngCordova'])

.run(function($ionicPlatform) {
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
  })
  
  .state('app.manager', {
    url: '/manager',
    views: {
      'menuContent': {
        templateUrl: 'templates/manager.html',
        controller: 'ManagerCtrl'
      }
    }
  })
  
  .state('app.settings', {
    url: '/settings',
    views: {
      'menuContent': {
        templateUrl: 'templates/settings.html',
        controller: 'SettingsCtrl'
      }
    }
  });
  
  $stateProvider
  
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
    url: '/app/manager/reminder',
    templateUrl: 'templates/reminder.html',
    controller: 'ReminderCtrl'
  })
  .state('monitor', {
    url: '/app/manager/monitor',
    templateUrl: 'templates/monitor.html',
    controller: 'MonitorCtrl'
  })
  .state('dietPlanner', {
    url: '/app/manager/diet-planner',
    templateUrl: 'templates/dietPlanner.html',
    controller: 'DietPlannerCtrl'
  })
  .state('appointment', {
    url: '/app/manager/reminder/appointment',
    templateUrl: 'templates/appointment.html',
    controller: 'AppointmentCtrl'
  })
  .state('generalReminder', {
    url: '/app/manager/reminder/general',
    templateUrl: 'templates/generalReminder.html',
    controller: 'GeneralReminderCtrl'
  })
  .state('emergencyReminder', {
    url: '/app/manager/reminder/emergency',
    templateUrl: 'templates/emergencyReminder.html',
    controller: 'EmergencyReminderCtrl'
  })
  .state('medicineIntake', {
    url: '/app/manager/monitor/medicine-intake',
    templateUrl: 'templates/medicineIntake.html',
    controller: 'MedicineIntakeCtrl'
  })
  .state('mealIntake', {
    url: '/app/manager/monitor/meal-intake',
    templateUrl: 'templates/mealIntake.html',
    controller: 'MealIntakeCtrl'
  })
  .state('bloodSugar', {
    url: '/app/manager/monitor/blood-sugar',
    templateUrl: 'templates/bloodSugar.html',
    controller: 'BloodSugarCtrl'
  })
  .state('physicalWorkout', {
    url: '/app/manager/monitor/physical-workout',
    templateUrl: 'templates/physicalWorkout.html',
    controller: 'PhysicalWorkoutCtrl'
  })
  .state('weight', {
    url: '/app/manager/monitor/weight',
    templateUrl: 'templates/weight.html',
    controller: 'WeightCtrl'
  })
  .state('foodDatabase', {
    url: '/app/manager/diet-planner/food-database',
    templateUrl: 'templates/foodDatabase.html',
    controller: 'FoodDatabaseCtrl'
  })
  .state('favouriteList', {
    url: '/app/manager/diet-planner/favourite-list',
    templateUrl: 'templates/favouriteList.html',
    controller: 'FavouriteListCtrl'
  })
  .state('foodReciepies', {
    url: '/app/manager/diet-planner/food-reciepies',
    templateUrl: 'templates/foodReciepies.html',
    controller: 'FoodReciepiesCtrl'
  })
  .state('medicineName', {
    url: '/app/manager/monitor/medicine-intake/medicine-name',
    templateUrl: 'templates/medicine-add-edit-delete.html',
    controller: 'MedicineNameCtrl'
  })
  .state('mealCategory', {
    url: '/app/manager/monitor/medicine-intake/meal-category',
    templateUrl: 'templates/meal-add-edit-delete.html',
    controller: 'MealCategoryCtrl'
  })
  .state('workoutType', {
    url: '/app/manager/monitor/medicine-intake/workout-type',
    templateUrl: 'templates/workout-add-edit-delete.html',
    controller: 'WorkoutTypeCtrl'
  });

  $urlRouterProvider.otherwise('/app/home');
})

.controller('AppCtrl', function($scope, $ionicHistory, $ionicViewSwitcher, $filter){
  
  var today = new Date();
  var minDate = new Date(1900, 01 - 1, 01);
  $scope.currentDate = today;
  $scope.minimunDate = minDate;
  
  $scope.appGoBack = function () {
    $ionicViewSwitcher.nextDirection('back');
    $ionicHistory.goBack();
  };
  
  $scope.genderList = [
    'Male',
    'Female',
    'Other'
  ];
  
  $scope.diabetesTypes = [
    'Type 1',
    'Type 2'
  ];
  
  $scope.bloodSugarUnits = [
    'mmo/l',
    'mg/dL'
  ];
  
  $scope.weightUnits = [
    'Kgs',
    'Pounds'
  ];
  
  $scope.medicineList = [
    {
      name: 'Insulin',
      unit: 'ml'
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
  
  $scope.mealCategories = [
    'Breakfast',
    'Lunch',
    'Dinner',
    'Supper'
  ];
  
  $scope.workoutTypes = [
    'Running',
    'Walking',
    'Sit-ups'
  ];
  
  $scope.profileObject = {};
  $scope.feedbackObject = {};
  $scope.medicineIntakeObject = {};
  $scope.mealIntakeObject = {}; 
  $scope.bloodSugarObject = {};
  $scope.phyWorkoutObject = {};
  $scope.weightObject = {};
  
  $scope.profileObject.gender = $scope.genderList[1];
  $scope.profileObject.diabetes = $scope.diabetesTypes[0];
  
  $scope.medicineIntakeObject.medicineName = $scope.medicineList[0].name;
  $scope.medicineIntakeObject.medicineUnit = $scope.medicineList[0].unit;
  
  $scope.mealIntakeObject.mealCategory = $scope.mealCategories[0];
  
  $scope.bloodSugarObject.bloodSugarUnit = $scope.bloodSugarUnits[0];
  
  $scope.phyWorkoutObject.workoutName = $scope.workoutTypes[0];
  
  $scope.weightObject.weightUnit = $scope.weightUnits[0];
  
})

.controller('HomeCtrl', function($scope, $ionicSlideBoxDelegate){
  $scope.navSlide = function (index) {
    $ionicSlideBoxDelegate.slide(index, 500);
  }
})

.controller('ManagerCtrl', function($scope){
  
  $scope.managerGroups = [
    
    {
      name: 'Reminder',
      url: '#/app/manager/reminder',
      groupIcon: 'ion-ios-calendar-outline',
      items: [
        {
          name: 'Appointment',
          url: '#/app/manager/reminder/appointment'
        },
        {
          name: 'General Reminder',
          url: '#/app/manager/reminder/general'
        },
        {
          name: 'Emergency Reminder',
          url: '#/app/manager/reminder/emergency'
        }
      ] 
    },
    
    {
      name: 'Monitor',
      url: '#/app/manager/monitor',
      groupIcon: 'ion-ios-list-outline',
      items: [
        {
          name: 'Medicine Intake',
          url: '#/app/manager/monitor/medicine-intake'
        },
        {
          name: 'Meal Intake',
          url: '#/app/manager/monitor/meal-intake'
        },
        {
          name: 'Blood Sugar Level',
          url: '#/app/manager/monitor/blood-sugar'
        },
        {
          name: 'Physical Workout',
          url: '#/app/manager/monitor/physical-workout'
        },
        {
          name: 'Weight',
          url: '#/app/manager/monitor/weight'
        }
      ]
    },
    
    {
      name: 'Diet Planner',
      url: '#/app/manager/diet-planner',
      groupIcon: 'ion-ios-nutrition-outline',
      items: [
        {
          name: 'Food Database',
          url: '#/app/manager/diet-planner/food-database'
        },
        {
          name: 'Favourite List',
          url: '#/app/manager/diet-planner/favourite-list'
        },
        {
          name: 'Healthy Food Reciepies',
          url: '#/app/manager/diet-planner/food-reciepies'
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
              //console.log('Value: ' + $scope.feedbackObject.ratings);
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

.controller('MedicineIntakeCtrl', function($scope, IonicClosePopupService, $ionicPopup, $filter){

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
    $scope.medicineIntakeObject.medicineName = name;
    $scope.medicineIntakeObject.medicineUnit = unit;
    medsPopup.close();
  }
  
})

.controller('MealIntakeCtrl', function($scope, IonicClosePopupService, $ionicPopup, $filter){
  
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
    $scope.mealIntakeObject.mealCategory = name;
    mealPopup.close();
  };
  
})

.controller('BloodSugarCtrl', function($scope, $filter){

    $scope.bloodSugarObject.MinDate = $filter('date')($scope.minimunDate, "yyyy-MM-dd");
    $scope.bloodSugarObject.MaxDate = $filter('date')($scope.currentDate, "yyyy-MM-dd");
    
})

.controller('PhysicalWorkoutCtrl', function($scope, $filter, IonicClosePopupService, $ionicPopup){
  
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
      $scope.phyWorkoutObject.workoutName = name;
      workoutPopup.close();
    };
    
})

.controller('WeightCtrl', function($scope, $filter){
  
  $scope.weightObject.MaxDate = $filter('date')($scope.currentDate, "yyyy-MM-dd");
  $scope.weightObject.MinDate = $filter('date')($scope.minimunDate, "yyyy-MM-dd");
  
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
      
     $scope.mealCatObj.mealCatName = "";
      
     addMealCatPopup = $ionicPopup.show({
        title: 'Add Meal Category',
        templateUrl: 'add-mealCategory-popup.html',
        scope: $scope,
        buttons: [
          { text: '<i class="icon ion-close-circled"></i>',
            onTap: function(e) { return false; }
          },
          { text: '<i class="icon ion-checkmark-circled""></i>',
            onTap: function(e) { 
              if (!$scope.mealCatObj.mealCatName) {
                e.preventDefault();
              } else {
                $scope.mealCategories.push($scope.mealCatObj.mealCatName);
                return false;
              }
            }
          }
        ]
      });
      
      IonicClosePopupService.register(addMealCatPopup);
    };
    
    $scope.showEditMealCat = function (item) {
      
      $scope.mealCatObj.editMealCat = item;
      
     editMealCatPopup = $ionicPopup.show({
        title: 'Edit Meal Category',
        templateUrl: 'edit-mealCategory-popup.html',
        scope: $scope,
        buttons: [
          { text: '<i class="icon ion-close-circled"></i>',
            onTap: function(e) { return false; }
          },
          { text: '<i class="icon ion-checkmark-circled""></i>',
            onTap: function(e) { 
              if (!$scope.mealCatObj.editMealCat) {
                e.preventDefault();
              } else {
                /*
                if ($scope.selectedMedicineName == item.name && $scope.selectedMedicineUnit == item.unit) {
                  $scope.selectedMedicineName = $scope.medsObj.editMedsName;
                  $scope.selectedMedicineUnit = $scope.medsObj.editMedsUnit;
                }*/
                
                var index = $scope.mealCategories.indexOf(item);
                $scope.mealCategories[index] = $scope.mealCatObj.editMealCat;
                return false;
              }
            }
          }
        ]
      });
      
      IonicClosePopupService.register(editMealCatPopup);
    };
    
    $scope.showDeleteMealCat = function (item) {
      
      $scope.mealCatObj.deleteMealCat = item;
      
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
      
      $scope.medsObj.medsname = "";
      $scope.medsObj.medsunit = "";
      
     addMedsPopup = $ionicPopup.show({
        title: 'Add Medicine',
        templateUrl: 'add-medicine-popup.html',
        scope: $scope,
        buttons: [
          { text: '<i class="icon ion-close-circled"></i>',
            onTap: function(e) { return false; }
          },
          { text: '<i class="icon ion-checkmark-circled""></i>',
            onTap: function(e) { 
              if (!$scope.medsObj.medsname || !$scope.medsObj.medsunit) {
                e.preventDefault();
              } else {
                var obj = { name: $scope.medsObj.medsname,
                            unit: $scope.medsObj.medsunit};
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

      $scope.medsObj.editMedsName = item.name;
      $scope.medsObj.editMedsUnit = item.unit;
      
     editMedsPopup = $ionicPopup.show({
        title: 'Edit Medicine',
        templateUrl: 'edit-medicine-popup.html',
        scope: $scope,
        buttons: [
          { text: '<i class="icon ion-close-circled"></i>',
            onTap: function(e) { return false; }
          },
          { text: '<i class="icon ion-checkmark-circled""></i>',
            onTap: function(e) { 
              if (!$scope.medsObj.editMedsName || !$scope.medsObj.editMedsUnit) {
                e.preventDefault();
              } else {
                /*
                if ($scope.selectedMedicineName == item.name && $scope.selectedMedicineUnit == item.unit) {
                  $scope.selectedMedicineName = $scope.medsObj.editMedsName;
                  $scope.selectedMedicineUnit = $scope.medsObj.editMedsUnit;
                }*/
                
                var index = $scope.medicineList.indexOf(item);
                $scope.medicineList[index].name = $scope.medsObj.editMedsName;
                $scope.medicineList[index].unit = $scope.medsObj.editMedsUnit;
                return false;
              }
            }
          }
        ]
      });
      
      IonicClosePopupService.register(editMedsPopup);
    };
  
    $scope.showDeleteMeds = function (item) {
      
      $scope.medsObj.deleteMedsName = item.name;
      $scope.medsObj.deleteMedsUnit = item.unit;
      
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
      
     addWorkoutTypePopup = $ionicPopup.show({
        title: 'Add Workout Type',
        templateUrl: 'add-workoutType-popup.html',
        scope: $scope,
        buttons: [
          { text: '<i class="icon ion-close-circled"></i>',
            onTap: function(e) { return false; }
          },
          { text: '<i class="icon ion-checkmark-circled""></i>',
            onTap: function(e) { 
              if (!$scope.workoutObj.workoutType) {
                e.preventDefault();
              } else {
                $scope.workoutTypes.push($scope.workoutObj.workoutType);
                return false;
              }
            }
          }
        ]
      });
      
      IonicClosePopupService.register(addWorkoutTypePopup);
    };
    
    $scope.showEditWorkoutType = function (item) {
      
      $scope.workoutObj.editworkoutType = item;
      
     editWorkoutTypePopup = $ionicPopup.show({
        title: 'Edit Workout Type',
        templateUrl: 'edit-workoutType-popup.html',
        scope: $scope,
        buttons: [
          { text: '<i class="icon ion-close-circled"></i>',
            onTap: function(e) { return false; }
          },
          { text: '<i class="icon ion-checkmark-circled""></i>',
            onTap: function(e) { 
              if (!$scope.workoutObj.editworkoutType) {
                e.preventDefault();
              } else {
                /*
                if ($scope.selectedMedicineName == item.name && $scope.selectedMedicineUnit == item.unit) {
                  $scope.selectedMedicineName = $scope.medsObj.editMedsName;
                  $scope.selectedMedicineUnit = $scope.medsObj.editMedsUnit;
                }*/
                
                var index = $scope.workoutTypes.indexOf(item);
                $scope.workoutTypes[index] = $scope.workoutObj.editworkoutType;
                return false;
              }
            }
          }
        ]
      });
      
      IonicClosePopupService.register(editWorkoutTypePopup);
    };
    
    $scope.showDeleteWorkoutType = function (item) {
      
      $scope.workoutObj.deleteworkoutType = item;
      
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
            }
          }
        ]
      });
      
      IonicClosePopupService.register(deleteWorkoutTypePopup);
    };
    
})

.controller('DietPlannerCtrl', function($scope){
  
})

.controller('FoodDatabaseCtrl', function($scope){
  
})

.controller('FavouriteListCtrl', function($scope){
  
})

.controller('FoodReciepiesCtrl', function($scope){
  
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
      var date = new Date($scope.genReminderObj.Date);
      var time = new Date($scope.genReminderObj.Time).getTime();
      var reminderDateTime = new Date(date.setTime(date.getTime() + time));
      reminderDateTime.setHours(reminderDateTime.getHours() + 1);
      
      $cordovaLocalNotification.add({
        id: "12345",
        date: reminderDateTime,
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