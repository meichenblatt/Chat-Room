// if ('serviceWorker' in navigator) {
  
//   navigator.serviceWorker.register('/sw.js', { scope: './'}).then(function(reg) {
//       console.log("service worker working");  
//   });

// } else {
//   console.log("this browser does NOT support service worker");
// }

var config = {
    apiKey: "AIzaSyC3wYEORqwLjAL86GigMhLxF1Xx-66pZPg",
    authDomain: "udacity-5c1b2.firebaseapp.com",
    databaseURL: "https://udacity-5c1b2.firebaseio.com",
    storageBucket: "udacity-5c1b2.appspot.com",
    messagingSenderId: "535051604332"
  };
firebase.initializeApp(config);

var ChatApp = angular.module('ChatApp', ['ngRoute', 'ngResource', 'firebase']);

ChatApp.config(function ($routeProvider, $locationProvider) {
    $routeProvider
    .when('/', {
        controller:  'chatController',
        templateUrl: 'tmpl/chat.html'
    })
    .when('/about', {
        controller:  'aboutController',
        templateUrl: 'tmpl/about.html'
    })
    .when('/contact', {
        controller:  'contactController',
        templateUrl: 'tmpl/contact.html'
    })
    .otherwise({
        redirect: '/'
    });
    $locationProvider.html5Mode(true);
});


ChatApp.service('messages', function($firebaseArray){

  var messages = firebase.database().ref().child('Chat');

  this.getAll = function getAll(){
    return $firebaseArray(messages);
  }

});