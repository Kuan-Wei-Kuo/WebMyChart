var Extend = function(source, destination) {

  destination = destination || {};

  for(var property in source) {
      if (typeof source[property] === 'object') {
          destination[property] = Object.prototype.toString.call(source[property]) === "[object Array]" ? [] : {};
          destination[property] = Extend(source[property], destination[property]);
      }
      else {
          destination[property] = source[property];
      }
  }
  return destination;
}
