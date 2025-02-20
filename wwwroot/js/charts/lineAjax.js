
    $.ajax({
      url: "http://localhost:8080/api/v1/dataShow/",
      success:resultShow,
    });
    function resultShow(result) {
      result.forEach(item => {
        console.log(item);
      });
      console.log("line.html is ok");
      console.log(result)
    }


    Highcharts.chart('linechart', {
      chart: {
        type: 'spline'
      },
      title: {
        text: '大盤指數',
        align: 'left'
      },
      subtitle: {
        text: '2022-2024',
        align: 'left'
      },
      xAxis: {
        type: 'datetime',
        dateTimeLabelFormats: {
          // don't display the year
          month: '%e. %b',
          year: '%b'
        },
        title: {
          text: 'Date'
        }
      },
      yAxis: {
        title: {
          text: '加權指數'
        },
        min: 0
      },
      tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '{point.x:%e. %b}: {point.y:.2f}'
      },

      plotOptions: {
        series: {
          marker: {
            symbol: 'circle',
            fillColor: '#FFFFFF',
            enabled: true,
            radius: 2.5,
            lineWidth: 1,
            lineColor: null
          }
        }
      },

      colors: ['#6CF', '#39F', '#06C', '#036', '#000',],

      // Define the data points. All series have a year of 2023/71 in order
      // to be compared on the same x axis. Note that in JavaScript, months start
      // at 0 for January, 1 for February etc.
      series: [
        {
          name: '股價 2021-2022',
          data: [
            [Date.UTC(2022, 0, 1), 17674.40],
            [Date.UTC(2022, 1, 2), 17652.18],
            [Date.UTC(2022, 2, 3), 17693.47],
            [Date.UTC(2022, 3, 3), 16592.18],
            [Date.UTC(2022, 4, 3), 16807.77],
            [Date.UTC(2022, 5, 2), 14825.73],
            [Date.UTC(2022, 6, 3), 15000.07],
            [Date.UTC(2022, 7, 2), 15095.44],
            [Date.UTC(2022, 8, 3), 13424.58],
            [Date.UTC(2022, 9, 1), 12949.75],
            [Date.UTC(2022, 10, 1), 14879.55],
            [Date.UTC(2022, 11, 1), 14137.69],
          ]
        },

        {
          name: '股價  2022-2023',
          data: [

            [Date.UTC(2022, 0, 1), 15265.20],
            [Date.UTC(2022, 1, 1), 15503.79],
            [Date.UTC(2022, 2, 1), 15868.06],
            [Date.UTC(2022, 3, 1), 15579.18],
            [Date.UTC(2022, 4, 1), 16578.96],
            [Date.UTC(2022, 5, 1), 16915.54],
            [Date.UTC(2022, 6, 2), 17145.43],
            [Date.UTC(2022, 7, 1), 16634.51],
            [Date.UTC(2022, 8, 1), 16353.74],
            [Date.UTC(2022, 9, 1), 16001.27],
            [Date.UTC(2022, 10, 1), 17433.85],
            [Date.UTC(2022, 11, 2), 17930.81],
          ]
        },

        {
          name: '股價  2023-2024',
          data: [
            [Date.UTC(2022, 0, 1), 17930.81],
            [Date.UTC(2022, 1, 2), 17889.56],
            [Date.UTC(2022, 2, 3), 18966.77],
            [Date.UTC(2022, 3, 3), 20294.45],
            [Date.UTC(2022, 4, 2), 20396.60],
            [Date.UTC(2022, 5, 3), 21174.22],
            [Date.UTC(2022, 6, 2), 23032.25],
            [Date.UTC(2022, 7, 2), 22199.35],
            [Date.UTC(2022, 8, 2), 21697.23]

          ]
        }
      ]
    });
