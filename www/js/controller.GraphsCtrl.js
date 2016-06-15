angular.module('starter')

.controller('GraphsCtrl', function($scope, $filter, $firebaseArray, $firebaseObject){
  
  $scope.monitorObject = {};
  $scope.monitorObject.date = $filter('date')($scope.currentDate, "longDate");
  
  $scope.getPreviousDate = function (todaysDate) {
     var previousDate =  new Date((new Date($scope.monitorObject.date)).getFullYear(), (new Date($scope.monitorObject.date)).getMonth(), (new Date($scope.monitorObject.date)).getDate() - 1);
     $scope.monitorObject.date = $filter('date')(previousDate, "longDate");
  };
  
  $scope.getNextDate = function (todaysDate) {
     var nextDate =  new Date((new Date($scope.monitorObject.date)).getFullYear(), (new Date($scope.monitorObject.date)).getMonth(), (new Date($scope.monitorObject.date)).getDate() + 1);
     $scope.monitorObject.date = $filter('date')(nextDate, "longDate");
  };
  
  $scope.hideNextDate = function () {
    var todaysDate = $filter('date')($scope.currentDate, "longDate");
    if (todaysDate == $scope.monitorObject.date) {
      return false;
    } else {
      return true;
    }
  };
  
  
  /* 
  ZC.mobile = true;
    
    $scope.myJson = {
      gui:{
        "behaviors":[ 
            {
              id: "Reload", 
              text:"Reload", 
              enabled:"all" 
            },
            {
              id: "SaveAsImage",
              text:"View as PNG",
              enabled:"none"
            },
            {
              id: "DownloadPDF", 
              text:"Download PDF",
              enabled: "none" 
            },
            {
              id: "DownloadSVG",
              enabled: "none"
            },
            {
              id: "Print",
              enabled: "none"
            },
            {
              id: "ViewSource", 
              enabled: "none"
            },
            {
              id: "ViewAll",
              enabled: "none"
            },
            {
              id: "About ZingChart", 
              enabled: "none"
            }
        ],
      },
      graphset:[
        {
          "type": "mixed",
          "plot": {
            "tooltip": {
              "text": "%vt"
            }
          },
          "scale-x": {
            "zooming":true,
          },
          "scale-y": {
            "zooming":true
          },
          "series": [
          {
            "type": "line",
            "values": [],
            "text": "Blood Sugar"
          },
          {
            "type": "scatter",
            "values": [],
            "text": "Scatter"
          }]
        }
      ]
    };
    */
})