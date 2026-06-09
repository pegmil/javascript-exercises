function arrayOperations() {
    let styles = ["Jazz", "Blues"];
    printArray(styles);

    styles.push("Rock-n-Roll");
    printArray(styles);

    styles[Math.floor(styles.length / 2)] = "Classics";
    printArray(styles);

    styles.shift();
    printArray(styles);

    styles.unshift("Rap", "Reggae");
    printArray(styles);

}

function printArray(arr) {
    let stringToPrint = "";

    for (let arrX of arr) {
        stringToPrint = stringToPrint + ", " + arrX;
    }
    console.log(stringToPrint);
}


function addOne(num) {
    return num + 1;
}

function mapArray() {
    const arr = [1, 2, 3, 4, 5];
    const mappedArr = arr.map(addOne);
    console.log("arr: " + arr);
    console.log("mapped arr: " + mappedArr);
}

function isOdd(num) {
    return num % 2 !== 0;
}

function testOdd() {
    const arr = [1, 2, 3, 4, 5];
    const oddNums = arr.filter(isOdd);
    console.log(oddNums);
    console.log(arr);
}

function testReduce() {
    const arr = [1, 2, 3, 4, 5];
    const productOfAllNums = arr.reduce((total, currentItem) => {
        return total * currentItem;
    }, 1);

    console.log(productOfAllNums);
    console.log(arr);
}

function sumOfTripledEvens(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {

     // Convert array element to a number first to prevent string concatenation
    const num = Number(array[i]); 

    // Step 1: If the element is an even number
    if (num % 2 === 0) {
      // Step 2: Multiply this number by three
      const tripleEvenNumber = num * 3;

      // Step 3: Add the new number to the total
      sum += tripleEvenNumber;
    }
  }
  return sum;
}

function testTripleEvens() {
    const myArray = [1,2,3,4,5,6,7,8,9,10];
   
    console.log("sum of TripledEvens; " +  sumOfTripledEvens(myArray));

    console.log("new sum of TripledEvens: " + newSumOfTripledEvens(myArray));
}

function newSumOfTripledEvens(array) {
    return array.filter((num) => num % 2 === 0).map((num) => num *3).reduce((acc, curr) => acc + curr);
}

// arrayOperations()
// mapArray()
// testOdd()
// testReduce()
testTripleEvens()