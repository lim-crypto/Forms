
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})();
/*Safari will not prevent submission of a form with constraint validation issues.
To the user Safari will behave no differently than a browser that doesn't support constraint validation at all.
The easiest way around this is to use the same approach as the workaround described above, 
give all forms the novalidate attribute and manually prevent form submissions using preventDefault. 
The following code adds this behavior to all forms.
*/
var forms = document.getElementsByTagName('form');
for (var i = 0; i < forms.length; i++) {
    forms[i].noValidate = true;
    forms[i].addEventListener('submit', function (event) {
        //Prevent submission if checkValidity on the form returns false.
        if (!event.target.checkValidity()) {
            event.preventDefault();
            //Implement you own means of displaying error messages to the user here.
        }
    }, false);
}






const today = new Date();
let year = today.getFullYear();
let month = ("0" + (today.getMonth() + 1)).slice(-2);
let day = ("0" + today.getDate()).slice(-2);
let date = `${year}-${month}-${day}`;
console.log(date);
let min= document.querySelector('#datemin');
let max = document.querySelector('#datemax');
min.setAttribute('min', date);
min.setAttribute('value', date);
max.setAttribute('max', date);
max.setAttribute('value', date);


(function () {
    var password1 = document.getElementById('password');
    var password2 = document.getElementById('password2');

    var checkPasswordValidity = function () {
        if (password1.value != password2.value) {
            password2.setCustomValidity('Passwords must match');
        } else {
            password2.setCustomValidity('');
        }
    };
    password1.addEventListener('change', checkPasswordValidity, false);
    password2.addEventListener('change', checkPasswordValidity, false);
}());
