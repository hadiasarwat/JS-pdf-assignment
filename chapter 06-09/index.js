document.write(` <h1 style="text-align: center; margin-top: 200px;">Chapter-06 to 09 . <br> <br> <b>(MATH EXPRESSIONS)</b></h1>`)

// ---------------------- MATH EXPRESSIONS ---------------
// question 1.	Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:

// var a = 10;
// document.write("<h1>Result :</h1> " + " The value of a is : " + a + "<hr>")

// document.write(" The value of ++a is : " + ++a + "<br>");
// document.write("Now  the value of a is : " + a +"<br> <br> <br>");

// document.write("The value of a++  is : " + a++ + "<br>");
// document.write("Now  the value of a is : " + a +"<br> <br> <br>");

// document.write("The value of --a  is : " + --a + "<br>");
// document.write("Now  the value of a is : " + a +"<br> <br> <br>");

// document.write("The value of a--  is : " + a-- + "<br>");
// document.write("Now  the value of a is : " + a +"<br> <br> <br>");

// question 2.	What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;  " a=1"
// --a - --b; //  "b=0"
// --a - --b + ++b; '2'
// --a - --b + ++b + b--; '3'


// var a = 2;
//   var b = 1;
//   var result = --a - --b + ++b + b--;
  
//   document.write("a is " + a + "</br> b is " + b + "</br> result is " + result);


// question 3.	Write a program that takes input a name from user & greet the user.
//  var name = prompt ("Enter a name :");
//  document.write("HELLO  ! WELCOME   "  + name );

/* question 4.	Write a program to take input a number from user & display it’s multiplication table on your browser. If user does not enter a new number, multiplication table of 5 should be displayed by default.*/

// var num =+prompt("Enter number " , 5);
// document.write("<h1> Table of</h1>");

// for(var i=1; i<=10; i++){
//     document.write(num + "x" + i + "=" +(num*i) + "<br>")
// }

/* question 
6.	Take
a)	Take three subjects name from user and store them in 3 different variables.
b)	Total marks for each subject is 100, store it in another variable.
c)	Take obtained marks for first subject from user and stored it in different variable.
 

d)	Take obtained marks for remaining 2 subjects from user and store them in variables.
e)	Now calculate total marks and percentage and show the result in browser like this */


//   var subject1 = prompt(" Enter Subject 1");
//   var subject2 = prompt(" Enter Subject 2");
//   var subject3 = prompt(" Enter Subject 3");

//   var subMarks = 100;

//   var sub1_marks = +prompt("Enter a subject 1 marks.");
//   var sub2_marks = +prompt("Enter a subject 2 marks.");
//   var sub3_marks = +prompt("Enter a subject 3 marks.");

//   var obtained_marks = sub1_marks + sub2_marks + sub3_marks;

//   var total_marks = subMarks + subMarks + subMarks;

//   var percentage = (obtained_marks / total_marks) * 100;

//   var sub1_percentage = (sub1_marks /subMarks)*100;
//   var sub2_percentage = (sub2_marks /subMarks)*100;
//   var sub3_percentage = (sub3_marks /subMarks)*100;
  
//   document.write("<table border=8px;>" +
    
//     "<tr>" + "<th>" + "Subject" + "</th>" + "<th>" + "Total Marks" + "</th>" + "<th>" + "Obtained Marks" + "</th>" + "<th>" + "Percentage" + "</th>" + "</tr>" +  
//     "<tr>" + "<td>" + subject1 + "</td>"+ "<td>" + subMarks + "</td>"+ "<td>" + sub1_marks + "</td>" + "<td>" + sub1_percentage + "%" + "</td>" + "</tr>"+ 
//     "<tr>" + "<td>" + subject2 + "</td>"+ "<td>" + subMarks + "</td>"+ "<td>" + sub2_marks + "</td>" + "<td>" + sub2_percentage + "%" + "</td>" + "</tr>" + 
//     "<tr>" + "<td>" + subject3 + "</td>"+ "<td>" + subMarks + "</td>"+ "<td>" + sub3_marks + "</td>" + "<td>" + sub3_percentage + "%" + "</td>" + "</tr>"+ 
//     "<tr>" + "<td>" + " " + "</td>" + "<td>" +"<center>" + "<b>" + total_marks +"</center>" + "</b>"+"</td>"+ "<td>" +"<center>" + "<b>"+ obtained_marks+"</center>" + "</b>"+  "</td>" + "<td>" +"<center>" + "<b>"+ percentage + "%" +"</center>" + "</b>"+ "</td>" + "</tr>"+
    
//     "<table>");
