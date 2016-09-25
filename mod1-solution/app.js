(function () {
'use strict';

angular.module('LunchCheck', [])

.controller('LunchCheckController', LunchCheckController );
LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {
$scope.checkHowManyItems = function () {
  if ($scope.inputtext === undefined || $scope.inputtext === 0)
  {
    $scope.Msg = "Please enter data first";
  }
    else {
      var InputItems = $scope.inputtext.split(",");

      for (var i=0, j= InputItems.length; i < j; i++)

      if (InputItems.length <= 3)
      {
        $scope.Msg = "Enjoy";
      }
      else
      {
        $scope.Msg = "Too much";
      }
    }

}
  }

})();
