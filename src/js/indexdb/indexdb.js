
var idb = require('idb');

const dbPromise = idb.open('ChatApp', 1, upgradeDB => {
  upgradeDB.createObjectStore('messages', {
      keyPath: 'id'
  });
});


ChatApp.service('messages', function($firebaseArray){
	
	var messages = firebase.database().ref().child('Chat').orderByChild('time');

	this.getAll = function () {
		
		return getIndexDB().then(function(){
			return new Promise(function (resolve, reject) {
			var S = $firebaseArray(messages);
	
			S.$loaded().then(function() {
			    dbPromise.then(function (db) {
					var tx = db.transaction('messages', 'readwrite');
					var table = tx.objectStore('messages');

              		S.forEach(function (s) {
                		s.id = s.$id;
                		table.put(s);
              		});

              		resolve(S);
              	});
            });	
            });	
		})	
	}	
});


function getIndexDB(){
	return new Promise(function (resolve, reject) {
		dbPromise.then(function (db) {
			var tx = db.transaction('messages', 'readwrite');
			var table = tx.objectStore('messages');

			resolve(table.getAll());
		});
	});
}

