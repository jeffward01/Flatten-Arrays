//How to Flatten multi-dimensional arrays in Javascript
//Ch.5 Eloquent Javascript
//Source URL:  http://eloquentjavascript.net/05_higher_order.html
//Flattening Arrays


//Array to be Flattened
var arrays = [[1, 2, 3], [4, 5], [6]];
//
//
//=--------------=
//Method A
//=--------------=
var arrays = [[1, 2, 3], [4, 5], [6]];
var flattened = arrays.reduce(function (a, b) {
  return a.concat(b);
});

flattened;


//=--------------=
//Method B
//=--------------=
var arrays = [[1, 2, 3], [4, 5], [6]];

function flattened(arr) {
  return arr.reduce(function (a, b) {
    return a.concat(b);
  });
}

flattened(arrays);


//=--------------=
//Method C
//=--------------=
var arrays = [[1, 2, 3], [4, 5], [6]];
var merged = [];
merged = merged.concat.apply(merged, arrays);

merged;




//=--------------=
//Method D
//=--------------=
var arrays = [[1, 2, 3], [4, 5], [6]];

function flattened(arr) {
  var result = [];
  for (var i = 0; i < arr.length; ++i)
    for (var j = 0; j < arr[i].length; ++j)
      result.push(arr[i][j]);
  return result;
}
flattened(arrays);
// → [1, 2, 3, 4, 5, 6]
