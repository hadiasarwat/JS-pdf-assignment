document.write(` <h1 style="text-align: center; margin-top: 200px;">Chapter-14 to 16. <br> <br>  <b>(ARRAYS)</b></h1>`)

// ----------------------------- ARRAYS ----------

// question 1.	Declare an empty array using JS literal notation to store student names in future.

// var studentNames = [];

// question 2.	Declare an empty array using JS object notation to store student names in future.
// var student_Names = [];

// question 3.	Declare and initialize a strings array.

// var alphabets = ['a', 'b', 'c', 'd'];
// document.write(alphabets);

// question 4.	Declare and initialize a numbers array.

//var numbers =[1, 2, 3, 4, 5];
//document.write(numbers);

// question 5.	Declare and initialize a boolean array.

// var booleans = [true, false, , false , true, false,];
// document.write(booleans);

// question 6.	Declare and initialize a mixed array

// var  mixed_arrays =[20," hina " , true , 40 , " end"];
// document.write(mixed_arrays);

// question 7.	Declare and Initialize an array and store available education qualifications in Pakistan (e.g. SSC, HSC, BCS, BS, BCOM, MS, M. Phil., PhD). Show the listed qualifications in your browser like:

// var educations = ["1) SSC", "2) HSC", "3) BCS", "4) BS", "5) BCOM5", "6) MS", "7) M.Phil", "8) PhD"].join("</br>");
// document.write(educations);

// question 8.	Write a program to store 3 student names in an array.Take another array to store score of these three students. Assume that total marks are 500 for each student, display the scores & percentages of students like:
//   var names = ["Michale" , "Jhone" , "Tony"];
//   var scores = [320 , 230.480];
//   var percentages =["64%", "46%" , "96%"];
  
// document.write("Score of   "  + names[0] + " is " + scores[0]  + ".  Percentage : " + percentages[0] + "</br>" )
// document.write("Score of   "  + names[1] + " is " + scores[1]  + ".  Percentage : " + percentages[1] + "</br>" )
// document.write("Score of   "  + names[2] + " is " + scores[2]  + ".  Percentage : " + percentages[2] + "</br>" )


/* question 9.	Initialize an array with color names. Display the array elements in your browser.
a.	Ask the user what color he/she wants to add to the beginning & add that color to the beginning of the array. Display the updated array in your browser.
b.	Ask the user what color he/she wants to add to the end & add that color to the end of the array. Display the updated array in your browser.
c.	Add two more color to the beginning of the array. Display the updated array in your browser.
d.	Delete the first color in the array. Display the updated array in your browser.
e.	Delete the last color in the array. Display the updated array in your browser.
f.	Ask the user at which index he/she wants to add a color & color name. Then add the color to desired position/index. . Display the updated array in your browser.
g.	Ask the user at which index he/she wants to delete color(s) & how many colors he/she wants to delete. Then
 

remove the same number of color(s) from user-defined position/index. . Display the updated array in your browser. */

//var colors =[ "  blue", " orange","  black","  purple", "  green"];
// document.write(colors);

//--- b
 // var user_color = prompt("Enter the color you want to add to the beginning of the array. " ," lightblue");

//  colors.unshift(user_color);
// document.write(colors);

//----- c  ---

// var user_color = prompt("Enter the color you want to add to the beginning of the array.", "cyan");
// var user_color1 = prompt("Enter the color you want to add to the beginning of the array.", "gray");

// colors.unshift(user_color, user_color1);
// document.write(colors);

//----- d  ---
// colors.shift();
// document.write(colors)

//----- e  ---
// colors.pop();
// document.write(colors)

//----- f   ---

// var index = +prompt("In which index do you want to add a color");
// var user_color = prompt("Enter the color name");
// colors.splice(index, 0 , user_color);
// document.write(colors);

//----- g ---

// var index = +prompt("In which index do you want to delete a color");
// var user_color = +prompt("How many colors you want to delete");
// colors.splice( index, user_color );
// document.write( colors);


// question 10.	Write a program to store student scores in an array & sort the array in ascending order using Array’s sort method.

// var scores = [320, 230, 480, 120];
// document.write("Scores Of Studends : "+ scores + "</br>");
// scores.sort();
// document.write("Ordered Scores of Students : " + scores);

// question 11.	Write a program to initialize an array with city names. Copy 3 array elements from cities array to selectedCities array.

// var city_names =   ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// var selectedCities = city_names.slice(1,3);
// document.write("Cities List : </br>" + city_names + "</br> </br>" )
// document.write("Selected Cities List : </br>" +selectedCities);


// question 12.	Write a program to create a single string from the below mentioned array:
//var arr = [“This ”, “ is ”, “ my ”, “ cat”]; (Use array’s join method)

// var arr = ["This", "is", " my", "cat"];
// var string = arr.join(" ");

// document.write(" Array: <br> <br>" + arr + "<br> <br>");
// document.write(" String : <br> <br>" + string);
 
// question 13.	Create a new array. Store values one by one in such a way that you can access the values in the order in which they were stored. (FIFO-First In First Out)

// var comp_parts =[ "keyboard", "mouse", " printer", "monitor"];
// var comp_parts1 = comp_parts.join("<br> Out :  <br>")

// document.write("Devices : <br>" + comp_parts + "<br> <br>");
// document.write("Out  : <br>" + comp_parts1 + "<br> <br>");

 // question 14.	Create a new array. Store values one by one in such a way that you can access the values in reverse order. (Last In- First Out)

//  var comp_parts =[ "keyboard", "mouse", " printer", "monitor"];
//  document.write("Devices : <br>" + comp_parts + "<br> <br>");

//  comp_parts.reverse()
// var comp_parts1 = comp_parts.join("<br> Out :  <br>")
// document.write("Out  : <br>" + comp_parts1 + "<br> <br>");

 // question 15.	Write a program to store phone manufacturers (Apple, Samsung, Motorola, Nokia, Sony & Haier) in an array. Display the following dropdown/select menu in your browser using document.write() method:
  

 // i don't understand it's solution.