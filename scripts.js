const upperSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerSet = "abcdefghijklmnopqrstuvwxyz";
const symbolSet = "!@#$%^&*()_+[]|<>?/";
const numberSet = "0123456789";

const dispPass = document.getElementById("pass-box");
const totalLength = document.getElementById("total-char");
const upperInput = document.getElementById("upper-case");
const lowerInput = document.getElementById("lower-case");
const numberInput = document.getElementById("numbers");
const symbolInput = document.getElementById("symbols");
const btnGenerate = document.getElementById("btn");
const getRandomData = (myData) => {
  return myData[Math.floor(Math.random() * myData.length)];
};

const generatePassword = (password = "") => {
  if (upperInput.checked) {
    password += getRandomData(upperSet);
  }
  if (lowerInput.checked) {
    password += getRandomData(lowerSet);
  }
  if (numberInput.checked) {
    password += getRandomData(numberSet);
  }
  if (symbolInput.checked) {
    password += getRandomData(symbolSet);
  }
  if (password.length < totalLength.value) {
    return generatePassword(password);
  }
  dispPass.innerText = lengthMaintainPass(password, totalLength.value);
};

btnGenerate.addEventListener("click", () => {
  generatePassword();
});

const lengthMaintainPass = (password, num) => {
  if (password.length > num) {
    let newPass = password.slice(0, parseInt(num));
    return newPass;
  } else {
    return password;
  }
};
