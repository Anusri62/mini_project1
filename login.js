 function loginUser(event) {

            event.preventDefault();


            // Get login values

            let email =
                document.getElementById("email").value.trim();

            let password =
                document.getElementById("password").value;


            // Get registered user

            let storedUser =
                localStorage.getItem("booknestUser");


            // Check registration

            if (!storedUser) {

                alert(
                    "No account found. Please register first."
                );

                return;

            }


            // Convert JSON to object

            let user =
                JSON.parse(storedUser);


            // Check email and password

            if (
                email === user.email &&
                password === user.password
            ) {

                alert(
                    "Login Successful! 📚"
                );


                // Save login status

                localStorage.setItem(
                    "booknestLoggedIn",
                    "true"
                );


                // Go to Dashboard

                window.location.href =
                    "dashboard.html";

            }

            else {

                alert(
                    "Invalid email or password."
                );

            }

        }