// let studentName = "muhammad eshan ahmed";
// let courseName = "Web Development";
// let city = "Rawalpindi";

// console.log("Name:", studentName);
// console.log("Course:", courseName);
// console.log("City:", city);


// // NUMBER
// let age = 18;
// let mathMarks = 80;
// let physicsMarks = 75;
// let chemistryMarks = 90;

// let totalMarks = mathMarks + physicsMarks + chemistryMarks;
// let average = totalMarks / 3;

// console.log("Age:", age);
// console.log("Total Marks:", totalMarks);
// console.log("Average:", average);


// // BOOLEAN
// let isStudent = true;

// console.log("Is Student:", isStudent);


// // UNDEFINED
// let phoneNumber;

// console.log("03254642254:", phoneNumber);


// // NULL
// let previousCourse = null;

// console.log("Previous Course:", previousCourse);


// // ARRAY
// let subjects = [
//     "HTML",
//     "CSS",
//     "JavaScript",
//     "Bootstrap",
//     "React"
// ];

// console.log("Subjects:", subjects);
// console.log("First Subject:", subjects[0]);
// console.log("Second Subject:", subjects[1]);


// // ADD NEW ITEM TO ARRAY
// subjects.push("Node.js");

// console.log("Updated Subjects:", subjects);


// // OBJECT
// let student = {
//     name: "Adnan",
//     age: 25,
//     course: "Web Development",
//     city: "Rawalpindi",
//     marks: 85
// };

// console.log("Student:", student);
// console.log("Student Name:", student.name);
// console.log("Student Age:", student.age);
// console.log("Student Course:", student.course);
// console.log("Student Marks:", student.marks);


// // FUNCTION
// function greet(name) {
//     console.log("Hello " + name);
// }

// greet(studentName);


// // ADDITION FUNCTION
// function addNumbers(number1, number2) {
//     return number1 + number2;
// }

// let sum = addNumbers(20, 30);

// console.log("Sum:", sum);


// // MARKS FUNCTION
// function calculatePercentage(total, obtained) {
//     return (obtained / total) * 100;
// }

// let percentage = calculatePercentage(300, totalMarks);

// console.log("Percentage:", percentage + "%");


// // IF ELSE
// if (percentage >= 80) {
//     console.log("Grade: A+");
// }
// else if (percentage >= 70) {
//     console.log("Grade: A");
// }
// else if (percentage >= 60) {
//     console.log("Grade: B");
// }
// else if (percentage >= 50) {
//     console.log("Grade: C");
// }
// else {
//     console.log("Result: Fail");
// }


// // FOR LOOP
// console.log("Subjects:");

// for (let i = 0; i < subjects.length; i++) {
//     console.log((i + 1) + ". " + subjects[i]);
// }


// // ARRAY OF OBJECTS
// let students = [
//     {
//         name: "Adnan",
//         marks: 85
//     },
//     {
//         name: "Ali",
//         marks: 72
//     },
//     {
//         name: "Ahmed",
//         marks: 91
//     },
//     {
//         name: "Usman",
//         marks: 65
//     }
// ];

// console.log("Students List:");

// for (let i = 0; i < students.length; i++) {
//     console.log(
//         students[i].name,
//         "- Marks:",
//         students[i].marks
//     );
// }


// // LOGIN SYSTEM
// let username = "admin";
// let password = "12345";

// let enteredUsername = "admin";
// let enteredPassword = "12345";

// if (
//     enteredUsername === username &&
//     enteredPassword === password
// ) {
//     console.log("Login Successful");
// }
// else {
//     console.log("Wrong Username or Password");
// }


// // SHOPPING CART
// let productName = "Laptop";
// let productPrice = 80000;
// let quantity = 2;

// let totalPrice = productPrice * quantity;

// console.log("Product:", productName);
// console.log("Price:", productPrice);
// console.log("Quantity:", quantity);
// console.log("Total Price:", totalPrice);


// // DISCOUNT
// let discount = 10;

// let discountAmount = totalPrice * discount / 100;
// let finalPrice = totalPrice - discountAmount;

// console.log("Discount:", discount + "%");
// console.log("Discount Amount:", discountAmount);
// console.log("Final Price:", finalPrice);


// // TYPEOF
// console.log("Data Types:");

