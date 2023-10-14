var vg_1 = "sample.json";

vegaEmbed("#bubble_chart", vg_1).then(function(result) {

    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "sample2.json";

vegaEmbed("#bar_chart", vg_2).then(function(result) {

    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var vg_2 = "map.json";

vegaEmbed("#map", vg_2).then(function(result) {

    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);