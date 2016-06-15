angular.module('starter')

.controller('HistoryCtrl', function($scope, $firebaseArray, IonicClosePopupService, $ionicPopup, $state, $filter){
   
   var monitorPopup;
   
   $scope.monitorObject = {};
   
   $scope.monitorObject.date = $filter('date')($scope.currentDate, "longDate");
   $scope.monitorObject.fromDate = new Date((new Date($scope.monitorObject.date)).getFullYear(), (new Date($scope.monitorObject.date)).getMonth(), (new Date($scope.monitorObject.date)).getDate() - 7);
   $scope.monitorObject.toDate = new Date((new Date($scope.monitorObject.date)).getFullYear(), (new Date($scope.monitorObject.date)).getMonth(), (new Date($scope.monitorObject.date)).getDate() + 7);
   
   $scope.getLastWeekDate = function (todaysDate) {
     var lastWeekDate = new Date((new Date(todaysDate)).getFullYear(), (new Date(todaysDate)).getMonth(), (new Date(todaysDate)).getDate() - 7);
     $scope.monitorObject.date =  $filter('date')(lastWeekDate, "longDate");
     $scope.monitorObject.fromDate = new Date((new Date($scope.monitorObject.date)).getFullYear(), (new Date($scope.monitorObject.date)).getMonth(), (new Date($scope.monitorObject.date)).getDate() - 7);
     $scope.monitorObject.toDate = new Date((new Date($scope.monitorObject.date)).getFullYear(), (new Date($scope.monitorObject.date)).getMonth(), (new Date($scope.monitorObject.date)).getDate() + 7); 
  };
  
  $scope.getNextWeekDate = function (todaysDate) {
     var nextWeekDate = new Date((new Date(todaysDate)).getFullYear(), (new Date(todaysDate)).getMonth(), (new Date(todaysDate)).getDate() + 7);
     $scope.monitorObject.date =  $filter('date')(nextWeekDate, "longDate");
     $scope.monitorObject.toDate = new Date((new Date($scope.monitorObject.date)).getFullYear(), (new Date($scope.monitorObject.date)).getMonth(), (new Date($scope.monitorObject.date)).getDate() + 7); 
     $scope.monitorObject.fromDate = new Date((new Date($scope.monitorObject.date)).getFullYear(), (new Date($scope.monitorObject.date)).getMonth(), (new Date($scope.monitorObject.date)).getDate() - 7); 
  };
  
  $scope.hideNextWeekDate = function () {
    var todaysDate = $filter('date')($scope.currentDate, "longDate");
    if (todaysDate === $scope.monitorObject.date) {
      return false;
    } else {
      return true;
    }
  };
   
   $scope.filterData = function (item, fromD, toD) {
     var itemDate = new Date((new Date(item.date)).getFullYear(), (new Date(item.date)).getMonth(), (new Date(item.date)).getDate());
     var fromDate = new Date((new Date(fromD)).getFullYear(), (new Date(fromD)).getMonth(), (new Date(fromD)).getDate());
     var toDate = new Date((new Date(toD)).getFullYear(), (new Date(toD)).getMonth(), (new Date(toD)).getDate());
     if (fromDate < itemDate && itemDate <= toDate) {
       return true;
     } else {
       return false;
     }
   }
   
   $scope.toJsDate = function(str){
      if(!str)return null;
      return new Date(str);
   };
   
   $scope.data = {
    showDelete: false
   };
   
   $scope.monitorFunctions = [
     {
       name: 'Medicine Intake',
       url: '#/app/monitor/medicine-intake'
     },
     {
       name: 'Meal Intake',
       url: '#/app/monitor/meal-intake'
     },
     {
       name: 'Blood Sugar',
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
   ];
   
   $scope.showAddMonitorPopup = function () {
      
   monitorPopup = $ionicPopup.show({
        title: 'Add',
        templateUrl: 'add-monitor-popup.html',
        scope: $scope,
         buttons: [
          { text: 'Cancel',
            onTap: function(e) { return false; }
          },
        ]
      });
      
      IonicClosePopupService.register(monitorPopup);
   };
   
   $scope.closeMonitorPopup = function () {
      monitorPopup.close();
   };
  
  $scope.editHistoryItem = function (item) {
    $state.go(item.state, {key: item.$id});
  }
  
   $scope.deleteHistoryItem = function (item) {
     $scope.monitor.$remove(item);
   }
})
