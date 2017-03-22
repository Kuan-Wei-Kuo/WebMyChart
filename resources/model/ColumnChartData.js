import './Rect.js';

function ColumnChartData(rect) {
  this.rect = rect;
  this.width;
  this.height;
}

ColumnChartData.prototype.getRect = function () {
  return this.rect;
};

ColumnChartData.prototype.getWidth = function () {
  return this.width;
};

ColumnChartData.prototype.getHeight = function () {
  return this.height;
};
