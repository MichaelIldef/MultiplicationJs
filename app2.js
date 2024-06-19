//Will erase all existing outputs within the div element
function clearAll() { 
    const revealAns = document.getElementById("revealAns");
    revealAns.innerHTML = "";
  }
  
  function bothRed(widthId, lengthId, btn) {
    document.getElementById(btn).style.color = 'gray';
    document.getElementById(widthId).style.borderColor = 'red';
    document.getElementById(lengthId).style.borderColor = 'red';
    document.getElementById(btn).disabled = true;
  }
  function widthRed(widthId, lengthId, btn) {
    document.getElementById(btn).style.color = 'gray';
    document.getElementById(widthId).style.borderColor = 'red';
    document.getElementById(lengthId).style.borderColor = 'black';
    document.getElementById(btn).disabled = true;
  }
  
  function lengthRed(widthId, lengthId, btn) {
    document.getElementById(btn).style.color = 'gray';
    document.getElementById(widthId).style.borderColor = 'black';
    document.getElementById(lengthId).style.borderColor = 'red';
    document.getElementById(btn).disabled = true;
  }
  
  document.getElementById("btn2").disabled = true;
  document.getElementById("btn2").style.color = 'grey';

  document.getElementById("btn").disabled = true;
  document.getElementById("btn").style.color = 'grey';
  
  function check(widthId, lengthId, btn) {
    let width  = document.getElementById(widthId).value;
    let length = document.getElementById(lengthId).value;
    //  both red
    const empty = width === '' && length === '';
    const emptyLess = width === '' && length < 1 || length === '' && width < 1;
    const emptyGreater = width === '' && length > 11 || length === '' && width > 11
    const widthDec = width < 1 && length % 1 !== 0 || width > 11 && length % 1 !== 0;
    const lengthDec = length < 1 && width % 1 !== 0 || length > 11 && width % 1 !== 0;
    const emptyDec = width === '' && length % 1 !== 0 || length === '' && width % 1 !== 0;
    const bothLess_Great = width < 1 && length < 1 || width > 11 && length > 11;
    const lessGreat = width < 1 && length > 11 || width > 11 && length < 1;
    const bothDec = length % 1 !== 0 && width % 1 !== 0;

    const validateIfBothRed = empty || emptyLess || emptyGreater || widthDec || lengthDec || emptyDec || bothLess_Great || lessGreat || bothDec;
    // Width Red
    const emptyValidLength = width === '' && length > 0 || width === '' && length < 12;
    const invalidWidth = width < 1 && length > 0 || width > 11 && length < 12
    const validLengthDecWidth = length % 1 === 0 && width % 1 !== 0;

    const widthInvalid = emptyValidLength || invalidWidth || validLengthDecWidth;

    // length Red
    const emptyValidWidth = length === '' && width > 0 || length === '' && width < 12;
    const invalidLength = width > 0 && length < 1 || width < 12 && length > 11;
    const validWidthDecLength = length % 1 !== 0 && width % 1 === 0;

    const lengthInvalid = emptyValidWidth || invalidLength || validWidthDecLength;

    if (validateIfBothRed) {
        bothRed(widthId, lengthId, btn);
    }else if (widthInvalid) {
        widthRed(widthId, lengthId, btn)
    } else if (lengthInvalid) {
        lengthRed(widthId, lengthId, btn)
    }
    else {
      document.getElementById(btn).style.color = 'black';
      document.getElementById(widthId).removeAttribute('style');
      document.getElementById(lengthId).removeAttribute('style');
      document.getElementById(btn).disabled = false;
    }
  }

  let length = document.getElementById('length');
  let width = document.getElementById('width');
  length.addEventListener('input', function(){ check('width', 'length', 'btn2')});
  width.addEventListener('input', function(){ check('width', 'length', 'btn2')});

  let qty = document.getElementById('quantity');
  qty.addEventListener('input', function(){ check('quantity', 'quantity', 'btn')});
  
  
  // Will create an multiplication table depends on the quantity the user inputs
  function mTable(w, l, option) {
    clearAll();
    let length;
    let width;
  
    if (option == 1) {
      width = document.getElementById(w).value;
      length = document.getElementById(l).value;
    } else if (option == 0){
      width = w;
      length = l;
    } else {
      console.log("Handling Error");
    }

    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
  
    for(let i = 1; i <= width; i++) {
      const row = document.createElement("tr");
      let cell = '';
      let cellt = '';
      for(let j = 1; j <= length; j++) { 
        if (j === i) {  // will check if its a perfect square
          cell = document.createElement("td");
          cellt = document.createTextNode(i * j);
          cell.appendChild(cellt);
          cell.setAttribute("style", "color:red;");
          row.appendChild(cell);
        } else {
          cell = document.createElement("td");
          cellt = document.createTextNode(i * j);
          cell.appendChild(cellt);
          row.appendChild(cell);
        }
      }
      tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    document.getElementById("revealAns").appendChild(tbl);
    tbl.setAttribute("border", "4");
  } 
  
  
  
  // Create an multiplication table using the width and length inputs from user
  function multiplicationTable(w, l) {
    clearAll();
  
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
    let width = document.getElementById(w).value;
    let length = document.getElementById(l).value;
    
    for(let i = 1; i <= 11; i++){
      const row = document.createElement("tr");
      let cellt = '';
      for(let j = 1; j <= 11; j++){ 
        let cell = document.createElement("td"); 
        if(j === i && (j <= width && i <= length)) {  // check if its perfect square and if its within the width and length the user inputs
          cellt = document.createTextNode(i * j);
          cell.appendChild(cellt);
          cell.setAttribute("style", "color:red;");
          row.appendChild(cell);
          cell.style.backgroundColor = 'yellow';  
        } else if (j === i) {                        // check if its perfect square, if true will color the text red
          cellt = document.createTextNode(i * j);
          cell.appendChild(cellt);
          cell.setAttribute("style", "color:red;");
          row.appendChild(cell);
        } else if (j <= width && i <= length){      // will check if its within the width and length the user inputs
          cellt = document.createTextNode(i * j);
          cell.appendChild(cellt);
          cell.setAttribute("style", "background-color:yellow;");
          row.appendChild(cell);
        } else {                                    // to finish the 11x11 table without color
          cellt = document.createTextNode(i * j);
          cell.appendChild(cellt);
          row.appendChild(cell);
        }
      } 
      tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    document.getElementById("revealAns").appendChild(tbl);
    tbl.setAttribute("border", "4");
  }