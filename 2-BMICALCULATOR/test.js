const form=document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault()

const height=parseInt(document.querySelector('#height').value)
const weight=parseInt(document.querySelector('#weight').value)
const results=document.querySelector('.results')

if(height === '' || height<0 || isNaN(height)){
    results.innerHTML =`please give a valid height ${height}`;
}else if(weight === '' || weight<0 || isNaN(weight)){
    results.innerHTML =`please give a valid weight ${weight}`;
} else{
    const BMI= (weight / ((height*height)/10000)).toFixed(2);
    results.innerHTML=`<span>${BMI}</span>`;
}
// if(bmi<18.6){
//     results.innerHTML=`underWeight`;
// }
// if(bmi<18.6){
//     results.innerHTML=`<span>Under weigth :${bmi}</span>`;
//     }else if(bmi>18.6 && bmi<24.9){
//         results.textContent=`Normal Weight:${bmi}`;
//     }else{
//         results.textContent=`Over Weight : ${bmi}`
//     }
  
if(BMI <= 18.6){
    message = message + " you are Under Weight";
    body.style.backgroundColor = 'purple';
}
else if(BMI > 18.6 && BMI<= 24.9){
    message = message + "Normal Range";
    body.style.backgroundColor = 'grey';
}
else{
    message = message + "Warning! Over Weight";
    body.style.backgroundColor = 'red';
}
result.innerHTML = `<span>${BMI} ${message}</span>`;

});
