var suite = new PerfSuite({
    name: 'Charts Marker',
    yui: {
        use: ['charts']
    },
    global: {
        setup: function () {
            var chart,
                container,
                dataProvider;

            container = Y.Node.create('<div id="container">');
            seriesKeys = ["miscellaneous", "expenses", "revenue"];

            dataProvider = [
                {category:"5/1/2010", miscellaneous:2000, expenses:3700, revenue:2200},
                {category:"5/2/2010", miscellaneous:50, expenses:9100, revenue:100},
                {category:"5/3/2010", miscellaneous:400, expenses:1100, revenue:1500},
                {category:"5/4/2010", miscellaneous:200, expenses:1900, revenue:2800},
                {category:"5/5/2010", miscellaneous:5000, expenses:5000, revenue:2650}
            ];

            container.setStyles({
                'left': '10px',
                'top': '10px',
                'width': '600px',
                'height': '300px'
            }).appendTo(document.body);
        },
        teardown: function () {
            container.empty(true);
        }
    },
    tests: [
        {
            name: 'MarkerChart',
            fn: function () {
                chart = new Y.Chart({
                    dataProvider: dataProvider,
                    type: "markerseries",
                    render: container,
                    categoryKey: "category"
                });
                chart.destroy(true);
            }
        },
        {
            name: 'TimeAxisMarkerChart',
            fn: function () {
                chart = new Y.Chart({
                    categoryType: "time",
                    dataProvider: dataProvider,
                    type: "markerseries",
                    render: container,
                    categoryKey: "category"
                });
                chart.destroy(true);
            }
        }
    ]
});