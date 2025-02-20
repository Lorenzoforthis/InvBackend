


$.ajax({
    type: "get",
    url: "/json/5_export.json",
    dataType: "json",
    success: showgolddata,
});

function showgolddata(data) {
    // console.log(data);
    console.log(data.length);

    var pricelData = [];
    for (let key = 0; key < data.length; key++) {
        pricelData.push(data[key]["本行買入價格(新臺幣)"]);

    }
    console.log(pricelData);
    const ctd = document.getElementById('chart_gold');
    new Chart(ctd, {
        type: 'line',
        data: {
            labels: ["202301",
                "202302",
                "202303",
                "202304",
                "202305",
                "202306",
                "202307",
                "202308",
                "202309",
                "202310",
                "202311",
                "202312",
                "202401",
                "202402",
            ],
            datasets: [{
                label: '臺灣銀行新台幣黃金存摺牌價',
                backgroundColor: 'rgb(255,99,132)',
                borderColor: 'rgb(122,99,132)',
                data: pricelData,
                borderWidth: 2
            }]
        },

    });

};
