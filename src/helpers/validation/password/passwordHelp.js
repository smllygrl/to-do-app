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
