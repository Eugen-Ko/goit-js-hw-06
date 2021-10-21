const injectedText = document.querySelector("#validation-input");

console.log({injectedText});

injectedText.value = 1111;

console.log(injectedText.dataset.length);

function textCheck() {
  console.log(injectedText.value.length);
  console.log(injectedText.value.length === Number(injectedText.dataset.length)); 
  
  injectedText.id = injectedText.id + ".valid";
  console.log(injectedText.id);
  // injectedText.value.length === Number(injectedText.dataset.length) 
  // ? injectedText.id.toggle('valid') 
  // : injectedText.id.toggle('invalid');
};

textCheck();
  
injectedText.addEventListener("blur", textCheck);