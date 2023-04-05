function createTable() {
  document.getElementById("tableDiv").innerHTML = "";
  document.getElementById("errorMsg").innerHTML = "";

  var rows = document.getElementById("rows").value;
  var cols = document.getElementById("cols").value;

  // Validate the input values to make sure they're within the range we want
  var rowsRegex = /^[1-9]$|^1\d$|^2[0-5]$/;
  var colsRegex = /^[1-9]$|^1\d$|^2[0-5]$/;
  if (!rowsRegex.test(rows) || !colsRegex.test(cols)) {
    document.getElementById("errorMsg").innerHTML = "Alleen getallen onder of op de 25 zijn toegestaan!";
    return;
  }

  var table = document.createElement("table");

  for (var a = 0; a < rows; a++) {
    var row = document.createElement("tr");
    for (var b = 0; b < cols; b++) {
      var cell = document.createElement("td");

      cell.onmouseover = function() {
        hover(this);
      }
      row.appendChild(cell);
    }
    table.appendChild(row);
  }

  console.log(table)

  document.getElementById("tableDiv").appendChild(table);
}


function hover(element) {
  var colors = [
    document.getElementById("kleur1").value,
    document.getElementById("kleur2").value,
    document.getElementById("kleur3").value
  ];

  setTimeout(function() {
    element.style.backgroundColor = colors[0];
  }, 200);

  setTimeout(function() {
    element.style.backgroundColor = colors[1];
  }, 400);

  setTimeout(function() {
    element.style.backgroundColor = colors[2];
  }, 800);

  setTimeout(function() {
    element.style.backgroundColor = "white";
  }, 1000);
}

