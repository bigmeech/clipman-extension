/**
 * constructor
 * @param rowSize
 * @param columnSize
 * @constructor
 */
function Grid(rowSize, columnSize){
  this._rowSize = rowSize;
  this._columnSize = columnSize;
  this._data = [];
}

/**
 * gets items in a column
 * @param colIndex
 * @returns {Array}
 */
Grid.prototype.getItemsAtColumnIndex = function(colIndex){
  return this._data.map(function(items){
    return items[colIndex];
  });
};
/**
 * gets items in a row
 * @param rowIndex
 * @returns {*}
 */
Grid.prototype.getItemsAtRowIndex = function(rowIndex){
  return this._data[rowIndex];
};

/**
 * adds a column
 * @param items
 * @returns {Array|*}
 */
Grid.prototype.addColumn = function(items){
  //console.log({colsize:this._columnSize, itemLength: items.length});
  if(items.length !== this._columnSize){
    throw new Error('this is a ' + this._columnSize + ' by '+this._rowSize + ' grid, You cannot leave holes in the column')
  }


  if(this._data.length === 0){
    items.forEach(()=>{
      this._data.push([]);
    })
  }

  this._data.forEach((row) => {
    row.push(items.shift());
  });
  return this._data;
};

/**
 * adds a row
 * @param items
 * @returns {*|Array}
 */
Grid.prototype.addRow = function (items) {

  if(items.length !== this._rowSize){
    throw new Error('this is a ' + this._rowSize + 'by '+this._columnSize + 'grid, You cannot leave holes in the row')
  }
  this._data.push(items);
  return this._data;
};

/**
 *
 * @param colIndex
 * @param rowIndex
 * @returns {*}
 */
Grid.prototype.getDataAt = function(colIndex, rowIndex){
  if(rowIndex > this._data.length){
    throw new Error('Grid row out of bounds for index '+ rowIndex)
  }

  if(colIndex > this._data[rowIndex].length){
    throw new Error('Grid column out of bounds for index'+ colIndex)
  }
  return this._data[rowIndex][colIndex];
};

function createPositionData(colPos, rowPos, dataAtPosition){
  return {
    columnIndex: colPos,
    rowIndex: rowPos,
    data: dataAtPosition
  }
}

/**
 * returns a small api to navigate the grid
 * @returns {{goUp: (function()), goDown: (function()), goLeft: (function()), goRight: (function())}}
 */
Grid.prototype.getNavigator = function (){
  var colPos = 0;
  var rowPos = 0;

  return{
    goUp: () => {
      const newRowPos = rowPos - 1;
      rowPos = newRowPos < 0 ? rowPos : newRowPos;
      return createPositionData(colPos, rowPos, this.getDataAt(colPos, rowPos));
    },
    goDown: () => {
      const newRowPos = rowPos + 1;
      rowPos = newRowPos > this._rowSize ? rowPos : newRowPos;
      return createPositionData(colPos, rowPos, this.getDataAt(colPos, rowPos));
    },
    goLeft: () => {
      const newColumnPos = colPos - 1;
      colPos = newColumnPos < 0 ? colPos : newColumnPos;
      return createPositionData(colPos, rowPos, this.getDataAt(colPos, rowPos));
    },
    goRight: () => {
      const newColumnPos = colPos + 1;
      colPos = newColumnPos > this._columnSize ? colPos : newColumnPos;
      return createPositionData(colPos, rowPos, this.getDataAt(colPos, rowPos));
    }
  }
};


module.exports = Grid;
