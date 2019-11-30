function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  if(person.city === "Manchester"){
    return true;
  }else{
    return false;
  }
  //return person.city === "Manchester" ? true : false;
}


function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  // Your code here!
  const numOfBuses=people/40;

//return Math.ceil(people/40);
}



function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
  let sheep = 0;
  for(let key in arr){
    if(arr[key] === "sheep"){
      sheep++;
    }
  }
  return sheep;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  // Your code here!
  let city = person.address.city;
  let postCode = person.address.postCode;
  return city === "Manchester" && postCode.slice(0, 1) === "M";
  // made assumption that the city had to be Manchester and first digit
  // of postcode 'M'.  
  // If city was Manchester and postcode was not M then false
  // If city wasn't Manchester then false

}



module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
