const ageInput = document.getElementById("ageInput");
const ageBtn = document.getElementById("ageBtn");
const result = document.getElementById("result");

ageBtn.addEventListener("click", function () {
  ageInputValue = ageInput.value;
  const ageInputValueDate = new Date(ageInputValue);
  const today = new Date();

  let ageDiff = today.getFullYear() - ageInputValueDate.getFullYear();
  const monthDiff = today.getMonth() - ageInputValueDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
    ageDiff--;
  }
  result.innerText = `Your age is: ${ageDiff}`;
});
