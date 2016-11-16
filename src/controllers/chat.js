ChatApp.controller('chatController', function($scope, $rootScope, messages) {
$rootScope.loggedin = true;
	if($rootScope.loggedin === undefined){
		$rootScope.loggedin = false;
	}
	$scope.messages = messages.getAll();
	console.log($scope.messages)

	$scope.login = function(){
		$rootScope.loggedin = true;
	}
});

