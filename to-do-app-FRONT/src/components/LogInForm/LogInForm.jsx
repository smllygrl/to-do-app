const LogInForm = () => {
  // This component only handles the user input and testing
  // NOT SUBMIT TESTING

  const handlePassChange = (event) => {
    let pswrd = event.target.value;
    console.log(pswrd);

    // can't contain ~ ` < >
    // length must be between 5 and 12
    if (pswrd.length >= 5) {
      // const firstFour = partial.substring(0, 4); // "pass"
      // const partialLength = partial.length;
      // const lengthOfAstericks = partialLength - 4;
      // const returnStr = firstFour + (lengthOfAstericks * "*");

      let pswrdArr = pswrd.split("");
      for (let i = 0; i < pswrd.length; i++) {
        if (i > 3) {
          pswrdArr[i] = "*";
        }
      }

      let returnStr = pswrdArr.join("");
      console.log(returnStr);
      event.innerText = returnStr;
      console.log(pswrd);
    }
    return pswrd;
  };

  return (
    <form name="logIn">
      <input
        placeholder="Username"
        // onChange={handleUserChange()}
      ></input>
      <input placeholder="Password" onChange={handlePassChange}></input>
    </form>
  );
};

export default LogInForm;
