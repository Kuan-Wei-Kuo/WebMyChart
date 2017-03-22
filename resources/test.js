function a() {
  this.name = 1;
  this.config = 2;

};

a.prototype.testAA = function () {
  return 1;
};

function b() {
  this.name = 2;
};

function c() {
  this.name = 3;
};

Extend(a.prototype, b.prototype);
Extend(a.prototype, c.prototype);
