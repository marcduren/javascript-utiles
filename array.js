///Supprimer les doublons d'un tableau
function removeDuplicates(a) {
  return a.filter((element, index) => a.indexOf(element) === index);
}

//--EXEMPLE
result = removeDuplicates([2,3,3,1,2,7,5,5,4,9,4,14]);
//[2,3,1,7,5,4,9,14]


///join
const join = (arr, separator = ',') =>
  arr.reduce(
    (acc, val, i) =>
      i === arr.length - 1
          ? acc + val
          : acc + val + separator,
    ''
  );

//--EXEMPLE
result = join(['pen', 'pineapple', 'apple', 'pen']);
// "pen,pineapple,apple,pen"