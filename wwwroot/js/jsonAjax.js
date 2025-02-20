$.ajax({
    type: "GET",
    url: "http://localhost:8080/api/financials",
    dataType: "json",
    async: false,
    success: 
    // resultShow,  
    function(data) {
      localData = data;
      $("#pieTable").empty();         
    },
    error: function () {
      alert("piecopy.html got some errors");
    }
  });

$(function () {
  let currentPage = 1;
  let itemsPerPage = 8;
  let filteredData = [];

  // Process the localData to remove '股份有限公司' from company names
  const processedData = localData.map(item => {
      return {
          ...item,
          company_name: item.company_name
              .replace('股份有限公司', '')
              .replace('有限公司', '')
              .replace('公司', '')
              .trim() // Remove any extra spaces
      };
  });

  // Initialize items per page select
  $('#items-per-page-select').val(itemsPerPage);

  // Items per page change handler
  $('#items-per-page-select').change(function() {
      itemsPerPage = parseInt($(this).val());
      currentPage = 1;
      displayTableData();
  });

  // Industry filter change handler
  $("#industryFilterSelection").change(function () {
      $("#pieTable").empty();
     
          
      const industryFiltered = $(this).val();
      
      // Filter data based on selected industry using processedData instead of localData
      filteredData = processedData.filter(item => item.industry === industryFiltered);
      
      // Reset to first page when filter changes
      currentPage = 1;      
  
        
      displayTableData();
      setupPagination();
  });

  // Function to display table data for current page
  function displayTableData() {
      $("#pieTable").empty();          
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = Math.min(startIndex + itemsPerPage, filteredData.length);
      
      for (let i = startIndex; i < endIndex; i++) {
          const item = filteredData[i];
          //  <!-- following is the checkbox if needed-->
          // <td>
          //         <span class="custom-checkbox">
          //             <input type="checkbox" id="checkbox${i}" name="options[]" value="1">
          //             <label for="checkbox${i}"></label>
          //         </span>
          //     </td>
          const strHTML = `<tr>
              <td data-th="股票代碼">${item.company_code}</td>
              <td data-th="公司名稱">${item.company_name}</td>
              <td data-th="EPS">${item.eps}</td>
              <td data-th="營業收入">${item.operating_revenue}</td>
              <td data-th="營業利益">${item.operating_profit}</td>
              <td data-th="營業外收入及支出">${item.non_operating}</td>
              <td data-th="稅後淨利">${item.net_income}</td>
              <td>
                  <button data-bs-target="#editCompanyModal" class="edit" data-bs-toggle="modal" style="border: none;">
                      <i class="material-icons" data-toggle="tooltip" title="Edit">&#xE254;</i>
                  </button>
                  <button data-bs-target="#deleteCompanyModal" class="delete" data-bs-toggle="modal" style="border: none;">
                      <i class="material-icons" data-toggle="tooltip" title="Delete">&#xE872;</i>
                  </button>
              </td>
          </tr>`;
          $("#pieTable").append(strHTML);
          
          operatingRevenue.push(item.operating_revenue);
          operatingProfit.push(item.operating_profit);
          nonOperating.push(item.non_operating);
          netIncome.push(item.net_income);            
      }

    
     
      // Update the output div with processed company names (if needed)
      $('#output').empty();
      filteredData.forEach(item => {
          $('#output').append(`<p>${item.company_name}</p>`);
      });
  }

  // Function to setup pagination
  function setupPagination() {
      const pageCount = Math.ceil(filteredData.length / itemsPerPage);
      const $paginationNumbers = $('#pagination-numbers');
      
      $paginationNumbers.empty();
      
      // Add page numbers
      for (let i = 1; i <= pageCount; i++) {
          const $pageNumber = $(`<span class="pagination-number${i === currentPage ? ' active' : ''}">${i}</span>`);
          $pageNumber.click(() => {
              currentPage = i;
              displayTableData();
              updatePaginationUI();
          });
          $paginationNumbers.append($pageNumber);
      }
      
      updatePaginationUI();
  }

  // Function to update pagination UI
  function updatePaginationUI() {
      const pageCount = Math.ceil(filteredData.length / itemsPerPage);
      
      // Update active state of page numbers
      $('.pagination-number').removeClass('active');
      $(`.pagination-number:nth-child(${currentPage})`).addClass('active');
      
      // Update prev/next button states
      $('#prev-button').prop('disabled', currentPage === 1);
      $('#next-button').prop('disabled', currentPage === pageCount);
  }

  // Previous button handler
  $('#prev-button').click(() => {
      if (currentPage > 1) {
          currentPage--;
          displayTableData();
          updatePaginationUI();
      }
  });

  // Next button handler
  $('#next-button').click(() => {
      const pageCount = Math.ceil(filteredData.length / itemsPerPage);
      if (currentPage < pageCount) {
          currentPage++;
          displayTableData();
          updatePaginationUI();
      }
  });

  // Initial load
  $('#industryFilterSelection').val('水泥工業').change();

});