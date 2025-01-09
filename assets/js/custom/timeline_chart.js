anychart.onDocumentReady(function () {

    var chart = anychart.timeline();

    /*  here is work data   */

    var rangeSeries1 = chart.range(workData);
    var rangeSeries2 = chart.range(educationData);

    rangeSeries1.height(50);
    rangeSeries2.height(50).direction('down');

    var rangeLabelFormat = "{%start}{dateTimeFormat:MMM d} - {%end}{dateTimeFormat:MMM d}";
    rangeSeries1.labels().format(rangeLabelFormat);
    rangeSeries2.labels().format(rangeLabelFormat);
    rangeSeries1.labels().fontColor("white");
    rangeSeries2.labels().fontColor("white");

    var momentSeries1 = chart.moment(eventsWorkData());
    var momentSeries2 = chart.moment(eventsEducationData());

    momentSeries1.labels().fontColor("#004E72");
    momentSeries2.labels().fontColor("#004E72");
    momentSeries1.labels().background().stroke('null');
    momentSeries2.labels().background().stroke('null');

    momentSeries1.direction("up");
    momentSeries1.markers().type("circle");
    momentSeries1.normal().stroke("#004E72", 1);
    momentSeries1.hovered().stroke("#dd2c00", 1);
    momentSeries1.selected().stroke("#004e72", 1);
    momentSeries1.normal().markers().size(8);
    momentSeries1.hovered().markers().size(8);
    momentSeries1.selected().markers().size(8);


    momentSeries2.direction("down");
    momentSeries2.markers().type("circle");
    momentSeries2.normal().stroke("#004E72", 1);
    momentSeries2.hovered().stroke("#00bfa5", 1);
    momentSeries2.selected().stroke("#004e72", 1);
    momentSeries2.normal().markers().size(8);
    momentSeries2.hovered().markers().size(8);
    momentSeries2.selected().markers().size(8);

    function momentTooltipFormat() {
        var date = anychart.format.dateTime(this.x, "dd MMM");
        return "<span style='font-weight:600;font-size:12pt'>" +
            this.value.toUpperCase() + "</span>" +
            "<br><br>Date: " + date +
            "<br>Group: " + this.seriesName;
    }

    // format tooltips of moment series
    momentSeries1.tooltip().useHtml(true);
    momentSeries2.tooltip().useHtml(true);
    momentSeries1.tooltip().format(momentTooltipFormat);
    momentSeries2.tooltip().format(momentTooltipFormat);

    // configure tooltips of moment series
    momentSeries1.tooltip().title().enabled(false);
    momentSeries2.tooltip().title().enabled(false);
    momentSeries1.tooltip().separator().enabled(false);
    momentSeries2.tooltip().separator().enabled(false);

    chart.scale().zoomLevels([
        [
            { "unit": "month", count: 1 },
        ]
    ]);

    chart.axis().labels().format(
        "{%tickValue}{dateTimeFormat:MMM }"
    );
    chart.axis().fill("#252824");

    chart.container('timeline');

    chart.draw();
});

var workData = [

    {
        name: 'Implementation',
        start: '2019/04/15',
        end: '2019/05/15',
        fill: '#DF0A08',
        stroke: 'null'
    },
    {
        name: 'Surveillance',
        start: '2019/06/10',
        end: '2019/06/20',
        fill: '#FF4500',
        stroke: 'null'
    },
    {
        name: 'Follow-Up',
        start: '2019/07/15',
        end: '2019/07/30',
        fill: '#FFAB00',
        stroke: 'null'
    },
    {
        name: 'Follow-Up',
        start: '2019/09/15',
        end: '2019/10/15',
        fill: '#FF8800',
        stroke: 'null'
    },
    {
        name: 'Follow-Up',
        start: '2019/10/17',
        end: '2019/12/31',
        fill: '#FFC700',
        stroke: 'null'
    },

];

var educationData = [
    {
        name: 'Planning',
        start: '2019/01/01',
        end: '2019/05/30',
        fill: '#00B4B8',
        stroke: 'null'
    },
    {
        name: 'Planning',
        start: '2019/03/01',
        end: '2019/04/30',
        fill: '#0084BD',
        stroke: 'null'
    },
    {
        name: 'Implementation',
        start: '2019/06/1',
        end: '2019/07/31',
        fill: '#009EBC',
        stroke: 'null'
    },

]

// event series data

function eventsWorkData() {
    return [
        ['2019/03/17', 'ORONA ADMINISTATIVE MANT'],
        ['2019/05/06', 'UNIVERSITY OF VALENSITY INTERNATIONAL REALATIONAL OFFICIER'],
        ['2019/05/17', 'PALAU DE LA M SICA DE VALENCIA DOCUMENTAION ASSISTANT'],
        ['2019/06/16', 'UNIVERSITY OF VALENSITY INTERNATIONAL REALATIONAL OFFICIER'],
        ['2019/07/16', 'PALAU DE LA M SICA DE VALENCIA DOCUMENTAION ASSISTANT'],
        ['2019/10/1', 'PALAU DE LA M SICA DE VALENCIA DOCUMENTAION ASSISTANT'],
        ['2019/12/20', 'PALAU DE LA M SICA DE VALENCIA DOCUMENTAION ASSISTANT'],
    ];
}

function eventsEducationData() {
    return [
        ['2019/04/25', 'UNIVERSIT AT DE VAL NCIA ART HISTORY'],
        ['2019/03/25', 'UNIVERSIT PARIS SORBONNE (PARIS IV) ART HISTORY'],
        ['2019/07/20', 'UNIVERSIT AT DE VAL NCIA ART MANAGEMENT'],
    ];
}