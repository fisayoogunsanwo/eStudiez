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
            controller: "myCtrl"
        })
        .when("/Student",{
            templateUrl: "student.html",
           controller: "myCtrl"
        })
        .when("/Parent_Guardian",{
            templateUrl: "Parent_Guadian.html",
            controller: "myCtrl"
        }).
      otherwise({
		  templateUrl:"Welcome.html",
	});
})

app.controller('myCtrl',function($scope,$location){
    $scope.same ="";
    $scope.clear = ()=> {
    $scope.name="";
    }
    $scope.shows = function (){
    let name = $scope.name;
    $scope.infors = "";
    
        if($scope.same == "Teacher" && name != ""){
            sessionStorage.setItem("key",name);
            $scope.name = sessionStorage.getItem("key")
            $location.path("/Teacher")
            welcome.innerHTML = "Hello, Teacher "+name+"!";
        }
        else if($scope.same == "Student" && name != ""){
            
            sessionStorage.setItem("key",name);
            $scope.name = sessionStorage.getItem("key")
            $location.path("/Student")
            welcome.innerHTML = "Hello, Student "+name+"!";
        }
        else if($scope.same == "Parent_Guardian" && name != ""){
            sessionStorage.setItem("key",name);
            $scope.name = sessionStorage.getItem("key");
            $location.path("/Parent_Guardian")
            welcome.innerHTML = "Hello,  "+name+"!";
        }
        else{
            $scope.infors = "Please enter your name and select your category";
            sessionStorage.setItem("key","");
            $scope.name = sessionStorage.getItem("key");
            $location.path("/")
        }
    }
});
