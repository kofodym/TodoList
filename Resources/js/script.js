//1select the form  and textbox
const formFill = document.querySelector(".form");
const inputText = document.querySelector(".input-text");
// const buttonAdd = document.querySelector("#submit");

 //2 Add an event to the form, when you click on the button with the "submit type" it triggers the event form.
formFill.addEventListener("submit", (e) => {
  e.preventDefault();
  //test it by console logging the value of the input
  //   console.log(inputText.value);
  
});