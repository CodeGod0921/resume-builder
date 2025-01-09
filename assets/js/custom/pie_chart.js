am5.ready(function () {
    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("kt_amcharts_3");

    // Set themes
    // https://www.amcharts.com/docs/v5/concepts/themes/
    root.setThemes([
        am5themes_Animated.new(root)
    ]);

    // Create chart
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
    var chart = root.container.children.push(am5percent.PieChart.new(root, {
        startAngle: 90,
        endAngle: 270,
        layout: root.verticalLayout,
        innerRadius: am5.percent(50)
    }));

    // Create series
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
    var series = chart.series.push(am5percent.PieSeries.new(root, {
        alignLabels: true,
        calculateAggregates: true,
        startAngle: 90,
        endAngle: 270,
        valueField: "value",
        categoryField: "category"
    }));

    series.states.create("hidden", {
        startAngle: 180,
        endAngle: 180
    });

    series.slices.template.setAll({
        cornerRadius: 5
    });

    series.slices.template.setAll({
        strokeWidth: 3,
        stroke: am5.color(0xffffff)
    });

    series.labelsContainer.set("paddingTop", 30)

    // Set data
    // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
    series.data.setAll([{
        value: 2.5,
        category: "HTML"
    }, {
        value: 2,
        category: "CSS"
    }, {
        value: 3,
        category: "JAVASCRIPT"
    }, {
        value: 2.5,
        category: "PHP"
    },]);

    // Create legend
    // https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/
    // var legend = chart.children.push(am5.Legend.new(root, {
    //     centerX: am5.p50,
    //     x: am5.p50,
    //     marginTop: 15,
    //     marginBottom: 15
    // }));

    legend.data.setAll(series.dataItems);

    // Play initial series animation
    // https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
    series.appear(1000, 100);

}); // end am5.ready()