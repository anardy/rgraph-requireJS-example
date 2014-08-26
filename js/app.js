require(['gauge', 'rgraph'], function(Gauge, RGraph) {

    var CreateGauge = function() {
    	var graph = new RGraph.Gauge('graph', 0, 100, 10);
    	graph.Draw();
    }();
});