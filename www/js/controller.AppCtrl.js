angular.module('starter')

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
  
  /*---------------------------------------- Monitor Data ----------------------------------------*/
  
  var monitorRef = new Firebase("https://blood-care-ionic.firebaseio.com/monitor");
  $scope.monitor = $firebaseArray(monitorRef);
  
  /*-------------------------------------------------------------------------------------------------------------------*/
  
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
