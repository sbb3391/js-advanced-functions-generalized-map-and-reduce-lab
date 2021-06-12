// Add your functions here

function map(items, callback) {
  let newArr = []
  for (const item of items) {
    newArr.push(callback(item))
  }
  return newArr
}

function reduce(items, callback, startingValue = 0) {
  let total;
  
  if (total) {
    total = startingValue;
    for (const item of items) {
      total = callback(item, total)
    }  

    return total
  } else {
    total = items[0]

    for (const item of items) {
      total = callback(item, total)
    }

    return total;
  }

}