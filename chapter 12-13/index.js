document.write(` <h1 style="text-align: center; margin-top: 200px;">Chapter-12 to 13. <br> <br>  <b>(IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS)</b></h1>`)

// ----------------------- IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS ----------

/* question 
1.	Write a program that takes a character (number or string) in a variable & checks whether the given input is a number,uppercase letter or lowercase letter.(Hint:ASCII codes:- A=65, Z=90, a=97, z=122).*/



/*var character = prompt("Enter character");

var code = character.charCodeAt(0);

var letter = String.fromCharCode(character);

if((character >= "A") && (character <= "Z")){
    alert("You have entered an Uppercase letter which is "+ character + " and its ASCII code is " + code + ".");
}else if((character >= "a") && (character <= "z")){
      alert("You have entered an Lowercase letter which is " + character + " and its ASCII code is " + code + ".");
}else if((character >=65) && (character <= 90)){
    alert( character + " is the ASCII code of uppercase letter " + letter );
}else if((character >= 97) && (character <= 122)){
    alert( character + " is the ASCII code of Lowercase letter " + letter); 
}*/

// question 2.	Write a JavaScript program that accept two integers and display the larger. Also show if the two integers are equal


/* var integer1 = prompt("Enter a integer one");
var integer2 = prompt("Enter a integer two");

if (integer1 > integer2) {
    document.write(integer1 + " is greater than " + integer2);
} else if (integer1 < integer2) {
    document.write(integer2 + " is greater than " + integer1);
} else {
    document.write(integer1 + " is  equal to. " + integer2);
}
 */

// question 3.	Write a program that takes input a number from user & state whether the number is positive, negative or zero.

// var number = +prompt("Enter a number.");

// if (number > 0) {
//     document.write(number + " is a positive number.");
// } else if (number < 0) {
//     document.write(number + " is a negative number.");
// } else {
//     document.write("The number is zero.");
// }


// question 4.	Write a program that takes a character (i.e. string of length1)andreturnstrueifitisavowel,falseotherwise
 
// var char = prompt("Enter a character:");

//  if (char == 'a' || char == 'A' || char == 'e' || char == 'E' || char == 'i' || char == 'I' || char == 'o' || char == 'O' || char == 'u' || char == 'U'){ 
//     alert(char + " is a vowel Letter"); 
//     }
//     else if((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) { 
//         alert("False  "  + char + " is not a vowel."); 
//         }



// question 5.	Write a program that
// a.	Store correct password in a JS variable.
// b.	Asks user to enter his/her password
// c.	Valid ate the two passwords :
// i.	Check if user has entered password.If not,then give message “ Please enter your password”
// ii.	Check if both passwords are same. If they are same,show message“Correct!The password you entered matches the original password”. Show “Incorrect password” otherwise.



// var correct_password = "123abcd";
// var user_password =prompt("Enter a password");

// if(user_password === null){
//     alert("Please Enter Your Password")
// }
// else if (user_password === correct_password){
//     alert("Correct!The Password you entered matches the original Password")
// } 
// else {
//     alert("Incorrect password");
// }


/* question 6.	Thisif/elsestatementdoesnotwork.Trytofixit: var greeting;
var hour = 13; if(hour<18){
greeting="Goodday"; else
greeting="Goodevening";
} */

// var greeting;
//  var hour = 13;
//  if(hour < 18){
//      greeting = " Good day";
//  }else{
//      greeting = "Good evening";
//  }
// document.write(greeting);



// question 7.	Write a program that takes time as input from user in 24 hours clock format like: 1900 = 7pm. Implement the following case using if, else & else if statements


// var time = +prompt("Enter a Standard time ?");
// if (time >= 0 && time < 1200) {
//   document.write("Good Morning ... ");
// } else if (time >= 1200 && time < 1700) {
//     document.write("Good Afternoon ... ");
// } else if (time >= 1700 && time < 2100) {
//     document.write("Good Evening ...");
// } else if (time >= 2100 && time < 2359) {
//     document.write("Good Night ... ");
// } else {
//     document.write("Invalid Time Entered ");
//}

        
