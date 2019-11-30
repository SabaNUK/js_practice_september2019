function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  let capitaliszWord = word.charAt(0).toUpperCase() + word.slice(1);
  let capitalizeWord = word.charAt(0).toUpperCase() + word.slice(1);
  return capitalizeWord;

}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  // Add your code here!
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is requied");
  if (vatRate === undefined) throw new Error("vatRate is required");
  // Add your code here!
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  // Add your code here!
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Add your code here!
  let startPos = str.length / 2;
    let result;
    if (str.length % 2 === 0) {
      result = str.slice (startPos - 1, startPos + 1);
    }
    else {
      startPos = Math.trunc(startPos);
      result = str.slice(startPos, startPos + 1);
    }
    return result;
      

}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  // Add your code here!
  return word.split("").reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Add your code here!
  let newArr = []
  words.forEach(function (word) {

    reversedWord = word.split("").reverse().join("");

    newArr.push(reversedWord);
  })
  return newArr;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  // Add your code here!
  let total = 0;
  users.forEach(function(user) {
    const machineType = user.type;
    if(machineType === "Linux") {
      total = total + 1;
    }
  });
  return total;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");
  // Add your code here!
  let total = 0;
  scores.forEach(function(item) {
    total += item;
  })
  let preRound = total / scores.length;
  let result = preround.tofixed(2);
  return Number(result);

}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");
  // Add your code here!
  if (n % 3 === 0 && n % 5 === 0) {
    return 'fizzbuzz';
  }
  else if  (n % 3 === 0) {
    return 'fizz';
  }
  else if ( n % 5 === 0) {
    return 'buzz';
  }
  else { return n }

}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
