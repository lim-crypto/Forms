  var form = document.querySelector('form');
  form.addEventListener('submit', function(e){
      validateEmail();
      validateZip();
      validatePassword1();
      validatePassword2(); 
      e.preventDefault();
  } );



// document.getElementById('email').addEventListener('blur', validateEmail); 
// document.getElementById('email').addEventListener('keydown', validateEmail);
// document.getElementById('zip').addEventListener('blur', validateZip); 
// document.getElementById('password1').addEventListener('blur', validatePassword1); 
// document.getElementById('password2').addEventListener('blur', validatePassword2); 


function validateEmail() {
    const email = document.getElementById('email');
    const re = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/; 
    if (!re.test(email.value)) {
        email.classList.remove('is-valid'); 
        email.classList.add('is-invalid');

    } else { 
        email.classList.remove('is-invalid');  
        email.classList.add('is-valid');

    }
}


function validateZip() {
    const zip = document.getElementById('zip');
    const re = /^[0-9]{3,4}$/;
    if (!re.test(zip.value)) {
        zip.classList.add('is-invalid');
        zip.classList.remove('is-valid');
    }   else {
        zip.classList.remove('is-invalid');
        zip.classList.add('is-valid');
    }
}

function validatePassword1() {
    const password1 = document.getElementById('password1');
    const re = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
    // ^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[ -/:-@\[-`{-~]).{6,64}$
    if (!re.test(password1.value)) {
        password1.classList.add('is-invalid');
        password1.classList.remove('is-valid');
    }   else {
        password1.classList.remove('is-invalid');
        password1.classList.add('is-valid');
    }
}


function validatePassword2() {
    const password1 = document.getElementById('password1'); 
    const password2 = document.getElementById('password2');  
    if (password1.value !=password2.value  || password2.value=="") {
        password2.classList.add('is-invalid');
        password2.classList.remove('is-valid');  
    } else {
        password2.classList.remove('is-invalid');  
        password2.classList.add('is-valid'); 

    } 
}




