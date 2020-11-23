function validate(){
var name = document.getElementById("name").value;
var phone = document.getElementById("phone").value;
var email = document.getElementById("email").value;
var message = document.getElementById("mssg").value;
var error_message = document.getElementById("error");
error_message.style.padding = "20px";
var text;
if(name.length < 3){
text = "Please Enter valid Name";
error_message.innerHTML = text;
return false;
}
if(isNaN(phone) || phone.length != 10 ){
text = "Please Enter valid Phone Number";
error_message.innerHTML = text;
return false;
}
if(email.indexOf("@") == -1 || email.length < 6){
text = "Please Enter valid Email";
error_message.innerHTML = text;
return false;
}
if(mssg.length <= 15){
text = "Feedback is too short.\n Minimum 15 characters required.";
error_message.innerHTML = text;
return false;
}
alert("Form Submitted. Thank you for your response");
return true;
}