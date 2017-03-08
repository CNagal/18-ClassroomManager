(function() {
    'use strict';

    angular
        .module('app')
        .factory('ProjectFactory', ProjectFactory);

    ProjectFactory.$inject = ['$http', '$q'];

    /* @ngInject */
    function ProjectFactory($http, $q) {
        var service = {
            getProjectData: getProjectData,
            // create: create,
            // update: update,
            // getById: getById,
            // delete: delete
        };
        return service;

        ////////////////

        function getProjectData() {
            var deferred = $q.defer();

            $http.get('http://localhost:65014/api' + '/projects').then(
                function(response) {
                    deferred.resolve(response.data);
                },
                function(error) {
                    deferred.reject(err);
                }

            );
            return deferred.promise;
        }
    
        // function create(project) {
        //     var deferred = $q.defer();

        //     $http.post('http://localhost:65014/api').then(
        //         function(response) {
        //             deferred.resolve(response.data);
        //         },
        //         function(error) {
        //             deferred.reject(err);
        //         }
        //     );
        //     return deferred.promise;
        // }

        // function update(project) {
        //     var deferred = $q.defer();

        //     $http.put('http://localhost:65014/api').then(
        //         function(response) {
        //             deferred.resolve(response.data);
        //         },
        //         function(error) {
        //             deferred.reject(err);
        //         }
        //     );
        //     return deferred.promise;
        // }

        // function delete(project) {
        //     var deferred = $q.defer();

        //     $http.delete('http://localhost:65014/api').then(
        //         function(response) {
        //             deferred.resolve(response.data);
        //         },
        //         function(error) {
        //            deferred.reject(err); 
        //         }
        //     );
        //     return deferred.promise;
        // }
    }

})();





























// (function() {
//   'use strict';

//   angular
//     .module('app')
//     .factory('projectService', projectService);

//   projectService.$inject = ['$http', '$q', 'apiUrl'];

//   /* @ngInject */
//   function projectService($http, $q, apiUrl) {
//     var service = {
//       create: create,
//       getAll: getAll,
//       getById: getById,
//       update: update,
//       remove: remove
//     };
//     return service;

//     ////////////////

//     function create(project) {
//       var defer = $q.defer();

//       $http.post(apiUrl + 'projects', project).then(
//         function(response) {
//           defer.resolve(response.data);
//         },
//         function(error) {
//           console.log(error);
//           defer.reject(error);
//         }
//       );

//       return defer.promise;
//     }

//     function getAll() {
//       var defer = $q.defer();

//       $http.get(apiUrl + 'projects').then(
//         function(response) {
//           defer.resolve(response.data);
//         },
//         function(error) {
//           console.log(error);
//           defer.reject(error);
//         }
//       );

//       return defer.promise;
//     }

//     function getById(id) {
//         var defer = $q.defer();
        
//         $http.get(apiUrl + 'projects/' + id).then(
//             function(response) {
//                 defer.resolve(response.data);
//             },
//             function(error) {
//                 console.log(error);
//                 defer.reject(error);
//             }
//         );
        
//         return defer.promise;
//     }

//     function update(project) {
//       var defer = $q.defer();

//       $http.put(apiUrl + 'projects/' + project.projectId, project).then(
//         function(response) {
//           defer.resolve();
//         },
//         function(error) {
//           console.log(error);
//           defer.reject(error);
//         }
//       );

//       return defer.promise;
//     }

//     function remove(project) {
//       var defer = $q.defer();

//       $http.delete(apiUrl + 'projects/' + project.projectId).then(
//         function(response) {
//           defer.resolve(response.data);
//         },
//         function(error) {
//           console.log(error);
//           defer.reject(error);
//         }
//       );

//       return defer.promise;
//     }
//   }
// })();