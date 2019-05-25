angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    

      .state('mobileAppTraining', {
    url: '/page1',
    templateUrl: 'templates/mobileAppTraining.html',
    controller: 'mobileAppTrainingCtrl'
  })

  .state('androidPage', {
    url: '/page2',
    templateUrl: 'templates/androidPage.html',
    controller: 'androidPageCtrl'
  })

  .state('androidPage2', {
    url: '/page4',
    templateUrl: 'templates/androidPage2.html',
    controller: 'androidPage2Ctrl'
  })

  .state('contackUs', {
    url: '/page5',
    templateUrl: 'templates/contackUs.html',
    controller: 'contackUsCtrl'
  })

$urlRouterProvider.otherwise('/page1')


});