const removeFromArray = function(inArray, ...args) {

    const newArray = [];
   inArray.forEach((item) => {
   if (!args.includes(item)) {
      newArray.push(item);
    }
   })
   return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
