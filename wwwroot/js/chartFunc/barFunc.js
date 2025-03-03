function barChart() {
    try {
        Highcharts.chart('bar_chart', {
            chart: {
                type: 'variwide'
            },
            title: {
                text: 'EPS Q2',
                align: 'left'
            },
            subtitle: {
                text: 'Q2'
            },
            xAxis: {
                type: 'category',
                categories: companyNames
            },
            caption: {
                text: '<單位:千元>'
            },
            legend: {
                enabled: false
            },
            series: [{
                name: '公司名稱',
                data: barElts,
                dataLabels: {
                    enabled: true,
                    format: 'EPS:{point.y}'
                },
                tooltip: {
                    pointFormat: 'EPS: <b> {point.y}</b><br>' +
                        '稅前淨利: <b> {point.z} 千元</b><br>'
                },
                borderRadius: 3,
                colorByPoint: true
            }]
        });
    } catch (error) {
        console.error("Error rendering bar chart:", error);
    }
}