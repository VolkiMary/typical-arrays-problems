
exports.min = function min (array) {
  return Math.min.apply(null, array); 
}

exports.max = function max (array) {
  return Math.max.apply(null, array);
}

exports.avg = function avg (array) {
  var sum = 0;
   for(var i = 0; i <array.length; i++) {
       sum += array[i];
   }
   return sum / array.length;
}



