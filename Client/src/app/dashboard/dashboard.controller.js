(function() {
    'use strict';

    angular
        .module('app')
        .controller('DashboardController', DashboardController);

    DashboardController.$inject = ['AssignmentFactory', 'StudentFactory', 'ProjectFactory', '$stateParams'];

    // @ngInject
    function DashboardController(AssignmentFactory, StudentFactory, ProjectFactory, $stateParams) {
        var vm = this;
        vm.title = 'DashboardController';

        getStudents();
        getProjects();
        getAssignments();

        /////////////////////


        function getStudents() {
            StudentFactory.getAll().then(
                function(data) {
                    vm.students = data;
                }
            );
        }

        function getProjects() {
            ProjectFactory.getProjectData().then(
            	function(data) {
            		vm.projects = data;
            	}
            );
        }

        function getAssignments() {
        	AssignmentFactory.getAssignmentData().then(
        		function(data) {
        			vm.assignments = data;
        		}
        	);	
        }

    }
})();








// function *nameoffunction* () {
//    Dashboadfactory.*functionoffactory*().then(
//    function (data) {
//        vm.students = data;
//    }
// );
// }
