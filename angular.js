/**
 * Created by kendratate on 12/15/16.
 */
(function(){
angular.module('myListApp',['ui.router','xeditable', 'ngStorage', 'ngAnimate', 'ngSanitize', 'ngMaterial', 'ui.bootstrap'])
    .config(function($stateProvider, $urlRouterProvider) {  //ui.router always goes in config block
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('about', {
                url: '/',
                templateUrl: 'about.html',

                })
            .state('ToDo', {
                url: '/ToDo',
                template: '<todo></todo>'

            })
            .state('list', {
                url: '/list/:title',
                template: '<list></list>'

            })
    })


})();