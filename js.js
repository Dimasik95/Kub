const table = document.getElementById('table');
const delRowBut = document.querySelector('#delete-row');
const delColBut = document.querySelector('#delete-column');
const rowis = table.rows;

table.onmouseover = function Index(e) {
  const { rowIndex } = e.target.parentElement;
  const columnIndex = e.target.cellIndex;
  if (rowIndex !== undefined) {
    delRowBut.style.visibility = 'visible';
    delRowBut.style.top = `${rowIndex * 30}px`;
  } if (columnIndex !== undefined) {
    delColBut.style.visibility = 'visible';
    delColBut.style.left = `${columnIndex * 30}px`;
  }
};

table.onmouseleave = function hiddenDelBtn() {
  delRowBut.style.visibility = 'hidden';
  delColBut.style.visibility = 'hidden';
};
delColBut.onmouseover = function showDelColBtn() {
  delRowBut.style.visibility = 'visible';
  delColBut.style.visibility = 'visible';
};
delRowBut.onmouseover = function showDelRowBtn() {
  delRowBut.style.visibility = 'visible';
  delColBut.style.visibility = 'visible';
};

function createCell(row) {
  const newCell = row.insertCell(-1);
  newCell.className = 'created';
}

function createColumn() {
  const { rows } = table;
  for (let i = 0, l = rows.length; i < l; i += 1) {
    createCell(rows[i]);
  }
}

function createRow() {
  const newRow = table.insertRow(-1);
  const colsLength = table.rows[0].cells.length;
  for (let i = 0; i < colsLength; i += 1) {
    createCell(newRow);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#add-column').onclick = function addColumn() {
    createColumn(table);
  };
  document.querySelector('#add-row').onclick = function addRow() {
    createRow(table);
  };
});

function deleteCell() {
  document.querySelector('table').deleteColumn(1);
  const row = document.querySelector('table').rows[0];
  row.deleteCell(0);
}

console.log(deleteCell);

function deleteColumn() {
  const i = 1;
  if (rowis.length > 1) {
    for (let j = 0; j < rowis.length; j += 1) {
      rowis[j].deleteCell(i);
    }
  }
}

function deleteRow() {
  if (rowis.length > 1) {
    document.querySelector('table').deleteRow(-1);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#delete-column').onclick = function delCol() {
    deleteColumn(table);
  };
  document.querySelector('#delete-row').onclick = function delRow() {
    deleteRow();
  };
});
