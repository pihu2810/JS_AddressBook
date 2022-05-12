// importing another class file to this class file
const ContactDetails = require("./ContactDetails.js");
const prompt = require('prompt-sync')();

// ability to add details to ContactDetails class
var contactInfo = new ContactDetails("Kunal","Kumar","Nzb","Hyderabad","Telangana","502303","9145794857"
                  ,"kunalkumar@gmail.com");

console.log(contactInfo.toString());


contactInfo.firstName = "Vishaka";
contactInfo.lastName = "Kadam";
contactInfo.address = "Hyd";
contactInfo.city = "Hyderabad";
contactInfo.state = "Telangana";
contactInfo.zip = "500048";
contactInfo.phoneNumber = "8100012123";
contactInfo.email = "vishuK@gmail.com";
console.log(contactInfo.toString());

//Ability to add user-defined values to the PersonInfoData
contactInfo.firstName = prompt("Enter First Name : "); 
contactInfo.lastName = prompt("Enter Last Name : "); 
contactInfo.address = prompt("Enter Address : "); 
contactInfo.city = prompt("Enter City : "); 
contactInfo.state = prompt("Enter State : "); 
contactInfo.zip = prompt("Enter Zip : "); 
contactInfo.phoneNumber = prompt("Enter Phone Number : "); 
contactInfo.email = prompt("Enter Email : "); 
console.log(contactInfo.toString());