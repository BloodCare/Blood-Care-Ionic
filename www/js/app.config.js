angular.module('starter')

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
  })
  .state('editMedicineIntake', {
    url: '/app/monitor/medicine-intake/:key',
    templateUrl: 'templates/medicineIntake.html',
    controller: 'EditMedicineIntakeCtrl'
  })
  .state('editMealIntake', {
    url: '/app/monitor/meal-intake/:key',
    templateUrl: 'templates/mealIntake.html',
    controller: 'EditMealIntakeCtrl'
  })
  .state('editBloodSugar', {
    url: '/app/monitor/blood-sugar/:key',
    templateUrl: 'templates/bloodSugar.html',
    controller: 'EditBloodSugarCtrl'
  })
  .state('editPhysicalWorkout', {
    url: '/app/monitor/physical-workout/:key',
    templateUrl: 'templates/physicalWorkout.html',
    controller: 'EditPhysicalWorkoutCtrl'
  })
  .state('editWeight', {
    url: '/app/monitor/weight/:key',
    templateUrl: 'templates/weight.html',
    controller: 'EditWeightCtrl'
  });

  $urlRouterProvider.otherwise('/app/home');
})