        const firstName = document.getElementById('firstname');
        const lastName = document.getElementById('lastname');
        const password = document.getElementById('password');
       
        const firstNameHelp = document.getElementById('firstname-help');
        const lastNameHelp = document.getElementById('lastname-help');
        const emailHelp = document.getElementById('email-help');
        const firstNameError = document.getElementById('firstname-error');
        const lastNameError = document.getElementById('lastname-error');
        const email = document.getElementById('email');
        const emailError = document.getElementById('email-error');
        const passwordError = document.getElementById('password-error'); 

        const togglePassword = document.getElementById('togglePassword');

        
        togglePassword.addEventListener('click',function(e){
            e.preventDefault();
            const type = password.getAttribute('type') ==="password" ? "text" : "password";

            password.setAttribute('type',type);

            togglePassword.textContent = type==="password" ? "👁️" : "🙈";
        })



        const criteriaLength = document.getElementById('criteria-length');
        const criteriaUpperCase = document.getElementById('criteria-uppercase');
        const criteriaLowerCase = document.getElementById('criteria-lowercase');
        const criteriaNumber = document.getElementById('criteria-number');
        const criteriaSpecial = document.getElementById('criteria-special');

        const criteriaEmailLength = document.getElementById('criteria-emaillength');
        const criteriaAtTheRate = document.getElementById('criteria-@');
        const criteriaDomain = document.getElementById('criteria-domain');

        firstName.addEventListener('input',function(){
            firstNameHelp.setAttribute('hidden','');
            
            if(firstName.value.trim()===''){
                firstName.setAttribute('aria-invalid','true');
                firstNameError.removeAttribute('hidden');
            }
            else{
                firstName.setAttribute('aria-invalid','false');
                firstNameError.setAttribute('hidden','');
           
                
            }
        });
        
        lastName.addEventListener('input',function(){
            lastNameHelp.setAttribute('hidden','');
            
            if(lastName.value.trim()===''){
                lastName.setAttribute('aria-invalid','true');
                lastNameError.removeAttribute('hidden')
            }
            else{
                lastName.setAttribute('aria-invalid','false');
                lastNameError.setAttribute('hidden','');
                
            }
        })
        
        email.addEventListener('input',function(){
            validateEmail();
        });
        
        email.addEventListener('blur',function(){
            validateEmail();
        });
        
        
        password.addEventListener('input',function(){
            validatePassword();
        });
        
        password.addEventListener('blur',function(){
            validatePassword();
        });

        function validatePassword(){
            let value = password.value;

            const hasLength = value.length>=8;
            const hasUpperCase = /[A-Z]/.test(value);
            const hasLowerCase = /[a-z]/.test(value);
            const hasNumber = /\d/.test(value);
            const special = /[!@#$%&*?]/.test(value);


            updateCriteria(criteriaLength,hasLength);
            updateCriteria(criteriaUpperCase,hasUpperCase);
            updateCriteria(criteriaLowerCase,hasLowerCase);
            updateCriteria(criteriaNumber,hasNumber);
            updateCriteria(criteriaSpecial,special);


            const allValid = hasLength && hasUpperCase && hasLowerCase && hasNumber && special;

            if(value.length>0){
                if(allValid){
                    password.setAttribute('aria-invalid','false');
                }
                else{
                    password.setAttribute('aria-invalid','true');

                }
            }


        };


        function updateCriteria(element,isValid){
            if(isValid){
                element.classList.remove('invalid');
                element.classList.add('valid');
            }
            else{
                element.classList.remove('valid');
                element.classList.add('invalid');

            }
        }


        function validateEmail(){
            let value = email.value;

            const hasAtTheRate = value.includes('@');
            const hasLength = value.length>=11;
            const domain = /^[^\s@]+@gmail\.com$/.test(value);

            updateCriteria(criteriaAtTheRate,hasAtTheRate);
            updateCriteria(criteriaEmailLength,hasLength);
            updateCriteria(criteriaDomain,domain);

            const allValid = hasAtTheRate && hasLength && domain;

            if(value.length>0){
                if(allValid){
                    email.setAttribute('aria-invalid','false');
                }else{

                    email.setAttribute('aria-invalid','true');
                }
            }
        }
