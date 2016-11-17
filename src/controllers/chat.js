ChatApp.controller('chatController', function($scope, $rootScope, messages,$timeout, $firebaseArray) {
	
	if($rootScope.loggedin === undefined){
		$rootScope.loggedin = false;
	}


    if (navigator.geolocation) {
    	navigator.geolocation.getCurrentPosition(function(position) {
		    var lat = position.coords.latitude;
		    var lng = position.coords.longitude;
		    var geocoder = new google.maps.Geocoder();	    
		    var latlng = new google.maps.LatLng(lat, lng);

		    geocoder.geocode({'latLng': latlng}, function(results, status) {	      
		      if (status == google.maps.GeocoderStatus.OK) {
		        if (results[1]) {
		          $rootScope.location = results[1].formatted_address;
		        }	        
		      } 
		    });
		});
	} 
	


	messages.getAll().then(function(result){

		$scope.messages = result;
		$timeout(function() {
			$scope.$apply();
			var objDiv = document.getElementById("main-box");
			objDiv.scrollTop = objDiv.scrollHeight;
		}, 0);
	
	});
	 
	
	$scope.login = function(){
		
		$rootScope.name = this.name;
		$rootScope.loggedin = true;
	}

	$scope.addMessage = function(){
		var d = new Date();

		var obj = {}
			
	    obj.message = this.newMessage;
	    obj.name = $rootScope.name;	
	    obj.time = d.getTime();

		$scope.messages.$add(obj).then(function(newm){
			var objDiv = document.getElementById("main-box");
			objDiv.scrollTop = objDiv.scrollHeight;
		}, function(e){
             console.log(e);
		});

	}

	$scope.validate = function(inputID){

		if (document.getElementById(inputID).validationMessage) {
			document.getElementById(inputID).style.borderColor = "red";
		} else{
			document.getElementById(inputID).style.borderColor = "#32CD32";
		}
	};

});

