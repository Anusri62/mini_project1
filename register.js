 function registerUser(event) {

            event.preventDefault();

            let name =
                document.getElementById("name").value;

            let email =
                document.getElementById("email").value;

            let phone =
                document.getElementById("phone").value;

            let address =
                document.getElementById("address").value;

            let password =
                document.getElementById("password").value;

            let confirmPassword =
                document.getElementById("confirmPassword").value;


            // Phone validation
            let phonePattern = /^[0-9]{10}$/;

            if (!phonePattern.test(phone)) {

                alert("Please enter a valid 10 digit phone number.");

                return;

            }


            // Password validation
            let passwordPattern =
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&]).{8,}$/;

            if (!passwordPattern.test(password)) {

                alert(
                    "Password must contain at least 8 characters, " +
                    "one letter, one number and one special character."
                );

                return;

            }


            // Confirm password
            if (password !== confirmPassword) {

                alert("Passwords do not match.");

                return;

            }


            // User object
            let user = {

                name: name,

                email: email,

                phone: phone,

                address: address,

                password: password

            };


            // Save user data
            localStorage.setItem(
                "booknestUser",
                JSON.stringify(user)
            );


            alert(
                "Registration Successful! 📚"
            );


            // Go to login
            window.location.href = "login.html";

        }