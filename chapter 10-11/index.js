document.write(` <h1 style="text-align: center; margin-top: 200px;">Chapter- 10 to 11 . <br> <br> <b>(USER INPUT & CONDITIONAL STATEMENT)</b></h1>`)

// --------------------- USER INPUT & CONDITIONAL STATEMENT -----------

// question 1.	Write a program to take “city” name as input from user. If user enters “Karachi”, welcome the user like this: “Welcome to city of lights”

// var city = prompt("Enter city name");

// if(city === "karachi"){
//   alert(" “Welcome to city of lights” ")
// }

// question 2.	Write a program to take “gender” as input from user. If the user is male, give the message: Good Morning Sir. If the user is female, give the message: Good Morning Ma’am.

// var gender = prompt("Enter Your Gender.")

// if(gender === "male"){
//   alert("Good Morning Sir.")
// }
// else{ alert("Good Morning Ma’am.") ; }

// question 3.	Write a program to take input color of road traffic signal from the user & show the message according to this table:

// var traffic_signals = prompt("Enter a color of traffic signal. \n\n eg ; \n red \n yellow \n green ");
// if(traffic_signals === "red"){
//   alert("Must Stop .")
// }
// else if(traffic_signals === "yellow"){
//     alert("Ready to move")
// }
// else if(traffic_signals === "green"){
//     alert("Move now.")
// }
// else{
//     alert(" Select the given colors.")
// }

// question 4.	Write a program to take input remaining fuel in car (in litres) from user. If the current fuel is less than 0.25litres, show the message “Please refill the fuel in your car”

// var fuel = +prompt("Enter a remaining fuel.");
// if(fuel < 0.25){
//  alert("Please refill the fuel in your car")
// }
// else{
//     alert("Keep driving");
// }


// question 5.	Run this script, & check whether alert message would be displayed or not. Record the outputs.

 // -- a--
// 	var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
 
// ---- b ---
// 	var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// else{
//     alert("given condition for variable b is not true");
// }

   // --- c--
// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// else{
//  alert("condition 1  not true");
//   }

// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// else{
//     alert("condition 3 is not true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }

// --- d--
// var materialCost = 20000;
// var laborCost = 2000;
// var total_cost = materialCost + laborCost;
// if(total_cost === laborCost + materialCost){
//     alert("The cost equals");
// }


 //--- e---

// if (true){ alert("True");
// }
// if (false){ alert("False");
// }else{
//     alert("condition is not true");
// }
 
// ---- f --

// if("car" < "cat"){
// alert("car is smaller than cat");
// }

// question 6.	Write a program to take input the marks obtained in three subjects & total marks. Compute & show the resulting percentage on your page. Take percentage & compute grade as per following table:


// var total_marks = prompt(" Enter total marks ");
// var obtained_marks = prompt(" Enter your obtained marks");
// var percentage = (obtained_marks / total_marks) * 100;

// document.write("<h1>Marks Sheet</h1>" + "</br>" + "Total marks : " + total_marks + "</br>" +
//    "Obtained marks : " + obtained_marks + "</br>" + 
//   "Percentage : " + percentage + "%" + "</br>");

// if(percentage>= 80){

//     document.write("Grade : A-One </br>" + "Remarks : Excellent  </br>" );
// }
//  else if(percentage>=70){
//     document.write("Grade : A  </br>" + "Remarks : Good  </br>" );
// }
//     else if(percentage>=60){
//     document.write("Grade : B </br>" + "Remarks : You need to improve" + "</br>" );
// }
// else{
//     document.write("Grade : Fail  </br>" + "Remarks : Sorry!" );
// }

// question 7.	Guess game:
// Store a secret number (ranging from 1 to 10) in a variable. Prompt user to guess the secret number.
// a.	If user guesses the same number, show “Bingo! Correct answer”.
// b.	If the guessed number +1 is the secret number, show “Close enough to the correct answer”.


// var number = 7;

// var user_guess = +prompt("Enter a Number 1 to 10.");

// if(user_guess === number){
//  alert("Bingo! Correct answer.")
// }
// else if(user_guess === ++number){
//     alert("Close enough to the correct answer")
// }
// else{
//     alert("Try Again.")
// }

// question 8.	Write a program to check whether the given number is divisible by 3. Show the message to the user if the number is divisible by 3.

// var num= +prompt("Enter a number");
// if(num %3 === 0){
// alert("The number is divisible by 3 ");
// }
// else{
//  alert("The number is not divisible by 3 ");
// }

// question 9.	Write a program that checks whether the given input is an even number or an odd number.

// var num= +prompt("Enter a number");
//  if(num % 2 === 0){
//     alert("The number is even. ");
//     }
// else{
//      alert("The number is odd. ");
//  }

// question 10.	Write a program that takes temperature as input and shows a message based on following criteria
// a.	T > 40 then “It is too hot outside.”
// b.	T > 30 then “The Weather today is Normal.”
// c.	T > 20 then “Today’s Weather is cool.”
// d.	T > 10 then “OMG! Today’s weather is so Cool.”

// var temp= +prompt("Enter a number");
// if(temp > 40){
//   alert("It is too hot outside.");
//  }
//  else if(temp > 30){
//    alert("It is too hot outside.");
//  }
//  else if(temp > 20){
//    alert("Today’s Weather is cool.");
//  }  
//  else{
//     alert("OMG! Today’s weather is so Cool.");
//   }   

// question 11.	Write a program to create a calculator for +,-,*, / & % using if statements. Take the following input:
// a.	First number
// b.	Second number
// c.	Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

// var first_num= +prompt("Enter a first number");
// var second_num= +prompt("Enter a second number");
//  var operations = prompt(" Choose operators \n eg \n + - * % /  ");

// if(operations === "+"){
//   alert("The sum " + first_num + " " + operations  + " " + second_num + " is" + " " + (first_num+second_num) );
// }
// else if(operations === "-"){
//     alert("The sum " + first_num + " " + operations  + " " + second_num + " is" + " " + (first_num-second_num) );
//   }
// else if(operations === "*"){
//     alert("The sum " + first_num + " " + operations  + " " + second_num + " is" + " " + (first_num*second_num) );
//   }
// else if(operations === "/"){
//     alert("The sum " + first_num + " " + operations  + " " + second_num + " is" + " " + (first_num/second_num) );
//   } 
// else if(operations === "%"){
//     alert("The sum " + first_num + " " + operations  + " " + second_num + " is" + " " + (first_num%second_num) );
//   } 
//  else{
//     alert("you put unvalid operators.")
//  } 

