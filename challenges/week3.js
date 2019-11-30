function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  // Your code here!
  let squaredArr = nums.map(function (item) {
    return item * item;
  })
  return squaredArr;

}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Your code here!
  let finalWord = words[0].toLowerCase();
  // could be a forEach
  for (let i = 1; i < words.length; i++) {
    let firstLetter = words[i].slice(0, 1).toUpperCase();
    // going to make them all lower case regardless of how they started
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  let total = 0;
    people.forEach(function (item) {
      total = total + item.subjects.length;
    })
    return total;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  // Your code here!
  if (!ingredient) throw new Error("ingredient is required");
    let ingredientFound = false
    menu.forEach(function (menuItem) {
      menuItem.ingredients.forEach(function (menuItemIngredient) {
        if (menuItemIngredient === ingredient) {
          ingredientFound = true;
        }
      })

    })
    return ingredientFound;
  
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");
  // Your code here!
  for (let k = 0; k < len; k++) {
    // get min
    // thanks for the spread operator Nacho and Harriet
    let min = Math.min(...newArr);
    // push into new array
    sortedArr.push(min);


}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
