
  document.getElementById('list').addEventListener('click', getExchangeList);
  document.getElementById('go').addEventListener('click', calculate);

  function getExchangeList(){
    fetch('https://exchangeratesapi.io/api/latest')
      .then((res) => res.json())
      .then((data) => {
        var output = '';
          output += `
            <div class="list1">
              <h2>${data.base}</h2>
              <p class="date">${data.date}<p>
              <div class="flags">
              <p><img src="flags/us.png" width=40px;> USD = <span class="bold">${Number(data.rates.USD).toFixed(2)}</span></p>
              <p><img src="flags/ch.png" width=40px;> CHF = <span class="bold">${Number(data.rates.CHF).toFixed(2)}</span></p>
              <p><img src="flags/gb.png" width=40px;> GBP = <span class="bold">${Number(data.rates.GBP).toFixed(2)}</span></p>
              <p><img src="flags/ca.png" width=40px;> CAD = <span class="bold">${Number(data.rates.CAD).toFixed(2)}</span></p>
              <p><img src="flags/jpy.png" width=40px;> JPY = <span class="bold">${Number(data.rates.JPY).toFixed(1)}</span></p>
              </div>
            
            </div>
          `;
        document.getElementById('show-list').innerHTML = output;
    });
  }

  // function getMyRates(jData) {
  //   if (jData == null) {
  //     alert("There was a problem parsing search results.");
  //     return;
  //   }
  //   var myval = jData.ResultSet;
  //   var mydiv = jData.xxMyDiv;
  //   document.getElementById(mydiv).innerHTML =  myval;
  // }

  // function myPrivateConverterMany() {
  //   var xxv = document.getElementById('xxvalue').value;
  //   var xxf = document.getElementById('xxfrom').value;
  //   var xxt = document.getElementById('xxto').value;
  //   if (xxv > 0) {
  //     getExchangeRatesDiv('xxrates',xxv,xxf,xxt,'true');
  //   }
  // }

  function calculate(){
    fetch('https://exchangeratesapi.io/api/latest')
      .then((res) => res.json())
      .then((data) => {
        var amount = parseFloat(document.getElementById("amount").value);
        var select = document.getElementById("select");
        var select1 = document.getElementById("select1");
        var result = document.getElementById("result");

        if(data.rates[select.value]){
            result.value = amount * data.rates[select.value];
            result.value = Number(result.value).toFixed(2) + ' ' + select.value;
        }
        if(select.value === "EUR"){
            result.value = amount * 1 + ' ' + select.value;
        }
    });
  }



  