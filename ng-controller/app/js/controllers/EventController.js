'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {
        
        $scope.event = {
            name: 'AngularJS Boot Camp',
            date: '02/02/2016',
            time: '11:00 am',
            location: {
                address: 'ABLive Headquarters',
                city: 'Mumbai',
                province: 'Maharashtra'
            },
            imageUrl: 'img/angularjs-logo.png'
        }
    }
);