const inputText = document.getElementById('inputText');
const buttonText = document.getElementById('buttonText');


buttonText.addEventListener('click', function() {
  const inputValue = inputText.value;  
 
  localStorage.setItem('username', inputValue);
  
  alert('Dato guardado en localStorage!');
});
