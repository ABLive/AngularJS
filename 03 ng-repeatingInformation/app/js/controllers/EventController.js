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
            imageUrl: 'img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Directives Masterclass',
                    creatorName: 'John Cena',
                    duration: '1 hr',
                    level: 'Advanced',
                    description: 'In this session you will learn how to design and use custom directives. This will help create reusable components'
                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName: 'Dwayne Leverock',
                    duration: '30 mins',
                    level: 'Introductory',
                    description: 'This session will take a closer look at scopes and its uses in the AngularJS Application'
                },
                {
                    name: 'Well Behaved Controllers',
                    creatorName: 'Phil Brooks',
                    duration: '2 hours',
                    level: 'Intermediate',
                    description: 'Controllers are the beginning of everything AngularJS does require'
                }
            ]
        }
    }
);