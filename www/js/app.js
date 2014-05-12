angular.module('starter', ['ionic'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller("MainController", [ '$scope', function($scope) {

	$scope.data = {
		"launched" : "No"
	};

	$scope.reportAppLaunched = function() {
		console.log("App Launched Via Custom URL");

		$scope.$apply( function() {
			$scope.data.launched = "Yes";
		});
	}

}]);

function handleOpenURL(url) {

    var body = document.getElementsByTagName("body")[0];
    var mainController = angular.element(body).scope();
    mainController.reportAppLaunched(url);

}