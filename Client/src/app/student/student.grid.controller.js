(function() {
	'use strict';

	angular
		.module('app')
		.controller('StudentGridController', StudentGridController);

	StudentGridController.$inject = ['StudentFactory', '$stateParams']

	/* @ngInject */
	function StudentGridController(StudentFactory, $stateParams) {
		var vm = this;
		vm.title = 'StudentGridController';
		vm.studentId = $stateParams.studentId

		// properties
		vm.students = {};
		vm.blankStudent = {};

		// methods
		// vm.getAll = getAll;
        // vm.create = create;
        // vm.update = update;
        // vm.getById = getById;
        // vm.deleteStudent = deleteStudent;

		activate();

		///////////////////

		function activate() {	
			StudentFactory.getAll().then(
				function(students) {
					vm.student = students;
				}
			);	
		}
		
		function create(student) {
			StudentFactory.create(vm.students).then(
				function() {
					toastr.success('Student Added')
				}
			);
		}

	}

})();