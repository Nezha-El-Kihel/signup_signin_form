var namevalid="";
var passwordvalid="";
var emailvalid="";

function validName(){
    var name = document.getElementById("username");
    var pattern =  /^[A-Za-z\s]+$/;
    // IF NAME IS VALID
    if(name.value.match(pattern)){
    	name.style.borderColor="#67428B";
    	namevalid="true";
    }
    else{
        // IF NAME IS NOT VALID
        if(name.value !== ""){
        	name.style.borderColor="red"; 
        	namevalid="false";             
        }
        else{
            // IF INPUT NAME IS EMPTY
        	if(name.value == ""){
        		name.style.borderColor="white";
        	}
        }
    }
}

function validEmail(){    
    var mail = document.getElementById("useremail");
    var check = document.querySelector("#check");
    var warning = document.querySelector("#warning");
    var pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(mail.value.match(pattern)){
    	mail.style.borderColor="#67428B";
    	emailvalid="true";
        check.style.display="block";
        warning.style.display="none";
    }
    else{
        if(mail.value !== ""){
        	mail.style.borderColor="red"; 
        	emailvalid="false";          
            check.style.display="none";
            warning.style.display="block";   
        }
        else{
        	if(mail.value == ""){
        		mail.style.borderColor="white";
                check.style.display="none";
                warning.style.display="none";
        	}
        }
    }
}
// IT IS FOR SHOWING OR HIDE THE PASSWORD 
function show_hide_password_signup(){
    // FOR SIGNUP.PHP
    var signup_password = document.querySelector("#userpassword");
    var hide_signup = document.querySelector("#hide_signup");
    var show_signup = document.querySelector("#show_signup");
    if(signup_password.type === "password"){
        signup_password.type = "text";
        hide_signup.style.display = "none";
        show_signup.style.display = "block";
    }
    else{
        signup_password.type = "password";
        hide_signup.style.display = "block";
        show_signup.style.display = "none";
    }
}
function show_hide_password_login(){
    // FOR LOGIN.PHP
    var login_password = document.querySelector("#password");
    var hide_login = document.querySelector("#hide_login");
    var show_login = document.querySelector("#show_login");    
    if(login_password.type === "password"){
        login_password.type = "text";
        hide_login.style.display = "none";
        show_login.style.display = "block";
    }
    else{
        login_password.type = "password";
        hide_login.style.display = "block";
        show_login.style.display = "none";
    }
}
// IT IS FOR SHOWING THE ICON OF EYE SLASH IN LOGIN.PHP
function icon_password_login(){
    document.getElementById("hide_login").style.display="block";
    if (document.getElementById("password").value == ""){
        document.getElementById("hide_login").style.display="none";
    }
}

function validPassword(){
    var password = document.getElementById("userpassword");
    document.getElementById("hide_signup").style.display="block";
	if(password.value.length >= 8){
		password.style.borderColor="#67428B";
		passwordvalid="true";
	}
	else{
		if (password.value != "") {
			password.style.borderColor="red";
			passwordvalid="false";
		}
		else{
			if(password.value == ""){
        		password.style.borderColor="white";
                document.getElementById("hide_signup").style.display="none";
        	}
		}
	}
}
// CHECK IF USER FILL ALL THE INPUTS SEND HIM MESSAGE IF NOT
document.querySelector(".submit").addEventListener("click", validForm);
function validForm(e){
    var username = document.querySelector("#username").value;
    var useremail = document.querySelector("#useremail").value;
    var userpassword = document.querySelector("#userpassword").value;
    var usergender = document.getElementsByName('user_gender');
    // IF USER SELECT ONE OF THE OPTION MALE OR FEMALE
    var selectusergender = 0;
    for(i = 0; i < usergender.length; i++) { 
        if(usergender[i].checked) {
            // IF YES 
             selectusergender = 1;
        }
    }
    var userterms = document.querySelector("#userterms");
    // IF NAME . EMAIL . PASSWORD ARE FILLING
    if ((username != "") && (useremail != "") && (userpassword != "")){
        // IF NAME . EMAIL . PASSWORD ARE VALID AND ALL ARE FILLING
        if ((namevalid === "false" || emailvalid === "false" || passwordvalid === "false") && selectusergender === 1 && userterms.checked){
        	// STAY AT THE SAME PAGE
            e.preventDefault();
            // MESSAGE THE ERROR
        	alert("There is some error here");
        }
    }
}

function loginPage(){
    document.querySelector("#signup_form").style.display="none";
    document.querySelector("#login_form").style.display="block";
}
function signupPage(){
    document.querySelector("#signup_form").style.display="block";
    document.querySelector("#login_form").style.display="none";
}