var form = document.getElementById("survey-form");
function handleSubmit(event) {

  event.preventDefault();
  alert("Submit Button Pressed!");

}
form.addEventListener('submit', handleSubmit);