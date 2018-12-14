# starTrekTodos (Angular)

Simple AngularJs todo application with a Star Trek theme.

### Setup
 
 ```
 run index.html in localhost
 
 ```
 ### Example Code
 
 ```JavaScript
  $scope.addTodo = function () {
        $scope.datetime = new Date();
        if ($scope.addTodoText == undefined) {
            alert("Todo cant be blank");
        } else {
            $scope.todos.push({ text: $scope.addTodoText, done: false, dt: $scope.datetime });
            $scope.addTodoText = "";
        }
    };
