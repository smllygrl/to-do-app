export const securePassword = (password) => {
  // password > pass****
  let passwordArr = password.split("");
  for (let i = 0; i < password.length; i++) {
    if (i > 3) {
      passwordArr[i] = "*";
    }
  }
  let returnStr = passwordArr.join("");

  return returnStr;
  // does NOT render pass**** on front end
};

export const checkLength = (password) => {
  if (password.length >= 5) {
    if (password.length < 12) {
      return true;
    }
  }
  console.log("Password must be between 5 and 12 digits");
  return false;
};

export const validCharacters = (str) => {
  // as each character comes in, we want to know it is valid

  let strArr = str.split("");

  const regEx = /([A-Za-z0-9-_]){1}/;

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].match(regEx)) {
      continue;
    } else {
      console.log("Can only contain A-Z, a-z, 0-9, -, _");
      return false;
    }
  }
  console.log(`${str} is valid`);
  return true;
};
