# RGraph + RequireJS

This project show how to use the app [RGraph](http://www.rgraph.net/) with [RequireJS](http://requirejs.org/).

While RGraph app doesn't provide the concept of AMD or CommonJS in your libraries and we want to keep the RequireJS load our modules we should use the feature **shim** available in the RequireJS. So, we continue using the couple of apps.

# Configuration

Note: The example are using of the gauge graph.

```js
require.config({
    paths: {
        jquery    : "vendor/jquery.min",
        rgraph    : "vendor/RGraph.common.core",
        gauge     : "vendor/RGraph.gauge"
    },
    shim : {
        gauge : {
            exports : "Gauge"
        },
        rgraph : {
            deps    : [ "jquery", "gauge" ],
            exports : "RGraph"
        },
    }
});
```
