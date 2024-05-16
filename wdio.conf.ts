import type { Options } from '@wdio/types'
export const config: Options.Testrunner = {

    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            project: './tsconfig.json',
            transpileOnly: true
        }
    },

    hostname: 'hub.lambdatest.com',
    port: 80,
    path: '/wd/hub',
    baseUrl: "https://hub.lambdatest.com",

    user: "your username",
    key: "your accesskey",

    services: [
        [
            "lambdatest",
            {
                tunnel: false
            }
        ]
    ],
    
    specs: [
        './test/specs/*.ts'
    ],

    maxInstances: 1,
    capabilities: [{
        browserName: "Chrome",
        browserVersion: "124",
        
        'lt:options': { // Corrected syntax for LambdaTest options
            username: "your username",
            accessKey: "your accesskey",
            platformName: "Windows 10",
            project: "Untitled",
            w3c: true,
            plugin: "node_js-webdriverio"
        }
    }],

    logLevel: 'info',

    bail: 0,

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 1,

    framework: 'mocha',

    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },
}
