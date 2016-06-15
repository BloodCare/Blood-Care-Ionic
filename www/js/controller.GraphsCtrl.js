angular.module('starter')

.controller('GraphsCtrl', function($scope, $filter, $firebaseArray, $firebaseObject){
  
  $scope.monitorGraphs = $filter('orderBy')($scope.monitor, ['-date', 'time']);
  $scope.monitorObject = {};
  $scope.monitorObject.date = $filter('date')($scope.currentDate, "longDate");
  
  $scope.getPreviousDate = function (todaysDate) {
     var previousDate =  new Date((new Date(todaysDate)).getFullYear(), (new Date(todaysDate)).getMonth(), (new Date(todaysDate)).getDate() - 1);
     $scope.monitorObject.date = $filter('date')(previousDate, "longDate");
     $scope.myJson.graphset[0].series[0].values = getBloodSugarData($scope.monitorGraphs, $scope.monitorObject.date);
  };
  
  $scope.getNextDate = function (todaysDate) {
     var nextDate =  new Date((new Date(todaysDate)).getFullYear(), (new Date(todaysDate)).getMonth(), (new Date(todaysDate)).getDate() + 1);
     $scope.monitorObject.date = $filter('date')(nextDate, "longDate");
     $scope.myJson.graphset[0].series[0].values = getBloodSugarData($scope.monitorGraphs, $scope.monitorObject.date);
  };
  
  $scope.hideNextDate = function () {
    var todaysDate = $filter('date')($scope.currentDate, "longDate");
    if (todaysDate == $scope.monitorObject.date) {
      return false;
    } else {
      return true;
    }
  };
  
  var getAverage = function (fullData) {
    var total = 0;
    for (var i = 0; i < fullData.length; i++) {
      total = total + fullData[i][1];
    }
    var avg = total / fullData.length;
    return avg.toFixed(2);
  }
  
  var getBloodSugarData = function (data, date) {
    
    var dataSeries = [];
    
    angular.forEach(data, function (record, index) {
        var selectedDate = $filter('date')(new Date(date), "yyyy-MM-dd");
        var recordDate = $filter('date')(new Date(record.date), "yyyy-MM-dd");
        var recordTime = $filter('date')(new Date(record.time), "hh:mm a");
        if (selectedDate === recordDate && record.title === "Blood Sugar") {
          dataSeries.push([recordTime, record.value]);
        }
    })

   if (isNaN(dataSeries)) {
     $scope.avgBloodSugar = getAverage(dataSeries);
   } else {
     $scope.avgBloodSugar = 0;
   }
    
   return dataSeries;
   
  }
  
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
          "background-color":"#000000",
          "alpha": 0,
          "plot": {
            "tooltip": {
              "text": "Blood Sugar: %vt "+ $scope.bloodSugarObject.unit +"<br> Time: %kt",
              "color":"#5A00FF"
            }
          },
          "scale-x": {
            "zooming":true,
            "line-color":"#FFFFFF",
            "item":{
                "color":"#FFFFFF"
            }
          },
          "scale-y": {
            "zooming":true,
            "line-color":"#FFFFFF",
            "item":{
                "color":"#FFFFFF"
            }
          },
          "series": [
          {
            "type": "line",
            "values": getBloodSugarData($scope.monitorGraphs, $scope.monitorObject.date),
            "line-color":"#FFF772",
            "text": "Blood Sugar",
            "marker":{
                 "background-color":"#FFF772",
                 "border-color":"#FFF772",
                 "shadow":false
            }
          },
          {
            "type": "scatter",
            "values": [],
            "text": "Scatter"
          }]
        }
      ]
    };
    
})