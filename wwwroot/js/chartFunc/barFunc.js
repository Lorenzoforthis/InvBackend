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
                text: '<���:�d��>'
            },
            legend: {
                enabled: false
            },
            series: [{
                name: '���q�W��',
                data: barElts,
                dataLabels: {
                    enabled: true,
                    format: 'EPS:{point.y}'
                },
                tooltip: {
                    pointFormat: 'EPS: <b> {point.y}</b><br>' +
                        '�|�e�b�Q: <b> {point.z} �d��</b><br>'
                },
                borderRadius: 3,
                colorByPoint: true
            }]
        });
    } catch (error) {
        console.error("Error rendering bar chart:", error);
    }
}