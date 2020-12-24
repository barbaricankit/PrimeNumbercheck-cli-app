const readLineSync=require('readline-sync')
const color=require('chalk')
const days=[0,31,28,31,30,31,30,31,31,30,31,30,31]
console.log(color.green.italic("What is your name?"))
const userName=readLineSync.question();
console.log(color.green.italic("What is your date of birth in DD/MM?"))
let birthDate=readLineSync.question();
let flag=false;
let birthDay=birthDate.substring(0,2)
let birthMonth=birthDate.substring(3,5)
const regex=/^\d{2}\/\d{2}$/
while(!flag)
{
  if(birthDate==="")
  {
    console.log(color.red("Please enter your date of birth in DD/MM"));
    birthDate=readLineSync.question();

  }else if(!regex.test(birthDate)){
    console.log(color.red("Invalid format! Please enter in DD/MM format"));
    birthDate=readLineSync.question();
   
  }else if(birthMonth>12)
  {
    console.log(color.red("Invalid Month! Please enter a valid month DD/MM format"));
    birthDate=readLineSync.question();
    
  }else if(birthDay>days[birthMonth])
  {
    console.log(color.red("Invalid Day! Please enter a valid date in DD/MM format"));
    birthDate=readLineSync.question();
   
  }else{
    flag=true;
  }
      birthDay=birthDate.substring(0,2)
    birthMonth=birthDate.substring(3,5);
}
let count=0;
for(let i=2;i<birthDay;i++){

  if(birthDay%i===0)
  {
    count++;
  }
}
if(count==0)
{
  console.log(color.blue.bold.italic("Your birthdate is a Prime number"))
}
else{
  console.log(color.blue.bold.italic("Your birthdate is not a Prime number"))
}