
  document.getElementById('list').addEventListener('click', getExchangeList);

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

  function getMyRates(jData) {
    if (jData == null) {
      alert("There was a problem parsing search results.");
      return;
    }
    var myval = jData.ResultSet;
    var mydiv = jData.xxMyDiv;
    document.getElementById(mydiv).innerHTML =  myval;
  }

  function myPrivateConverterMany() {
    var xxv = document.getElementById('xxvalue').value;
    var xxf = document.getElementById('xxfrom').value;
    var xxt = document.getElementById('xxto').value;
    if (xxv > 0) {
      getExchangeRatesDiv('xxrates',xxv,xxf,xxt,'true');
    }
  }

  // var us, ch, gb, ca, hr;

  // function init()
  // {
  //     us = document.getElementById("us");
  //     ch = document.getElementById("ch");
  //     gb = document.getElementById("gb");
  //     ca = document.getElementById("ca");
  //     hr = document.getElementById("hr");
  // }

  // function usfunc()
  // {
  //     ch.value = parseFloat(us.value) * 0.49246;
  //     gb.value = parseFloat(us.value) * 0.69714;
  //     ca.value = parseFloat(us.value) * 0.50221;
  //     hr.value = parseFloat(us.value) * 0.43497;
  // }

  // function gbfunc()
  // {
  //     us.value = parseFloat(gb.value) * 1.43448;
  //     ch.value = parseFloat(gb.value) * 0.70641;
  //     ca.value = parseFloat(gb.value) * 0.72037;
  //     hr.value = parseFloat(gb.value) * 0.62382;
  // }
  // function cafunc()
  // {
  //     us.value = parseFloat(ca.value) * 1.99169;
  //     ch.value = parseFloat(ca.value) * 0.98054;
  //     gb.value = parseFloat(ca.value) * 1.38814;
  //     hr.value = parseFloat(ca.value) * 0.86613;
  // }

  // function hrfunc()
  // {
  //     us.value = parseFloat(hr.value) * 2.29964;
  //     ch.value = parseFloat(hr.value) * 1.13262;
  //     gb.value = parseFloat(hr.value) * 1.60329;
  //     ca.value = parseFloat(hr.value) * 0.88297;    
  // }

  // function chfunc()
  // {
  //     us.value = parseFloat(ch.value) * 2.03032;
  //     gb.value = parseFloat(ch.value) * 1.41544;
  //     ca.value = parseFloat(ch.value) * 1.01941;
  //     hr.value = parseFloat(ch.value) * 0.88297;
  // }

  // init();


  