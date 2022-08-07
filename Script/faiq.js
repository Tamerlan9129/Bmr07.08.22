// let a =[5,9,55,12,6,78];
// let b =0;
// for (let i = 0; i < a.length; i++) {
    
//     if (a[i]>b) {

//         b=a[i];
//     }
    
// }
// console.log(b);
const name = prompt("Enter your name");
const weight = prompt("Enter your weight");
const height = prompt("Enter your height");
const formula = weight/Math.pow(height,2);
if(formula<18.5){
    alert(name+" your BMR is Underweight")
}
else if (formula>=18.5 & formula <=24.9){
    alert(name+" your BMR is Normal")
}
else if(formula>=25 & formula <=29.9){
    alert (name+" your BMR is  Owerweight")
}
else if(formula>=30 & formula <=34.9){
    alert (name+" your BMR is Normal Obese")
}
else {
    alert (name+" your BMR is Extremely Obese")
}