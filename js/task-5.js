// const checkForSpam = function (message) {
//   let arrayString = message.split(" ");

//   for (let i = 0; i < arrayString.length; i += 1) {
//     if (
//       arrayString[i].toLowerCase().includes("spam") ||
//       arrayString[i].toLowerCase().includes("sale")
//     ) {
//       return true;
//     }
//   }

//   return false;
// };

const checkForSpam = function (message) {
  if (
    message.toLowerCase().includes("spam") ||
    message.toLowerCase().includes("sale")
  ) {
    return true;
  }

  return false;
};

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
