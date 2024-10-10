document.write(` <h1 style="text-align: center; margin-top: 200px;">Chapter-05. <br> <br>  <b>(MATH EXPRESSIONS)</b></h1>`)

// ---------------------------------------- MATH EXPRESSIONS -----------

// 1.	Write a program that take two numbers & add them in a new variable. Show the result in your browser.

/* var num1 = +prompt("Enter number 1.");
var num2 = +prompt("Enter number 2.");
var total = num1 + num2 ;

document.write(" sum of " + num1 + " and " + num2 +" is " + total ); */


// 2.	Repeat task1 for subtraction, multiplication, division & modulus.

  //  for subtraction :

/*  var num1 = +prompt("Enter number 1.");
var num2 = +prompt("Enter number 2.");
var total = num1 - num2 ;

document.write(" sum of " + num1 + " and " + num2 +" is " + total ); */


// for  multiplication :

/*  var num1 = +prompt("Enter number 1.");
var num2 = +prompt("Enter number 2.");
var total = num1 * num2 ;

document.write(" sum of " + num1 + " and " + num2 +" is " + total );  */

// for division

/*  var num1 = +prompt("Enter number 1.");
var num2 = +prompt("Enter number 2.");
var total = num1 / num2 ;

document.write(" sum of " + num1 + " and " + num2 +" is " + total ); */

// for  modulus 

/*  var num1 = +prompt("Enter number 1.");
var num2 = +prompt("Enter number 2.");
var total = num1 % num2 ;

document.write(" sum of " + num1 + " and " + num2 +" is " + total ); */

// 3.	Do the following using JS Mathematic Expressions :

//    a.	Declare a variable. 
 // var y;

 // b.	Show the value of variable in your browser like “Value after variable declaration is: ??”.
  //document.write( " Value after variable declaration is " + y );

// c. Initialize the variable with some number.
 // y=5;

// d.	Show the value of variable in your browser like “Initial value: 5”.
// document.write( " Initial Value : " + y );

// e.	Increment the variable.
 // ++y ;

// f.	Show the value of variable in your browser like “Value after increment is: 6”.
 // document.write( "Value after increment is : " + y );
  
// g.	Add 7 to the variable.
// y= y + 7;

// h.	Show the value of variable in your browser like “Valueafter addition is: 13”.
 // document.write( "Value after addition is : " + y );

// i.	Decrement the variable.
 // --y;
// j.	Show the value of variable in your browser like “Value after decrement is: 12”.
// document.write( "Value after decrement is : " + y );

// k.	Show the remainder after dividing the variable’s value by 3.
// y= y % 3;

// l.	Output : “The remainder is : 0”. 
// document.write( "The remainder is : " + y );

 /*question 4.	Cost of one movie ticket is 600 PKR. Write a script to store
ticket price in a variable & calculate the cost of buying 5 tickets
to a movie. */

/* var ticketCost = 600;
var total =  ticketCost * 5;
document.write("Total cost to buy 5 tickets to a movie is " + total + " PKR"); */

/*question 5. Write a script to display multiplication table of any number in your browser. */

/*var table = +prompt("Enter a number");
document.write(" Table of " + table + "<br>" + "<br>");

for(i=1; i<=10; i++){
    document.write(table + "X" + i + " =" + (table*i) + "<br>")
} */

//question 6.	The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here.

//a.	Store a Celsius temperature into a variable.

// var celTemp = +prompt("Enter a Celsius number.");

//b.	Convert it to Fahrenheit & output “NNoC is NNoF”

/*var toFahrenheit = (celTemp* 9/5) + 32;
document.write("<h2> Celsius to Fahrenheit</h2> </br>")
document.write( celTemp + "°C" + " is " + toFahrenheit + "°F"); */

//c.	Now store a Fahrenheit temperature into a variable.

/*var fahrTemp = +prompt("Enter a Fahrenheit number.") ;
var toCelsius  = (fahrTemp - 32) * 5/9 ;
document.write("<h2> Fahrenheit to Celsius</h2> </br>")
document.write( fahrTemp + "°F" + " is " + toCelsius + "°C"); */

//d.	Convert it to Celsius & output “NNoF is NNoC”. */


/*question 
7.		Write a program to implement checkout process of a shopping cart system for an e-commerce website. Store the following in variables
 

a.	Price of item 1
b.	Price of item 2
c.	Ordered quantity of item 1
d.	Ordered Quantity of item 2
e.	Shipping charges  */

