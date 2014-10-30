require.config({
	baseUrl: 'js/vendor',
    paths: {
		app       : '../app',
        jquery    : 'jquery.min',
        rgraph    : 'RGraph.common.core',
        gauge     : 'RGraph.gauge'
    },
    shim : {
        rgraph : {
            deps    : [ 'jquery', 'gauge' ],
            exports : 'RGraph'
        }
	}
});