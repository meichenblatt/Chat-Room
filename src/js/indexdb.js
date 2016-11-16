(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){

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
"use strict";

},{}]},{},[1]);