/*var priceItem1 = 650;
var quantityitem1 = 3 ;

var priceItem2 = 100;
var quantityitem2 = 7 ;

var shipingCharges = 100;
var totalCost = (priceItem1 * quantityitem1) + (priceItem2*quantityitem2) + shipingCharges ;

document.write(" <h1>Shopping  Cart</h1> <br> <br> <br>")
document.write("Price of item 1 is " + priceItem1 + "<br> <br>");
document.write("Quantity of item 1 is " +quantityitem1 + "<br> <br>");
document.write("Price of item 2 is " + priceItem2 + "<br> <br>");
document.write("Quantity of item 2 is " +quantityitem2 + "<br> <br>");
document.write("Total Cost of your order is " + totalCost); */

// question 8.	Store total marks & marks obtained by a student in 2 variables. Compute the percentage & show the result in your browser

/*var totalMarks=+prompt("Enter a total marks ");
var obtainMarks=+prompt("Enter a obtained marks ");
var percentage = (obtainMarks/ totalMarks) *100;

document.write(" <h1>Marks Sheet</h1> <br> <br> <br>")
document.write("Total Marks :" + totalMarks + "<br>" )
document.write("Marks obtained :" + obtainMarks + "<br>" )
document.write("Percentage :" + percentage + " %" +"<br>" ) */

  // question 9.	Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. Perform all calculations in a single expression. (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee)*/

 /* var dollar = +prompt("Enter dollars do you have ?");
  var riyals =+prompt("Enter riyals do you have ?")
  var total = (dollar * 280.63) + (riyals * 75.02);

  document.write(" <h1>Currency inPKR</h1> <br> <br> <br>")
  document.write("Total Currency in PKR : "+ total);*/

  /* question 10.	Write a program to initialize a variable with some number and do arithmetic in following sequence:
a.	Add 5
b.	Multiply by 10
c.	Divide the result by 2
Perform all calculations in a single expression */

 /*var exp = 3;
var total_exp = ((exp + 5*10)) /2;

document.write( total_exp ); */

  /*question  11.	The Age Calculator: Forgot how old someone is? Calculate it!
 a.	Store the current year in a variable.
 b.	Store their birth year in a variable.
 c.	Calculate their 2 possible ages based on the stored values.
 Output them to the screen like so: “They are either NN or NN years old”. */

 /*var currentYear = +prompt("Enter a current year.");
 var birthYear = +prompt("Enter a birth year.");
 var age = currentYear - birthYear;
 
 document.write(" <h1>Age Calculator</h1> <br> <br> <br>")
 document.write( " Current Year : " + currentYear + "<br>");
 document.write( " Birth Year : " + birthYear + "<br>");
 document.write( " Your age is  : " + age + "<br>"); */

 /* question 

12.	The Geometrizer: Calculate properties of a circle.
a.	Store a radius into a variable.
 

b.	Calculate the circumference based on the radius, and output “The circumference is NN”.
(Hint : Circumference of a circle = 2 π r , π = 3.142)
Calculate the area based on the radius, and output “The area is NN”. (Hint : Area of a circle = π r2, π = 3.142) */

// var radius = +prompt("Enter Radius of circle.");
// var circumference = 2*3.142*radius ;
// var area= 3.142 * (radius*radius);

// document.write("<h1> The Geometrizer </h1> <br> <br> <br>")
// document.write("Radius of circle is : " + radius + "<br>");
// document.write(" The circumference is : " + circumference + "<br>");
// document.write(" The area is  : " + area + "<br>"); 

/* question 13.	The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more.
a.	Store your favorite snack into a variable
b.	Store your current age into a variable.
c.	Store a maximum age into a variable.
d.	Store an estimated amount per day (as a number).
e.	Calculate how many would you eat total for the rest of your life.
Output the result to the screen like so: “You will need NNNN to last you until the ripe old age of NN”. */


/*var favorite_snack = prompt("Enterv your favourite snack .");
var current_age = +prompt("Enter your current age.");
var maximum_age = +prompt("Enter a maximum age .");
var snack_perDay = +prompt("Amount of snack per Day?.");

var snack_num = (maximum_age - current_age) * snack_perDay;

document.write("<h1>The Lifetime Supply Calculator </h1> <br> <br> <br>");
document.write("Favourite Snacks : " + favorite_snack + "<br>");
document.write(" Current age : " + current_age + "<br>");
document.write("Estimated Maximum  age : " + maximum_age + "<br>");
document.write("Amount of snacks per day : " + snack_perDay + "<br>");
document.write("You will need " + snack_num + " " + favorite_snack  + " to last you until the ripe old age of " +maximum_age);*/


 
