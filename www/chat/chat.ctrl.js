angular.module('embedChat')

.controller('ChatCtrl', function($scope){

	$scope.chat = "hello world";

	$scope.messages = [
		{
			'sender': 'David',
			'text': 'These are messages'
		}
	];

	$scope.message = {
		sender: 'Broseph Stalin',
		text: 'Wow much message'
	};

	$scope.sendMessage = function(){
		$scope.messages.push($scope.message);
		$scope.message = {
			sender: $scope.message.sender
		};
	};

	// var XMPP = require('stanza.io'); // if using browserify
	var client = XMPP.createClient({
	    jid: 'dh@example.com',
	    password: 'pass',
	    // If you have a .well-known/host-meta.json file for your
	    // domain, the connection transport config can be skipped.
	    transport: 'websocket',
	    wsURL: 'wss://localhost:5269'
	    // (or `boshURL` if using 'bosh' as the transport)
	});

	console.log(client);
	
	client.on('session:started', function () {
	    client.getRoster();
	    client.sendPresence();
	});
	
	client.on('chat', function (msg) {
	    client.sendMessage({
	      to: msg.from,
	      body: 'You sent: ' + msg.body
	    });
	});
	
	client.connect();

	// TODO - abstract this to a directive
	// directive would watch ng-repeat as messages came in and change
	// 	an embed attr to true/false/finished where it would do embedding logic

	// $scope.$watch('messages.length',function(){
	// 	console.log('msg');
	// 	$scope.$evalAsync(function(){
	// 		$(function(){
	//             $("a.embed").oembed();
	//         });
	// 	});
	// });

});