app.directive('showCompleted', function () {
    return {
        restrict: 'E',
        scope: {
            info: '='
        },
        templateUrl: 'directives/showCompleted.html'
    }
});