angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Pasta al pesto', id: 1, price: '2,3', evaluation: 4 , src: 'img/no-photo.png'},
      { title: 'Pasta a forno', id: 2, price: '2,3', evaluation: 4,  src: 'img/pizza2.jpg' },
      { title: 'Angelo', id: 3, price: '2,2', evaluation: 2,  src: 'img/no-photo.png' }
  ];
        $scope.RepeatStar= function(){
           alert("ciao mondo");
        };

})

.controller('PlaylistCtrl', function($scope, $stateParams) {
});
