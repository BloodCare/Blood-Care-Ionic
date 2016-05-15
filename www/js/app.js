// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])

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
  
  .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })
  
  .state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  })
  
  .state('tab.manager', {
    url: '/manager',
    views: {
      'tab-manager': {
        templateUrl: 'templates/tab-manager.html',
        controller: 'ManagerCtrl'
      }
    }
  })
  
  .state('tab.settings', {
    url: '/settings',
    views: {
      'tab-settings': {
        templateUrl: 'templates/tab-settings.html',
        controller: 'SettingsCtrl'
      }
    }
  });
  
  
  $stateProvider
  
  .state('profile', {
    url: '/tab/settings/profile',
    templateUrl: 'templates/profile.html',
    controller: 'ProfileCtrl'
  })
  .state('feedback', {
    url: '/tab/settings/feedback',
    templateUrl: 'templates/feedback.html',
    controller: 'FeedbackCtrl'
  })
  .state('about', {
    url: '/tab/settings/about',
    templateUrl: 'templates/about.html',
    controller: 'AboutCtrl'
  })
  .state('reminder', {
    url: '/tab/manager/reminder',
    templateUrl: 'templates/reminder.html',
    controller: 'ReminderCtrl'
  })
  .state('monitor', {
    url: '/tab/manager/monitor',
    templateUrl: 'templates/monitor.html',
    controller: 'MonitorCtrl'
  })
  .state('dietPlanner', {
    url: '/tab/manager/diet-planner',
    templateUrl: 'templates/dietPlanner.html',
    controller: 'DietPlannerCtrl'
  });
  
  $urlRouterProvider.otherwise('/tab/home');
})

.controller('HomeCtrl', function($scope){
  
})

.controller('ManagerCtrl', function($scope){
  
})

.controller('SettingsCtrl', function($scope){
  
})

.controller('ProfileCtrl', function($scope){
  
})

.controller('FeedbackCtrl', function($scope){
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
})

.controller('AboutCtrl', function($scope){
  
})

.controller('ReminderCtrl', function($scope){
  
})

.controller('MonitorCtrl', function($scope){
  
})

.controller('DietPlannerCtrl', function($scope){
  
});