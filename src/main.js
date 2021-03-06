define(function(require, exports, module) {
    'use strict';

    var Engine = require('famous/core/Engine');
    var AppView = require('views/AppView');
    var AppConfig = require('data/AppConfig');
    require('famous/inputs/FastClick');

    var mainContext = Engine.createContext();
    var appView = new AppView(AppConfig);

    mainContext.setPerspective(1000);
    mainContext.add(appView);
});
