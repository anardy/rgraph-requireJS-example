# RGraph + RequireJS

This project show how to use the app [RGraph](http://www.rgraph.net/) with [RequireJS](http://requirejs.org/).

While RGraph app doesn't provide the concept of AMD and CommonJS in your library and we want to use RequireJS to load our modules we use the feature **shim** RequireJS for should use the two apps.

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
