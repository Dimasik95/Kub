function createCell(row) {
    var newCell = row.insertCell(-1);
    newCell.className = 'created';
  }

  function createRow(table) {
    var newRow = table.insertRow(-1);
    var colsLength = table.rows[0].cells.length;
    for (var i = 0; i < colsLength; i++) {
      createCell(newRow);
    }
  }

  function createColumn(table) {
    var rows = table.rows;
    for (var i = 0, l = rows.length; i < l; i++) {
      createCell(rows[i]);
    }
  }

  document.addEventListener('DOMContentLoaded', function() {
    var table = document.querySelector('table.table');
    
    document.querySelector('#add-column').onclick = function() {
      createColumn(table);
    };
    document.querySelector('#add-row').onclick = function() {
      createRow(table);
    };
  });



  function deleteCell() {
    document.querySelector('table').deleteColumn(1);
    var row = document.querySelector('table').rows[0];
    row.deleteCell(0);
 }

function createColumn(table) {
  var rows = table.rows;
  for (var i = 0, l = rows.length; i < l; i++) {
    createCell(rows[i]);
  }
}

  function deleteRow() {
    document.querySelector('table').deleteRow(-1);
}

  function deleteColumn() {
  var tble = document.getElementById('table'); 
  var row = tble.rows;  
  var i = 1; 
  for (var j = 0; j < row.length; j++) {
      row[j].deleteCell(i);
  }
}

  document.addEventListener('DOMContentLoaded', function() {
  var table = document.querySelector('table.table');

  document.querySelector('#delete-column').onclick = function() {
    deleteColumn(table);
  };
  document.querySelector('#delete-row').onclick = function() {
    deleteRow();
  };
});