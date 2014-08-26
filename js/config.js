require.config({
    paths: {
        jquery    : "vendor/jquery.min",
        rgraph    : "vendor/RGraph.common.core",
        gauge     : "vendor/RGraph.gauge",
        app       : "app"
    },
    shim : {
        gauge : {
            exports : "Gauge"
        },
        rgraph : {
            deps    : [ "jquery", "gauge" ],
            exports : "RGraph"
        },
        app : {
            exports: "App"
        }
    }
});