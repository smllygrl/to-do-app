export const securePassword = (password) => {
  let passwordArr = password.split("");
  for (let i = 0; i < password.length; i++) {
    passwordArr[i] = "*";
  }
  let returnStr = passwordArr.join("");
  console.log(returnStr);

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
