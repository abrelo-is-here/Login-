  document.querySelector("button").addEventListener("click",(event)=>{
    event.preventDefault()

    //Dom Element
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const currentPosition = document.getElementById('currentPosition').value;
    const resume = document.getElementById('resume').files[0];
    const portfolio = document.getElementById('portfolio').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;


    if (!fullName || !email || !phone || !currentPosition || !resume || !password || !confirmPassword) {
        alert("All fields Must Be Filleds.");
        return;
    }
    
    //password validation


    //Password match
    if(password !== confirmPassword){
        document.querySelector("#cp").style.display = "block"; 
         document.querySelector("#pp").style.display = "block"
         document.querySelector("#pp").style.color = "red"
        return;
    }else{
        document.querySelector("#pp").style.display = "none"
        document.querySelector("#cp").style.display = "none"; 
    }
    //Password Length Cheaker
    if(password.length < 8 || password.length > 15){
       
        document.querySelector("#digit").style.color = "red"
        return;
   }else{
       document.querySelector("#digit").style.color = "#0a530c"
   }


 
// Special character validate
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/; 
 
    if (!specialChar.test(password)) {
       
        document.querySelector("#char").style.color = "red"
        return;
    }else{
        document.querySelector("#char").style.color = "#0a530c"
    }
// upperCase validate validate

const upperCase = /[A-Z]/;

    if (!upperCase.test(password)) {
        document.querySelector("#upper").style.color = "red"
        return; // Prevent form submission
    }else{
        document.querySelector("#upper").style.color = "#0a530c"
    }

// number password include validate

const numberRegex = /\d/;

    if (!numberRegex.test(password)) {
        document.querySelector("#number").style.color = "red"
        return;
    }else{
        document.querySelector("#number").style.color = "#0a530c"
    }
    

    //If all is ok

    const modal = document.getElementById("successModal");
    const closeBtn = document.getElementsByClassName("close")[0];

    modal.style.display = "block";
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }
    
    
    





    //Clear form fields after 1 seconds  
    setTimeout(function() {
        document.getElementById('registrationForm').reset(); // Reset all fields

    }, 1000);


  })

