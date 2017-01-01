'use strict';

const expect = require('chai').expect;
const Grid = require('../../../src/lib/grid');

describe('Grid Structure Library', () => {

  it('should initialize grid with 5 col and 5 row', () => {
    const grid = new Grid(5,5);
    expect(grid._rowSize).to.be.equals(5);
    expect(grid._columnSize).to.be.equals(5);
  });

  it('should have an array of one element in each row', () => {
    const grid = new Grid(5,5);
    grid.addColumn([1,2,3,4,5]);
    grid._data.forEach(function(row){
      expect(row).to.have.length(1);
    })
  });

  it('should have an array of 2 elements in each row', () => {
    const grid = new Grid(5,5);
    grid.addColumn([1,2,3,4,5]);
    grid.addColumn([6,7,8,9,10]);
    grid._data.forEach(function(row){
      expect(row).to.have.length(2);
    })
  });

  it('should have an array of 5 elements', () => {
    const grid = new Grid(5,5);
    grid.addRow([1,2,3,4,5]);
    grid._data.forEach(function(row){
      expect(row).to.have.length(5);
    })
  });

  it('should have an array of 1 element as column', () => {
    const grid = new Grid(5,5);
    grid.addRow([1,2,3,4,5]);
    expect(grid.getItemsAtColumnIndex(0)).to.be.a('array').and.to.have.length(1);
  });
});
