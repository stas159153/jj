const plusvalue = document.querySelector('.plus')
const minusvalue = document.querySelector('.minus')
const counter = document.querySelector('.counter')
const resetchet = document.querySelector('.reset')
const button10 = document.querySelector('.one')
const button30 = document.querySelector(".two");
const button50 = document.querySelector(".three");
const content = document.querySelector('.content')
const superMenu = document.querySelector('.super-menu')
const inputValue = document.querySelector('.value')
const ultra = document.querySelector('.ultra-menu')
const ultraTitle = document.querySelector('.ultra-title')
const inputButton = document.querySelector('.input-button')
const ultraBox = document.querySelector('.ultra')
let savesValue;
 let counterValue;
let value = Number(localStorage.getItem("counterValue"));
 if(value == null){
  counterValue = 0
 }
 else{
  counterValue = Number(localStorage.getItem("counterValue"));
 }

counter.textContent = counterValue

 function plus(){
  counterValue++
  counter.textContent = counterValue
 updateLocalStorage()
 }
 
function updateLocalStorage(){
 localStorage.setItem("counterValue", counterValue);
}
  
 function minus() {
   counterValue--;
   counter.textContent = counterValue;
   updateLocalStorage()
 }
function saveInput(){
  //перевірка коли вписують не число в інпут
  if(isNaN(inputValue.value)){
    alert('Сказано ж ТІЛЬКИ ЦИФРИ')
    console.log(inputValue.value)
  }
  
  else if(inputValue.value){
    savesValue = inputValue.value;
    counterValue += Number(savesValue)
    counter.textContent = counterValue;
    updateLocalStorage()
  }
  else{
    alert('ВИ НІЧОГО НЕ ЗАПИСАЛИ *__*')
  }
}
 plusvalue.addEventListener('click',plus)
 minusvalue.addEventListener('click',minus )
 inputButton.addEventListener("click", saveInput);
 //event за допомогою якого ми скинемо все до 0
resetchet.addEventListener('click', event =>{
  counterValue = 0//chetchuk
  counter.textContent = counterValue//h1
  updateLocalStorage()//function
})

button10.addEventListener('click',event => {
  counterValue +=10; //chetchuk
  counter.textContent = counterValue; //h1
  updateLocalStorage(); //function
})

button30.addEventListener("click", (event) => {
  counterValue += 50; //chetchuk
  counter.textContent = Number = counterValue; //h1
  updateLocalStorage(); //function
});

button50.addEventListener("click", (event) => {
  counterValue += 100; //chetchuk
  counter.textContent = counterValue; //h1
  updateLocalStorage(); //function
});

// event для заголовка який одкривае super menu
superMenu.addEventListener('click', event =>{
content.classList.toggle('done')
})
ultraTitle.addEventListener('click',event =>{
ultraBox.classList.toggle("done");
})





