'use strict';

module.exports.config = {
    directConnect: true,
    specs: [
        'spec.js'
    ],
    capabilities: {
        'browserName': 'chrome'
    },
    baseUrl: 'http://todomvc.com/examples/angularjs/#/',
    onPrepare() {
        browser.driver.manage().window().maximize();
    }
}
