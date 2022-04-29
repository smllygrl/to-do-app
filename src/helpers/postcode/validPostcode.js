export const validPostcode = (postcode) => {
  console.log(`checking the postcode: ${postcode}`);
  if (postcode.length !== 4) {
    return console.log("Postcode must be 4 digits long");
  }

  const postcodeArr = postcode.split("");
  const regExp = /[0-9]/;

  for (let i = 0; i < postcode.length; i++) {
    let isNum = regExp.test(postcodeArr[i]);
    if (!isNum) {
      console.log(`${postcode} is invalid. Can only be four numbers`);
      return false;
    }
  }

  console.log(`${postcode} is valid`);

  return true;
};
