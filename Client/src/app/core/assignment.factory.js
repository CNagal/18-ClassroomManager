(function() {
    'use strict';

    angular
        .module('app')
        .factory('AssignmentFactory', AssignmentFactory);

    AssignmentFactory.$inject = ['$http', '$q', 'toastr'];

    /* @ngInject */
    function AssignmentFactory($http, $q, toastr) {
        var service = {
            getAssignmentData: getAssignmentData,
            // createAssignment: createAssignment,
            // updateAssignment: updateAssignment,
            // deleteAssignemnt: deleteAssignment
        };
        return service;

        ////////////////

        function getAssignmentData() {
            var deferred = $q.defer();

            $http.get('http://localhost:65014/api' + '/assignments').then(
                function(response) {
                    deferred.resolve(response.data);
                },
                function(error) {
                    deferred.reject(err);
                }
            
            );
            return deferred.promise;
        }
    

        // function createAssignment() {
        //     var deferred = $q.defer();

        //     $http.post('http://localhost:65014/api' + assignment).then(
        //         function(response) {
        //             deferred.resolve(response.data);
        //         },
        //         function(error) {
        //             deferred.reject();
        //         }    
        //     );
        //     return deferred.promise;
        // }


        // function updateAssignment() {
        //     var deferred = $q.defer();

        //     $http.put('http://localhost:65014/api').then(
        //         function(response) {
        //             deferred.resolve(response.data);
        //         },
        //         function(error) {
        //             deferred.reject();
        //         }
        //     );
        //     return deferred.promise;
        // }


        // function deleteAssignment() {
        //     var deferred = $q.defer();

        //     $http.delete('http://localhost:65014/api').then(
        //         function(response) {
        //             deferred.resolve(response.data);
        //         },
        //         function(error) {
        //             deferred.reject();
        //         }
        //     );
        //     return deferred.promise;
        // }
    

      

    }

})();


















// (function() {
//     'use strict';

//     angular
//         .module('app')
//         .factory('assignmentService', assignmentService);

//     assignmentService.$inject = ['$http', '$q', 'apiUrl', 'toastr'];

//     /* @ngInject */
//     function assignmentService($http, $q, apiUrl, toastr) {
//         var service = {
//             create: create,
//             getAll: getAll,
//             update: update,
//             remove: remove
//         };
//         return service;

//         ////////////////

//         function create(assignment) {
//             var defer = $q.defer();
            
//             $http.post(apiUrl + 'assignments', assignment).then(
//                 function(response) {
//                     defer.resolve(response.data);
//                 },
//                 function(error) {
//                     console.log(error);
//                     toastr.error('Error assigning this project to the student.');
//                     defer.reject(error);
//                 }
//             );
            
//             return defer.promise;
//         }

//         function getAll() {
//             var defer = $q.defer();
                
//             $http.get(apiUrl + 'assignments').then(
//                 function(response) {
//                     defer.resolve(response.data);
//                 },
//                 function(error) {
//                     console.log(error);
//                     defer.reject(error);
//                 }
//             );
            
//             return defer.promise;   
//         }

//         function update(assignment) {
//             var defer = $q.defer();
            
//             $http.put(apiUrl + 'assignments/' + assignment.assignmentId, assignment).then(
//                 function(response) {
//                     defer.resolve();
//                 },
//                 function(error) {
//                     console.log(error);
//                     defer.reject(error);
//                 }
//             );
            
//             return defer.promise;
//         }

//         function remove(assignment) {
//             var defer = $q.defer();
            
//             $http.delete(apiUrl + 'assignments/' + assignment.assignmentId).then(
//                 function(response) {
//                     defer.resolve(response.data);
//                 },
//                 function(error) {
//                     console.log(error);
//                     defer.reject(error);
//                 }
//             );
            
//             return defer.promise;
//         }
//     }
// })();