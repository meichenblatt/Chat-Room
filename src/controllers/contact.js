ChatApp.controller('contactController', function($scope) {

	$scope.validate = function(inputID){

		if (document.getElementById(inputID).validationMessage) {
			document.getElementById(inputID).style.borderColor = "red";
		} else{
			document.getElementById(inputID).style.borderColor = "#32CD32";
		}

		if(inputID == "email"){
			if(document.getElementById(inputID).validationMessage){
				$scope.emailError = "Please enter a valid Email";
			} else {
				$scope.emailError = '';				
			}
		}
	};

	$scope.contactUs = function(){
		$scope.sent = true;
		$scope.cname = '';
		$scope.email = '';
		$scope.cmessage = '';
	}
});
