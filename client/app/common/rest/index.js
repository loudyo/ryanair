import angular from 'angular';
import Rest from './rest.provider';

export default angular.module('app.rest', [])

.provider('Rest', Rest)

.name;
