(function() {
  'use strict';

  angular.module('LunchCheck',[])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
      $scope.lunchItems = "";
      $scope.message = "";
      $scope.messageStyle = {"color":"black"};

      $scope.clickCheckLunch = function() {
        var message = $scope.lunchItems.split(",");
        var newMsg = [];

        for (var msg in message) {
          message[msg]=message[msg].trim();
          if (message[msg].trim().length !== 0 || message[msg].trim()!=="") {
            newMsg.push(message[msg].trim());
          }
        }

        var lunchCount = newMsg.length;



        if (lunchCount <= 3 && lunchCount != 0) {
          $scope.message = "Enjoy!";
          $scope.messageStyle = {"color":"green"};
          $scope.textStyle={"border-color":"green"};
        } else if (lunchCount > 3) {
          $scope.message = "Too much!";
          $scope.messageStyle = {"color":"green"};
          $scope.textStyle={"border-color":"green"};
        } else if (lunchCount == 0) {
          $scope.message = "Please enter data first";
          $scope.messageStyle = {"color":"red"};
          $scope.textStyle={"border-color":"red"};
        }
      }
    }

})();
