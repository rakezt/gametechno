function validateform(){
	var p=document.forms["myform"];
	if(p.username.value==null || p.username.value=="" ){
		alert("Choose an username");
		return false;	
	}
	else if(p.email.value==null || p.email.value=="" ){
			alert("E-mail is mandatory boys");
		return false;	
	}
	 else if(p.mobile.value==null || p.mobile.value==""){
			alert("Mobile number is mandatory boys");
	 		return false;	
	 }
	 else if(p.pass.value==null || p.pass.value==""||p.pass.value<=6 ){
			
			if(p.pass.value!=p.cpass.value ){
			alert("Both password not same");
	 		return false;	
	 }}	
	  	

	var radio1=document.getElementById("male").checked;
	var radio1=document.getElementById("female").checked;
	var radio1=document.getElementById("other").checked;
	if((radio1=="")&&(radio2=="")&&(radio3==""))
	{
		alert("select gender please")
	}
}
	document.getElementById("button").onclick = function () {
        location.href = complete.html;
    };
    
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}