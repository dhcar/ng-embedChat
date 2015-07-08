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