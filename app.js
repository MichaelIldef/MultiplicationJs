//Will erase all existing outputs within the div element
function clearAll() { 
    const revealAns = document.getElementById("revealAns");
    revealAns.innerHTML = "";
  }
  document.getElementById("btn2").disabled = true;
  document.getElementById("btn2").style.color = 'grey';

  document.getElementById("btn").disabled = true;
  document.getElementById("btn").style.color = 'grey';

  function bothRed(widthId, lengthId, btn, labelId1, labelId2) {
    document.getElementById(btn).style.color = 'gray';
    document.getElementById(widthId).style.borderColor = 'red';
    document.getElementById(lengthId).style.borderColor = 'red';
    document.getElementById(btn).disabled = true;


  }
  function widthRed(widthId, lengthId, btn, labelId1, labelId2) {
    document.getElementById(btn).style.color = 'gray';
    document.getElementById(widthId).style.borderColor = 'red';
    document.getElementById(lengthId).removeAttribute('style');
    document.getElementById(btn).disabled = true;
  }
  
  function lengthRed(widthId, lengthId, btn, labelId1, labelId2) {
    document.getElementById(btn).style.color = 'gray';
    document.getElementById(widthId).removeAttribute('style');
    document.getElementById(lengthId).style.borderColor = 'red';
    document.getElementById(btn).disabled = true;
  }
  function allTrue(widthId, lengthId, btn, labelId1, labelId2) {
    document.getElementById(btn).style.color = 'black';
    document.getElementById(widthId).removeAttribute('style');
    document.getElementById(lengthId).removeAttribute('style');
    document.getElementById(btn).disabled = false;
  }

  function checkLength(id) {
    let length  = document.getElementById(id).value;
    let checkL;

    if (length !== '' || length !== null) {
      if (length >= 1 && length <= 11) {
        if (length % 1 == 0){
          checkL = true;
        } else {
          checkL = false;
        }
      } else {
        checkL = false;
      }
    } else {
      checkL = false;
    }
    return checkL;
}

function checkWidth(id) {
  let width  = document.getElementById(id).value;
  let checkW;
  if (width !== '' || width !== null) {
    if (width >= 1 && width <= 11) {
      if (width % 1 == 0){
        checkW = true;
      } else {
        checkW = false;
      }
    } else {
      checkW = false;
    }
  } else {
    checkW = false;
  }
  return checkW;
}
function checkAll(widthId, lengthId, btn, labelId1, labelId2) {
  let check_Width = checkWidth(widthId);
  let check_Length = checkLength(lengthId);
  if (check_Width == false && check_Length == false) {
    bothRed(widthId, lengthId, btn, labelId1, labelId2)
  } else if (check_Width == false && check_Length == true) {
    widthRed(widthId, lengthId, btn)
  } else if (check_Width == true && check_Length == false) {
    lengthRed(widthId, lengthId, btn)
  } else {
    allTrue(widthId, lengthId, btn);
  }
}

  let width = document.getElementById('width');
  let length = document.getElementById('length');
  length.addEventListener('input', function(){checkAll('width', 'length', 'btn2', 'widthId', 'lengthId')});
  width.addEventListener('input', function(){checkAll('width', 'length', 'btn2', 'widthId', 'lengthId')});

  let qty = document.getElementById('quantity');
  qty.addEventListener('input', function(){checkAll('quantity', 'quantity', 'btn')});



  // Will create an multiplication table depends on the quantity the user inputs
  function mTable(w, l, option) {
    clearAll();
    let width;
    let length;
    if (option == 1) {
      width = document.getElementById(w).value;
      length = document.getElementById(l).value;
    } else if (option == 0){
      width = w;
      length = l;
    }
    const tbl = document.createElement("table");
    const tblBody = document.createElement("tbody");
    
    // loop that will create the table
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