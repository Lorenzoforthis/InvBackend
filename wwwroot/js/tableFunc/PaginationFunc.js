// Pagination variables and functions
let currentPage = 1;
const rowsPerPage = 8;
let totalPages = 1;

function initPagination() {
    const rows = $('#dataTable tbody tr');
    totalPages = Math.ceil(rows.length / rowsPerPage);

    // Update total pages display
    $('#totalPages').text(totalPages);

    // Initial page display
    showPage(currentPage);
    updatePaginationButtons();

    // Attach event handlers to pagination buttons
    $('#prevButton').click(function () {
        if (currentPage > 1) {
            currentPage--;
            showPage(currentPage);
            updatePaginationButtons();
        }
    });

    $('#nextButton').click(function () {
        if (currentPage < totalPages) {
            currentPage++;
            showPage(currentPage);
            updatePaginationButtons();
        }
    });
}

function showPage(page) {
    const rows = $('#dataTable tbody tr');

    // Hide all rows
    rows.hide();

    // Calculate start and end indices for current page
    const startIndex = (page - 1) * rowsPerPage;
    const endIndex = startIndex + rowsPerPage;

    // Show rows for current page
    const currentPageRows = rows.slice(startIndex, endIndex);
    currentPageRows.show();

    // Update current page display
    $('#currentPage').text(page);

    // Update charts with data from current page rows only
    updateChartsWithCurrentPageData(currentPageRows);
}

// New function to extract data from current page rows and update charts
function updateChartsWithCurrentPageData(currentPageRows) {
    // Initialize empty arrays for chart data
    const pageCompanyNames = [];
    const pageOperatingRevData = [];
    const pageOperatingProfitData = [];
    const pageNonOperatingData = [];
    const pageEpsData = [];
    const pageNetIncomeData = [];

    // Extract data from current page rows
    currentPageRows.each(function () {
        const cells = $(this).find('td');

        // Get values from table cells
        const companyName = cells.eq(1).text().replace('股份有限公司', '')
            .replace('有限公司', '')
            .replace('公司', '').trim();
        const eps = parseFloat(cells.eq(3).text().trim());
        const operatingRev = parseFloat(cells.eq(4).text().trim());
        const operatingProfit = parseFloat(cells.eq(5).text().trim());
        const nonOperating = parseFloat(cells.eq(6).text().trim());
        const netIncome = parseFloat(cells.eq(7).text().trim());

        // Add data to arrays
        pageCompanyNames.push(companyName);
        pageOperatingRevData.push(operatingRev);
        pageOperatingProfitData.push(operatingProfit);
        pageNonOperatingData.push(nonOperating);
        pageEpsData.push(eps);
        pageNetIncomeData.push(netIncome);
    });

    // Calculate operating costs for current page
    const pageOperatingCostData = pageOperatingRevData.map((rev, index) =>
        rev - pageOperatingProfitData[index]);

    // Create data for bar chart
    const pageBarElts = pageCompanyNames.map((name, index) => {
        return {
            name: name,
            y: pageEpsData[index],
            z: pageNetIncomeData[index],
            x: index
        };
    });

    // Update charts with new data
    updatePieChart(pageCompanyNames, pageOperatingCostData, pageOperatingProfitData, pageNonOperatingData);
    updateBarChart(pageCompanyNames, pageBarElts);
}

// Function to update pie chart with new data
function updatePieChart(categories, costData, profitData, nonOperatingData) {
    const chart = Highcharts.charts.find(chart => chart && chart.renderTo.id === 'pie_chart');

    if (chart) {
        // Update categories
        chart.xAxis[0].setCategories(categories);

        // Update series data
        chart.series[0].setData(costData);
        chart.series[1].setData(profitData);
        chart.series[2].setData(nonOperatingData);
    }
}

// Function to update bar chart with new data
function updateBarChart(categories, barData) {
    const chart = Highcharts.charts.find(chart => chart && chart.renderTo.id === 'bar_chart');

    if (chart) {
        // Update categories
        chart.xAxis[0].setCategories(categories);

        // Update series data
        chart.series[0].setData(barData);
    }
}

function updatePaginationButtons() {
    // Disable/enable previous button
    $('#prevButton').prop('disabled', currentPage === 1);

    // Disable/enable next button
    $('#nextButton').prop('disabled', currentPage === totalPages);
}