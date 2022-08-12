var app = angular.module('myApp',["ngRoute"]);

let welcome = document.getElementById("Welcome");

app.config(function($routeProvider){
    $routeProvider
        .when("/",{
            templateUrl:"Welcome.html",
            controller: "myCtrl"
        })
        .when("/Teacher",{
            templateUrl: "Teacher_page.html",
        })
        .when("/Student",{
            templateUrl: "student.html",
        })
        .when("/Parent_Guardian",{
            templateUrl: "Parent_Guadian.html",
        })
})

app.controller('myCtrl',function($scope,$location){
    $scope.same ="";
    $scope.clear = ()=> {
    $scope.name="";
    }
    $scope.shows = function (){
    let name = $scope.name;
    
    
        if($scope.same == "Teacher"){
            sessionStorage.setItem("key",name);
            $scope.name = sessionStorage.getItem("key")
            $location.path("/Teacher")
            welcome.innerHTML = "Hello, Teacher "+name+"!";
        }
        else if($scope.same == "Student"){
            
            sessionStorage.setItem("key",name);
            $scope.name = sessionStorage.getItem("key")
            $location.path("/Student")
            welcome.innerHTML = "Hello, Student "+name+"!";
        }
        else if($scope.same == "Parent_Guardian"){
            sessionStorage.setItem("key",name);
            $scope.name = sessionStorage.getItem("key");
            $location.path("/Parent_Guardian")
            welcome.innerHTML = "Hello,  "+name+"!";
        }
        else{
            sessionStorage.setItem("key","");
            $scope.name = sessionStorage.getItem("key");
            $location.path("/")
        }
    }
});