// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ui.date', 'ionic.closePopup'])

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
  
  $urlRouterProvider.otherwise('/app/home');
})

.controller('AppCtrl', function($scope, $ionicHistory, $ionicViewSwitcher){
  
  $scope.appGoBack = function () {
    $ionicViewSwitcher.nextDirection('back');
    $ionicHistory.goBack();
  };
  
  /*
  $scope.groups = [
    {
      name: 'Home',
      items: [],
      url: '#/app/home'
    },
    {
      name: 'Manager',
      items: [
        {
          name: 'Reminder',
          url: '#/app/manager/reminder'
        },
        {
          name: 'Monitor',
          url: '#/app/manager/monitor'
        },
        {
          name: 'Diet Planner',
          url: '#/app/manager/diet-planner'
        }
      ],
      url: '#/app/manager'
    },
    {
      name: 'Settings',
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
      ],
      url: '#/app/settings'
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
  };*/
  
})

.controller('HomeCtrl', function($scope, $ionicSlideBoxDelegate){
  $scope.navSlide = function (index) {
    $ionicSlideBoxDelegate.slide(index, 500);
  }
})

.controller('ManagerCtrl', function($scope){
  
})

.controller('SettingsCtrl', function($scope){
  
})

.controller('ProfileCtrl', function($scope, $ionicPopup, $state, IonicClosePopupService, $ionicViewSwitcher){
  
   $scope.dateOptions = {
      dateFormat: 'dd-mm-yy',
      changeMonth:true,
      changeYear:true,
      minDate: new Date(1900, 01 - 1, 01),
      maxDate: 'today',
      yearRange: '1900:c' 
    };
    
    $scope.profileData = {
      gender: 'female',
      diabetes: 'type1',
      weightUnit: 'kgs'
    }
    
    $scope.showConfirm = function () {
      
      var confirmPopup = $ionicPopup.confirm({
        title: 'Save Profile',
        template: 'Are you sure?',
        buttons: [
          { text: '<i class="icon ion-close-circled"></i>',
            onTap: function(e) { return false; }
          },
          { text: '<i class="icon ion-checkmark-circled""></i>',
            onTap: function(e) { $ionicViewSwitcher.nextDirection('back'); $state.go('app.settings'); }
          }
        ]
      });
      
      IonicClosePopupService.register(confirmPopup);
    };
    
})

.controller('FeedbackCtrl', function($scope, $ionicPopup, $state, IonicClosePopupService){
  
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
            onTap: function(e) { $state.go('app.settings'); }
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

.controller('DietPlannerCtrl', function($scope){
  
})

.controller('AppointmentCtrl', function($scope, $ionicPopup, $state, IonicClosePopupService){
  $scope.showConfirm = function () {
      
      var confirmPopup = $ionicPopup.confirm({
        title: 'Save Appointment',
        template: 'Are you sure?',
        buttons: [
          { text: '<i class="icon ion-close-circled"></i>',
            onTap: function(e) { return false; }
          },
          { text: '<i class="icon ion-checkmark-circled""></i>',
            onTap: function(e) { $state.go('reminder'); }
          }
        ]
      });
      
      IonicClosePopupService.register(confirmPopup);
  };
})

.controller('GeneralReminderCtrl', function($scope, $ionicPopup, $state, IonicClosePopupService){
  
  $scope.showConfirm = function () {
      
      var confirmPopup = $ionicPopup.confirm({
        title: 'Save General Reminder',
        template: 'Are you sure?',
        buttons: [
          { text: '<i class="icon ion-close-circled"></i>',
            onTap: function(e) { return false; }
          },
          { text: '<i class="icon ion-checkmark-circled""></i>',
            onTap: function(e) { $state.go('reminder'); }
          }
        ]
      });
      
      IonicClosePopupService.register(confirmPopup);
  };
  
})

.controller('EmergencyReminderCtrl', function($scope, $ionicPopup, $state, IonicClosePopupService){
  
  $scope.showConfirm = function () {
      
      var confirmPopup = $ionicPopup.confirm({
        title: 'Save Emergency Reminder',
        template: 'Are you sure?',
        buttons: [
          { text: '<i class="icon ion-close-circled"></i>',
            onTap: function(e) { return false; }
          },
          { text: '<i class="icon ion-checkmark-circled""></i>',
            onTap: function(e) { $state.go('reminder'); }
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