/*
Copyright 2015 Google Inc. All rights reserved.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

'use strict';

var module = angular.module('timesketch.services', []);

var timesketchApiImplementation = function($http) {
    var BASE_URL = '/api/v1/sketches/';

    this.getView = function(sketch_id, view_id) {
        /**
         * Get a Timesketch view.
         * @param sketch_id - The id for the sketch.
         * @param view_id - The id for the view.
         * @returns A $http promise with two methods, success and error.
         */
        var resource_url = BASE_URL + sketch_id + '/views/' + view_id;
        return $http.get(resource_url)
    };

    this.saveView = function(sketch_id, name, query, filter) {
        /**
         * Save a Timesketch view.
         * @param sketch_id - The id for the sketch.
         * @param name - A name for the view.
         * @param query - A query string.
         * @param filter - A JSON string with filters and a list of indices.
         * @returns A $http promise with two methods, success and error.
         */
        var resource_url = BASE_URL + sketch_id + '/views/';
        var params = {
            name: name,
            query: query,
            filter: filter
        };
        return $http.post(resource_url, params)
    };

    this.getEvent = function(sketch_id, searchindex_id, event_id) {
        /**
         * Get a Timesketch event.
         * @param sketch_id - The id for the sketch.
         * @param searchindex_id - The id for the search index.
         * @param event_id - The id for the event.
         * @returns A $http promise with two methods, success and error.
         */
        var resource_url = BASE_URL + sketch_id + '/event/';
        var params = {
            params: {
                searchindex_id: searchindex_id,
                event_id: event_id
            }
        };
        return $http.get(resource_url, params)
    };

    this.saveEventAnnotation = function(sketch_id, type, annotation, searchindex_id, event_id) {
        /**
         * Save a Timesketch event annotation.
         * @param sketch_id - The id for the sketch.
         * @param type - The type of the annotation, e.g. comment or tag.
         * @param annotation - The content for the annotation.
         * @param searchindex_id - The id for the search index.
         * @param event_id - The id for the event.
         * @returns A $http promise with two methods, success and error.
         */
        var resource_url = BASE_URL + sketch_id + '/event/annotate/';
        var params = {
            annotation: annotation,
            annotation_type: type,
            searchindex_id: searchindex_id,
            event_id: event_id
        };
        return $http.post(resource_url, params);
    };

    this.search = function(sketch_id, query, filter) {
        /**
         * Save a Timesketch view.
         * @param sketch_id - The id for the sketch.
         * @param query - A query string.
         * @param filter - A JSON string with filters and a list of indices.
         * @returns A $http promise with two methods, success and error.
         */
        var resource_url = BASE_URL + sketch_id + '/explore/';
        var params = {
            params: {
                q: query,
                filter: filter
            }
        };
        return $http.get(resource_url, params)
    };
};

module.service('timesketchApi', timesketchApiImplementation);
