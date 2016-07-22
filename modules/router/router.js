'use strict';

var dashboard = require('pages/dashboard/dashboard');
var tables = require('pages/tables/tables');

// 广告管理
var adsList = require('pages/ads/list');
var adsEdit = require('pages/ads/edit');

// 模板管理
var templateList = require('pages/template/list');
var templateEdit = require('pages/template/edit');





/**
 * Route configuration for the adcms.app module.
 */
angular.module('adcms.app').config(function ($stateProvider, $urlRouterProvider) {

    // For unmatched routes
    $urlRouterProvider.otherwise('/');

    // Application routes
    $stateProvider
        .state('index', dashboard)
        .state('tables', tables)
        .state('adsList',adsList)
        .state('adsEdit',adsEdit)
        .state('templateList',templateList)
        .state('templateEdit',templateEdit);
});