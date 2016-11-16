
// var idb = require('idb');

// const dbPromise = idb.open('ChatApp', 1, upgradeDB => {
//   upgradeDB.createObjectStore('messages', {
//       keyPath: 'id'
//   });
// });


// TransApp.factory('Messages', function($resource){
// 	return new Promise(function(resolve, reject) {

// 		dbPromise.then(function(db) {
// 		  	var tx = db.transaction('messages', 'readwrite');
// 			var table = tx.objectStore('messages');

// 		    return table.getAll();
// 		}).then(function(fromIndxDB){
// 			if(fromIndxDB.length > 0){
// 				resolve(fromIndxDB);
// 			} else {
// 				var Messages = $resource('https://udacity-5c1b2.firebaseio.com/Chat.json');

// 				Messages.get(function(messages){
// 					var S = messages.Contents.dataObjects.ScheduledStopPoint;
// 					console.log("Stations:");
// 					console.log(S);

// 					dbPromise.then(function(db) {
// 						var tx = db.transaction('messages', 'readwrite');
// 					    var table = tx.objectStore('messages');

// 					    S.forEach(function(s) {
// 					      table.put(s);
// 					    });
// 					    resolve(S);
// 					});
// 				});
// 			}

// 		});		
// 	});
	
// });




