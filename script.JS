//Dom
function submitForm(){

  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let phone = document.getElementById("phone").value;
  let age = document.getElementById("age").value;
  let error = document.getElementById("error");
//Validation
  if(name=="" || email=="" || phone=="" || age==""){
    error.innerHTML = "Fadlan buuxi dhammaan fields-ka!";
    return;
  }
//Validation
  if(age < 10 || age > 100){
    error.innerHTML = "Da'du waa inay u dhexeyso 10 ilaa 100!";
    return;
  }

  error.innerHTML = "";

  // Dom
  document.getElementById("formBox").classList.add("hidden");
  document.getElementById("successBox").classList.remove("hidden");

  //Dom
  document.getElementById("outName").innerHTML = name;
  document.getElementById("outEmail").innerHTML = email;
  document.getElementById("outPhone").innerHTML = phone;
  document.getElementById("outAge").innerHTML = age;
}

//Event-clear
function clearForm(){
  document.getElementById("name").value="";
  document.getElementById("email").value="";
  document.getElementById("phone").value="";
  document.getElementById("age").value="";
  document.getElementById("error").innerHTML="";
}

//Event-register again
function registerAgain(){
  clearForm();
  document.getElementById("formBox").classList.remove("hidden");
  document.getElementById("successBox").classList.add("hidden");
}