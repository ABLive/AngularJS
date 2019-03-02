'use strict';

eventsApp.controller('EventController',
    function EventController($scope) {
        
        $scope.sortorder = 'name';
        $scope.event = {
            name: 'AngularJS Boot Camp',
            date: new Date('2016/02/02'),
            time: '11:00 am',
            location: {
                address: 'ABLive Headquarters',
                city: 'Mumbai',
                province: 'Maharashtra'
            },
            imageUrl: 'img/angularjs-logo.png',
            sessions: [
                {
                    name: 'Directives Masterclass Introductory',
                    creatorName: 'John Cena',
                    duration: 1,
                    level: 'Advanced',
                    description: 'In this session you will learn how to design and use custom directives. This will help create reusable components',
                    upVoteCount: 0
                },
                {
                    name: 'Scopes for fun and profit',
                    creatorName: 'Dwayne Leverock',
                    duration: 2,
                    level: 'Introductory',
                    description: 'This session will take a closer look at scopes and its uses in the AngularJS Application',
                    upVoteCount: 0
                },
                {
                    name: 'Well Behaved Controllers',
                    creatorName: 'Phil Brooks',
                    duration: 4,
                    level: 'Intermediate',
                    description: 'Controllers are the beginning of everything AngularJS does require',
                    upVoteCount: 0
                }
            ]
        }
    
        $scope.upVoteSession = function(session) {
            session.upVoteCount++;
        };
        
        $scope.downVoteSession = function(session) {
            session.upVoteCount--;
        };
    
    }
);