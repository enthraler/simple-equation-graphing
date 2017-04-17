/**
 * Function plotter enthraler.
 */

// Use an AMD module definition.
// We will import jQuery, enthraler, and local CSS.
define(['enthraler', './function-plot.min.js', 'css!plotter'], function (enthraler, functionPlot) {
	var Hello = function(environment) {
		environment.container.innerHTML = '<div id="function-plot-canvas"></div>';
		this.render = function (authorData) {
            functionPlot({
                target: '#function-plot-canvas',
				width: parseInt(window.getComputedStyle(environment.container).width, 10),
				grid: authorData.showGrid,
				disableZoom: authorData.allowZoom !== true,
				xAxis: {
					label: authorData.xLabel,
					domain: (authorData.defaultSize) ? [authorData.defaultSize.xMin, authorData.defaultSize.xMax] : undefined
				},
				yAxis: {
					label: authorData.yLabel,
					domain: (authorData.defaultSize) ? [authorData.defaultSize.yMin, authorData.defaultSize.yMax] : undefined
				},
				tip: {
					xLine: true,
					yLine: true,
					renderer: function (x, y, index) {
						var name = authorData.lines[index].name || '',
							coordinates = "[" + x.toFixed(2) + ", " + y.toFixed(2) + "]";
						if (name) {
							return name + ": " + coordinates;
						} else {
							return coordinates;
						}
					}
				},
                data: authorData.lines.map(function (l) {
					if (!l.graphType) {
						l.graphType = 'polyline';
					}
					return l;
				})
            });

			// Resize the iframe to fit the new height.
			environment.requestHeightChange();
		}
	};

	Hello.enthralerSchema = 'components/examples/function-plotter/schema.json';

	return Hello;
});
