function pieChart() {
    try {
        const chart = Highcharts.chart('pie_chart', {
            colors: ['#C0C0C0', '#FFD700', '#CD7F32'],
            chart: {
                type: 'column',
                inverted: true,
                polar: true
            },
            title: {
                text: '上市公司本季度營業分析',
                align: 'left'
            },
            subtitle: {
                text: 'Q2',
                align: 'left'
            },
            tooltip: {
                outside: true
            },
            pane: {
                size: '85%',
                innerSize: '20%',
                endAngle: 270
            },
            xAxis: {
                tickInterval: 1,
                labels: {
                    align: 'right',
                    useHTML: true,
                    allowOverlap: true,
                    step: 1,
                    y: 3,
                    style: {
                        fontSize: '13px'
                    }
                },
                lineWidth: 0,
                gridLineWidth: 0,
                categories: companyNames
            },
            yAxis: {
                lineWidth: 0,
                tickInterval: 25,
                reversedStacks: false,
                endOnTick: true,
                showLastLabel: true,
                gridLineWidth: 0
            },
            plotOptions: {
                column: {
                    stacking: 'normal',
                    borderWidth: 0,
                    pointPadding: 0,
                    groupPadding: 0.15,
                    borderRadius: '50%'
                }
            },
            series: [
                {
                    name: '營業成本+費用',
                    data: operatingCostData
                },
                {
                    name: '營業利益',
                    data: operatingProfitData
                },
                {
                    name: '營業外收入與支出',
                    data: nonOperatingData
                }
            ]
        });
    } catch (error) {
        console.error("Error rendering pie chart:", error);
    }
}