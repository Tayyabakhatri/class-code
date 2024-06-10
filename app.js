// for(i=0;i<=10;i++){
//     for(j=10;j>i;j--){
//         console.log("tayyaba")
//     }
// }
var arr1 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
var arr2 = [
  [4, 6, 8],
  [12, 0, 2],
  [5, 7, 3],
];
var sum = [];
for (var i = 0; i < arr1.length; i++) {
  sum[i] = []; //initializing array for each row
  for (var j = 0; j < arr2[i].length; j++) {
    sum[i][j] = arr1[i][j] + arr2[i][j];

}
}
console.log(sum);

// var arr1 = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];
//   var arr2 = [
//     [4, 6, 8],
//     [12, 0, 2],
//     [5, 7, 3],
//   ];
//   var sum = [];
//   for (var i = 0; i < arr1.length; i++) {
//     sum[i] = []; //initializing array for each row
//     for (var j = 0; j < arr1[i].length; j++) {
//       sum[i][j] = arr1[i][j] + arr2[i][j];
//     }
//   }
  
//   console.log(sum);
  
