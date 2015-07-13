angular.module('embedChat')

.controller('NavCtrl', function($scope) {

	console.log('APP CTRL');

	$scope.classes = ['AMS 120A', 'BIO 20B', 'LIT 7'];

	$scope.dags = ['Sailing club', 'Jon Snow', 'Daenerys Targaryan (bae)'];

});