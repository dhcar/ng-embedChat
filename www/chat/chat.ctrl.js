angular.module('embedChat')

.controller('ChatCtrl', function($scope, $rootScope){

	console.log('CHAT CTRL');

	$scope.chat = "hello world";

	$scope.messages = [
		{
			'sender': 'David',
			'text': 'These are messages'
		}
	];

	// $rootScope.classes = ['AMS 120A', 'BIO 20B', 'LIT 7'];

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

	$scope.files = [
		{	
			'title':'File_bro.png',
			'type': 'image',
			'thumbnail': 'someUrl',
			'date': 'someTimestamp'
		},
		{
			'title':'Not_pr0n.avi',
			'type': 'video',
			'thumbnail': 'someOtherUrl',
			'date': 'someTimestamp'
		}

	];

	// var XMPP = require('stanza.io'); // if using browserify
	// var client = XMPP.createClient({
	//     jid: 'anon@anon.lance.im',
	//     transport: 'websocket',
	//     wsURL: 'wss://lance.im:5281/xmpp-websocket'
	//     // (or `boshURL` if using 'bosh' as the transport)
	// });

	// console.log(client);
	
	// client.on('session:started', function () {
	//     client.getRoster();
	//     client.sendPresence();
	//     window.alert('wss xmpp success');
	//     client.disconnect();
	// });
	
	// client.connect();

	var client = XMPP.createClient({
	    jid: 'user@localhost',
	    transport: 'bosh',
	    // wsURL: 'wss://lance.im:5281/xmpp-websocket'
	    boshURL: 'http://192.168.99.100:5222'
	    // (or `boshURL` if using 'bosh' as the transport)
	});

	console.log(client);
	
	client.on('session:started', function () {
		console.log(client);
	    client.getRoster();
	    client.sendPresence();
	    window.alert('wss xmpp success');
	    client.disconnect();
	});
	
	client.connect();

});