// console.log("studentName:", typeof studentName);
// console.log("age:", typeof age);
// console.log("isStudent:", typeof isStudent);
// console.log("phoneNumber:", typeof phoneNumber);
// console.log("previousCourse:", typeof previousCourse);
// console.log("largeNumber:", typeof largeNumber);
// console.log("subjects:", typeof subjects);
// console.log("student:", typeof student);


// // FINAL OUTPUT
// console.log("==============================");
// console.log("       STUDENT REPORT");
// console.log("==============================");

// console.log("Name:", studentName);
// console.log("Age:", age);
// console.log("Course:", courseName);
// console.log("City:", city);
// console.log("Total Marks:", totalMarks);
// console.log("Average:", average);
// console.log("Percentage:", percentage + "%");

// console.log("==============================");
// console.log("       PROGRAM FINISHED");
// console.log("=============================="); phoneNumber

// array methods given below:

// let Name = ["eshan", "tanveer", "ahmed"];

// console.log("Original Array:", Name);

// // push()
// Name.push("muhammad");
// console.log("After push():", Name);

// // pop()
// Name.pop();
// console.log("After pop():", Name);

// // unshift()
// Name.unshift("javed");
// console.log("After unshift():", Name);

// // shift()
// Name.shift();
// console.log("After shift():", Name);

// // includes()
// console.log("Includes ahmed:", Name.includes("ahmed"));

// // indexOf()
// console.log("Index of javed:", Name.indexOf("javed"));

// // slice()
// let newName = Name.slice(0, 2);
// console.log("After slice():", newName);

// // reverse()
// Name.reverse();
// console.log("After reverse():",Name);
// // join() — Convert array to string
// let fruits = ["Apple", "Banana", "Mango"];

// console.log(fruits.join(" - "));
// // concat() — Combine arrays
// let fruits1 = ["Apple", "Banana"];
// let fruits2 = ["Mango", "Orange"];

// let  = fruits1.concat(fruits2);

// console.log(fruits);
// // forEach() — Run code for every element
// let  = ["Apple", "Banana", "Mango"];

// fruits.forEach(function(fruit) {
//     console.log(fruit);
// });
// // map() — Create a new array
// let numbers = [1, 2, 3, 4];

// let result = numbers.map(function(num) {
//     return num * 5;
// });

// console.log(result);
// // filter() — Filter values using a condition
// let  = [10, 15, 20, 25, 30];

// let = numbers.filter(function(num) {
//     return num > 29;
// });

// console.log(result);

// String and its methods:

// let name = "Muhammad Eshan Ahmed khan";

// console.log("Name:", name);
// console.log("Length:", name.length);
// console.log("Uppercase:", name.toUpperCase());
// console.log("Lowercase:", name.toLowerCase());
// console.log("First Character:", name.charAt(0));
// console.log("Includes Khan:", name.includes("khan"));
// console.log("Index of Khan:", name.indexOf("khan"));
// console.log("Slice:", name.slice(0, 20));
// function sanorte() {
//     console.log("Hello World");
// }

// sanorte();
// function greet()  {
//     console.log("by world");
// }   


// greet();
// let student = {
//     name: "Eshan ahmed",
//     age: 20,
//     city: "islamabad"
// };

// console.log(student);



// let bacha = {
//     name:"Adnan",
//     age:18,
//     city: "rwp" 

// };


// let Name = ["eshan", "ali", "khan"];

// console.log(Name.includes("ali"));






// function multiply(a, b) {
//     return a * b;
// }

// let result = multiply(8, 9);
// console.log(result);


// function add(a, b) {
//     console.log(a + b);
// }

// add(10, 78);


// greet = function () {
//     console.log("hello,hi ,yes");
// };

// greet();





// function greet() {
//     console.log("Hello " + this.name);
// }

// const newFunction = greet.bind({name: "ESHAN"});
// newFunction();


// function square(n) {
//     return n * n;
// }

// console.log(square(12));
// console.log(square(8));

function multiply() {
    console.log(29 * 9);
}
multiply();


// function greet () {
//     console.log("hello khan");
    
// }
// greet();

// setTimeout(function() {
//     console.log("Hi eshan");
// }, 1000);


const add = (a, b) => {
    return a + b;
};
console.log(add(20000,4567));

function greet(school) {

    console.log("hello",school);

}
greet("apex");


        function toggleDescription(id, button) {
            const description =
                document.getElementById(id);

            if (description.style.display === "block") {
                description.style.display = "none";
                button.textContent = "Learn More";
            } else {
                description.style.display = "block";
                button.textContent = "Show Less";
            }
        }