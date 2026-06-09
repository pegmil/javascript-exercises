function fruitsArrays() {
    console.log("initializing fruits array");
    let fruits = ["Apple", "Orange", "Plum"];
    showFruits(fruits);

    console.log("replacing an element");
    fruits[2] = "Pear";
    showFruits(fruits);

    console.log("adding an element");
    fruits[3] = "Lemon";
    showFruits(fruits);

    console.log("Adding an element at the end");
    fruits.push("Grapefruit");
    showFruits(fruits);

    console.log("Extract the last element");
    console.log(fruits.pop());
    showFruits(fruits);

    console.log("Extract the first element of the array");
    console.log(fruits.shift());
    showFruits(fruits);

    console.log("Add the element to the front of the array");
    console.log(fruits.unshift("Apple2"));
    showFruits(fruits);

    console.log("Adding multiple elements to the back of the array");
    console.log(fruits.push("Orange", "Peach"));
    showFruits(fruits);

    console.log("Adding multiple elements to the front of the array");
    console.log(fruits.unshift("Pineapple","Lime","Mango"));
    showFruits(fruits);

    console.log("Two Dimensional Arrays");
    let fruits2 = [ 
        ["Banana","Raspberry", "Blueberry"], 
        ["Mango","Kiwi"], 
        ["Stinky Fruit","Smelly Fruit","Noxious Fruit"]];

        console.log(fruits2[0][0]);
        showFruits2(fruits2);

}

function showFruits(fruits) {
    for (let i = 0; i < fruits.length; i++) {
        console.log(fruits[i]);
    }
    console.log("Array Length: " + fruits.length);

    console.log("Another way to loop through an array");
    for (let fruit of fruits) {
        console.log( fruit);
    }
}

function showFruits2(fruits2) {
    for (let fruitX of fruits2) {
        for (let fruitY of fruitX) {
            console.log(fruitY);
        }
    }
}

fruitsArrays()
