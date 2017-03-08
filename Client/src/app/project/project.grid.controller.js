(function() {
	'use strict';

	angular
		.module('app')
		.controller('ProjectGridController', ProjectGridController);

	ProjectGridController.$inject = ['ProjectFactory', '$stateParams']

	/* @ngInject */
	function ProjectGridController(ProjectFactory, $stateParams) {
		var vm = this;
		vm.title = 'ProjectGridController';

		activate();

		////////////////////////

		function activate() {
			ProjectFactory.getProjectData().then(
				function(projects) {
					vm.project = projects;
				}
			);
		}
	}

})();