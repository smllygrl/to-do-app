export const validCharacters = (str) => {
  let strArr = str.split("");

  const regEx = /([A-Za-z0-9-_]){1}/;

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i].match(regEx)) {
      continue;
    } else {
      console.log(`${str} is invalid: Can only contain A-Z, a-z, 0-9, -, _`);
      return false;
    }
  }
  return true;
};
