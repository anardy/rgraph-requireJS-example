# RGraph + RequireJS

This project show how to use the app [RGraph](http://www.rgraph.net/) with [RequireJS](http://requirejs.org/).

O projeto mostra como usar a app RGraph com RequireJS.

While RGraph app doesn't provide the concept of AMD and CommonJS in your library and we want to use RequireJS to load our modules we use the feature **shim** RequireJS for us to use the two apps.

Enquanto a app RGraph não disponibiliza o conceito de AMD ou CommonJS no seu biblioteca e nós queremos utilizar o RequireJS para carregar nossos módulos devemos utilizar a feature **shim** do RequireJS para usarmos as duas app.

# Configuration

Note: The example are using of the gauge graph.

Nota: O exemplo está usando o gráfico de gauge

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