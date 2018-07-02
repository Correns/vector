/**!
 *
 *  Copyright 2015 Netflix, Inc.
 *
 *     Licensed under the Apache License, Version 2.0 (the "License");
 *     you may not use this file except in compliance with the License.
 *     You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 *     Unless required by applicable law or agreed to in writing, software
 *     distributed under the License is distributed on an "AS IS" BASIS,
 *     WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *     See the License for the specific language governing permissions and
 *     limitations under the License.
 *
 */

(function () {
    'use strict';

    var mainTemplate = require('./main/main.html')

    // we need this webpacked as it is loaded from main.html as an attrib template-url
    require('./components/dashboard/dashboard.html')

    /**
    * @name config
    * @desc Define valid application routes
    */
    function routeConfig($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: mainTemplate,
            controller: 'MainController',
            controllerAs: 'vm',
            title: 'Vector',
            reloadOnSearch: false,
            resolve: {
                'widgets': function (defaultWidgets) {
                    return defaultWidgets;
                },
                'embed': function () {
                  return false;
                }
            }
        }).when('/embed', {
            templateUrl: mainTemplate,
            controller: 'MainController',
            controllerAs: 'vm',
            title: 'Vector',
            reloadOnSearch: false,
            resolve: {
                'widgets': function (defaultWidgets) {
                    return defaultWidgets;
                },
                'embed': function () {
                  return true;
                }
            }
        }).when('/empty', {
            templateUrl: mainTemplate,
            controller: 'MainController',
            controllerAs: 'vm',
            title: 'Vector',
            reloadOnSearch: false,
            resolve: {
                'widgets': function (emptyWidgets) {
                    return emptyWidgets;
                },
                'embed': function () {
                  return false;
                }
            }
        }).when('/container', {
            templateUrl: mainTemplate,
            controller: 'MainController',
            controllerAs: 'vm',
            title: 'Vector',
            reloadOnSearch: false,
            resolve: {
                'widgets': function (containerWidgets) {
                    return containerWidgets;
                },
                'embed': function () {
                  return false;
                }
            }
        })
        .otherwise('/');
    }

    angular
        .module('vector')
        .config(routeConfig);

})();
