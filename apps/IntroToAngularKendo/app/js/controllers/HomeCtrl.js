app.controller('HomeCtrl', function HomeCtrl($scope) {
    $scope.thingsOptions = {
        dataSource: {
            data: [{ name: "Thing 1", id: 1 },
                   { name: "Thing 2", id: 2 },
                   { name: "Thing 3", id: 3 }]
        },
        dataTextField: "name",
        dataValueField: "id",
        animation: {
            open: {
                effects: "zoom:in",
                duration: 300
            }
        },
        height: 2000,
        autoBind: false,
        text: "Select A Thing...",
    };
    
    $scope.thingsChange = function (e) {
    };
    
    $scope.window = {
        open: function () {
            $scope.modal.center().open();
        }
    };
});