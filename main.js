var app = angular.module("myApp",["ngRoute"]);


app.config(function($routeProvider){
    $routeProvider
        .when("/",{
            templateUrl : "Teacher_page.html"
        })
})


// app.controller("")

// $location