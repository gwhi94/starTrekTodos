var app = angular.module('todoApp', []);

app.controller('MainController', ['$scope', function ($scope) {


    $scope.completedTodos = [];


    $scope.todos = [
        { text: "Build todo app in angular", done: false },
        { text: "Do christmas shopping", done: false }
    ];

    $scope.getNumTodos = function () {
        return $scope.todos.length;
    };

    $scope.addTodo = function () {
        $scope.datetime = new Date();
        if ($scope.addTodoText == undefined) {
            alert("Todo cant be blank");
        } else {
            $scope.todos.push({ text: $scope.addTodoText, done: false, dt: $scope.datetime });
            $scope.addTodoText = "";
        }
    };

    $scope.removeTodo = function (index) {
        $scope.todos.splice(index, 1);

        $scope.completedTodos = [];
        for (let i = 0; i < $scope.todos.length; i++) {
            if ($scope.todos.done == true) {
                $scope.completedTodos.push($scope.todos[i]);
            }
        }

    }
    $scope.doneTodo = function (index) {
        $scope.datetime = new Date();
        $scope.todos[index].done = true;
        $scope.todos[index].dt = $scope.datetime;
        $scope.completedTodos.push($scope.todos[index]);
    }
    $scope.completeAll = function () {
        $scope.datetime = new Date();
        for (let i = 0; i < $scope.todos.length; i++) {
            $scope.todos[i].done = true;
            $scope.todos[i].dt = $scope.datetime;
            $scope.completedTodos.push($scope.todos[i]);
        }

    }
    $scope.unCompleteAll = function () {
        for (let i = 0; i < $scope.completedTodos.length; i++) {
            $scope.completedTodos[i].done = false;
        }
        $scope.completedTodos = [];

    }
    $scope.getPercentage = function () {
        var total = $scope.todos.length;
        var percent = Math.floor(($scope.completedTodos.length / total) * 100);
        console.log(percent);

        if (isNaN(percent)) {
            $scope.percentage = 0;
        } else {

            $scope.percentage = percent;
        }


    }
    $scope.clearAll = function () {
        $scope.completedTodos = [];

    }



}]);



