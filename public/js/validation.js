const numericInput = document.getElementById('phone');

numericInput.addEventListener('input',(event) =>{
    const inputValue = event.target.value;
    const numericValue = inputValue.replace(/[^0-9]/g,'');
    event.target.value = numericValue;
});