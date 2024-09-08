var form = document.getElementById("survey-form");
function handleSubmit(event) {

  event.preventDefault();
  alert("Submit button pressed!");

}
form.addEventListener('submit', handleSubmit);