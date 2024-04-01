function auth(event) {

    event.preventDefault();
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    

    if (email === "admin@gmail.com" && password === "user") {

      if(document.getElementById("password").value==document.getElementById("Confirmpassword").value){
        alert("password is correct")
       }
       else{
         alert("reconfirm your password")
         document.forms.confifPass.focus()
       }

      
      window.location.replace("/youtube clone/home.html")
        alert("You Are a ADMIN");
    } 

    else if(email === "Madesh@gmail.com" && password === "mad"){
      window.location.replace("/youtube clone/home.html");
      alert("You Are a ADMIN");
    }
    
    else {
       alert('Invalid Email or Password')
        return;
    }
  }