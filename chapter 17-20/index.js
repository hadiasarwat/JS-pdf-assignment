document.write(` <h1 style="text-align: center; margin-top: 200px;">Chapter-17 to 20 . <br> <br> <b>(ARRAYS AND LOOP)</b></h1>`)

// ------------------ ARRAYS AND LOOP -------------

// question 1.	Declare and initialize an empty multi dimensional array. (Array of arrays)
 // var array =[[],[],[],[]];


 // question 2.	Declare and initialize amulti dimensional array representing the following matrix:

//  var multi_array = [[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// document.write(multi_array[0] + "<br> <br>" + multi_array[1] + "<br> <br>"+ multi_array[2] + "<br>")

// question 3.	Write a program to print numeric counting from 1 to 10.

// for (var i=1; i<=10; i++){
//    document.write(i + "<br>")
// }

// question  4 .Write a program to print multiplication table of any numberusingforloop.Tablenumber&lengthshouldbe taken as an input from user.

// var tableOf = +prompt("Enter a number to show a multiplication table. ")
// var table_length =+ prompt("Enter a  multiplication table length. ")

// document.write("Mulyiplication table of  " +  tableOf + " length " + table_length + "</br>")

// for(var i = 1; i <=table_length; i++){
//     document.write( "</br>" + tableOf + " x " + i + " = " + (tableOf*i) + "</br>");
//   }

// question 5.	Write a program to print items of the following array using for loop:fruits=[“apple”,“banana”,“mango”,“orange”, “strawberry”]

// var fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// for (var i = 0; i <= fruits.length - 1; i++) {
//   document.write("<br/>" + fruits[i] + "<br/>");
// }
// for (var i = 0; i < fruits.length; i++) {
//   document.write( "<br/>" + "Element at " + i + " index is " + fruits[i] + "<br/>"
//   );
// }

// question 6.	Generate the following series in your browser.See example output.
// a.	Counting:1,2,3,4,5,6,7,8,9,10,11,12,13,14,15
// b.	Reversecounting:10,9,8,7,6,5,4,3,2,1
// c.	Even:0,2,4,6,8,10,12,14,16,18,20
// d.	Odd:1,3,5,7,9,11,13,15,17,19
// e.	Series:2k,4k,6k,8k,10k,12k,14k,16k,18k,20k

 /* document.write("<h1> Counting: </h1> ")
for (var i=1; i<=15; i++){
     document.write(i + "  ")
}

document.write("<h1>Reverse Counting: </h1> ")
for (var i=10; i>=1; i--){
     document.write(i + "  ")
}

document.write("<h1>Even Counting: </h1> ")
for (var i=0; i<=20; i++){
    if( i % 2 === 0){
        document.write(i + "  ")
    }
}

document.write("<h1>Odd Counting: </h1> ")
for (var i=0; i<=20; i++){
    if( i % 2 !== 0){
        document.write(i + "  ")
    }
}

document.write("<h1>Series Counting: </h1> ")
for (var i=2; i<=20; i++){
    if( i % 2 === 0){
        document.write(i + "K" + "  ");
    }
} */

 // question 7.	You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”] Write a program to enable “search by user input”in an array.
// After searching ,prompt the user whether the given item is found in the list or not. 

// var bakery_item = ["cake", "apple pie", "cookie", "chips", "patties"];
//  var  user_input = prompt("Welcome to ABC bakery. What do you want to order Sir/ma'am ?");
//  var flag = false;

// for(var i=0; i<=bakery_item.length -1; i++){
//   if(user_input === bakery_item[i]){
//     flag = true;
//     document.write(user_input + " is <b> available </b> at index " + i + " in our bakery.");
//   }
// }
// if(flag === false){
//           document.write(" We are Sorry. " + user_input + " is <b> not available </b>  in our bakery.");
// }

 // question 8.	Write a program to identify the largest number in the given array.A=[24,53,78,91,12].
 
 /*var number = [124, 53, 78, 91, 12,102];
var numberLargest = number[0];  

for (let i = 1; i < number.length; i++) {
    if (number[i] > numberLargest) {
        numberLargest = number[i];  
    }
}
document.write("The largest number is: " + numberLargest);*/

 // question 9.	Writeaprogramtoidentifythesmallestnumberinthe given array.A=[24,53,78,91, 12]

 /* var number = [124, 53, 78, 91, 12,102];
 var numbersmallest = number[0];  
 
 for (let i = 1; i < number.length; i++) {
     if (number[i] < numbersmallest) {
        numbersmallest = number[i];  
     }
 }
 document.write("The smallest number is: " + numbersmallest);*/


 
// question 10.	Write a program to print multiples of 5 ranging 1 to 100.
 
// for(var i=1; i<=100; i++){
//   if(i % 5 === 0){
//     document.write( i + " , "+  "  ")
//   }
// }