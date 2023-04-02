const text = document.getElementById('text');
const total = document.getElementById('total');
const remaining = document.getElementById('remaining');

text.addEventListener('keyup', ()=> {
    updating();

})

updating();


function updating() {
    tValue = text.value.length;
    total.innerHTML =  tValue;
    remaining.innerHTML=  text.getAttribute('maxLength') - tValue;
}