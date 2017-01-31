angular.module('myListApp')
    .service('ListService', function($localStorage) {
        this.getList = function() {
            if ($localStorage.list === undefined){
                this.list = {};
            }

            else {
                // pull from local storage
                this.list = $localStorage.list;
            }
            return this.list;
        };

        this.saveList = function(list) {
            // Save to local storage
            this.list = $localStorage.list = list;

        };
    });
