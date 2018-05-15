
  document.getElementById('list').addEventListener('click', getExchangeList);
  document.getElementById('list1').addEventListener('click', getExchangeList1);

  function getExchangeList(){
    fetch('http://data.fixer.io/api/latest?access_key=5d4f06f5acc5e91c3b5ba070bfcdf825&format=1')
      .then((res) => res.json())
      .then((data) => {
        var output = '';
          output += `
            <div class="list1">
              <h2>${data.base}</h2>
              <p class="date">${data.date}<p>
              <div class="flags">
              <p><img src="flags/rs.png" width=40px;> RSD = <span class="bold">${Number(data.rates.RSD).toFixed(2)}</span></p>
              <p><img src="flags/us.png" width=40px;> USD = <span class="bold">${Number(data.rates.USD).toFixed(2)}</span></p>
              <p><img src="flags/ch.png" width=40px;> CHF = <span class="bold">${Number(data.rates.CHF).toFixed(2)}</span></p>
              <p><img src="flags/gb.png" width=40px;> GBP = <span class="bold">${Number(data.rates.GBP).toFixed(2)}</span></p>
              <p><img src="flags/ca.png" width=40px;> CAD = <span class="bold">${Number(data.rates.CAD).toFixed(2)}</span></p>
              <p><img src="flags/hr.png" width=40px;> HRK = <span class="bold">${Number(data.rates.HRK).toFixed(2)}</span></p>
              </div>
            
            </div>
          `;
        document.getElementById('show-list1').innerHTML = output;
    });
    }

    function getExchangeList1(){
      fetch('https://exchangeratesapi.io/api/latest')
      .then((res) => res.json())
      .then((data) => {
        var output1 = '';
          output1 += `
            <div class="list">
              <h2>${data.base}</h2>
              <p class="date">${data.date}<p>
              <div class="flags">
              <p><img src="flags/rs.png" width=40px;> RSD = <span class="bold">${Number(data.rates.RSD).toFixed(2)}</span></p>
              <p><img src="flags/us.png" width=40px;> USD = <span class="bold">${Number(data.rates.USD).toFixed(2)}</span></p>
              <p><img src="flags/ch.png" width=40px;> CHF = <span class="bold">${Number(data.rates.CHF).toFixed(2)}</span></p>
              <p><img src="flags/gb.png" width=40px;> GBP = <span class="bold">${Number(data.rates.GBP).toFixed(2)}</span></p>
              <p><img src="flags/ca.png" width=40px;> CAD = <span class="bold">${Number(data.rates.CAD).toFixed(2)}</span></p>
              <p><img src="flags/hr.png" width=40px;> HRK = <span class="bold">${Number(data.rates.HRK).toFixed(2)}</span></p>
              </div>
            
            </div>
          `;
        document.getElementById('show-list1').innerHTML = output1;
    });
  }


  