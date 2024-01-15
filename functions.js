function user(){
    // console.log("Say Hello");
}
// user()

function addTwoNumbers (number1,number2){
    // console.log(number1+number2);
}
// addTwoNumbers(11,4)
(function tea(){
    // console.log(`MongoDB`);
})();

( (name) => {
    // console.log(`MERN`);
})()
 const balance=400;
 if(balance<500){
    // console.log("balance is less than 500");
 } else if(balance==500){
    // console.log("Yes You can call");
 }else {
    // console.log("You have enough balance to call");
 }


 const DC =true;
 const LoggedIn=false;

 if (DC&&LoggedIn){
    // console.log("Yes you can excess");
 }
 if(DC||LoggedIn){
    // console.log("Welcome ")
 }
 else{
    // console.log("Sorry You can Not excessw")
 }
  const month="April";
 switch ( month) {
    case "jan":
    // console.log("Jan");    
        break;
    case "November":
    // console.log("November");    
        break;
    case "December":
    // console.log("December");    
        break;
 
    default:
    // console.log("Sory Cannot Find the result");
        break;
 }

 for (let i = 0; i <=1; i++) {
    // console.log("Pakistan 12 ");
    for (let j = 0; j <=2; j++) {
        // console.log("Zindabad");
        
    }
    
 }
 const map= new Map()
 map.set('PK',"Pakistan")
 map.set('IN',"India")
 map.set('FR',"France")
//  console.log(map);
 for (const [key,value] of map) {
    // console.log(key,':',value);
 }

 const MyNumbers=[1,2,3,4,5,6,7,8,9,10,11]
 const newNums= MyNumbers.filter( (num) => num > 0)
//  console.log(newNums);
const myNums=[1,2,3,4]

// const TotalNums= myNums.reduce( function(acc,currval){
//     console.log(`acc:${acc} and currval:${currval}`);
//     return acc+currval
// },0)
const TotalNums=myNums.reduce((acc,currval)=>acc+currval,0)
console.log(TotalNums);