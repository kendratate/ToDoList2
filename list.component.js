/**
 * Created by kendratate on 1/4/17.
 */
(function() {
    angular.module('myListApp')
        .component('list',{
            controller: listController,
            templateUrl: "list/list.component.html"

    });

    function listController($stateParams, $rootScope, $state, ListService, $mdToast) {
        var vm = this;
        document.getElementById('todoItem').focus();
        vm.lists = ListService.getList();
        vm.listTitle = $stateParams.title;


        vm.createItem = function () {
            if (vm.lists[vm.listTitle].indexOf(vm.item) === -1 && vm.item) {
                vm.lists[vm.listTitle].push({name:vm.item,check:false});
                ListService.saveList(vm.lists);
            }
            vm.item = '';
            document.getElementById('todoItem').focus();
        };
        vm.deleteItem = function (item) {
            var currentList = vm.lists[vm.listTitle];
            currentList.splice(currentList.indexOf(item), 1);
            ListService.saveList(vm.lists);
        };

        vm.checkItem = function (e,item) {
            var currentList = vm.lists[vm.listTitle];
            currentList[currentList.indexOf(item)].check = true;

            e.currentTarget.style.opacity = "1.0";
            $mdToast.showSimple('Good work checking off that task!');
            ListService.saveList(vm.lists);

        };

        vm.clearChecked = function () {
            var currentList = vm.lists[vm.listTitle];

            // iterate through array backwards so splice doesn't change length of array and mess up loop
            for (var i = currentList.length - 1; i >= 0; i--){
                if (currentList[i].check == true){
                    currentList.splice(i, 1);
                }
            }

            ListService.saveList(vm.lists);
        };

    }
})();


