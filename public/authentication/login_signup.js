import { auth, provider, database } from "../firebaseSDK.js";
import {
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import {
  ref,
  set,
  get,
  child,
  update,
} from "https://www.gstatic.com/firebasejs/11.0.1/firebase-database.js";

// Function to get URL query parameters
function getQueryParam(param) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(param);
}

// Get the role type from the URL
const userType = getQueryParam("role");

// Define the sign-in function with Google that includes user type verification and redirection
window.signInWithGoogle = () => {
  const intendedUserType = getQueryParam("role"); // Get the intended user type from the URL

  signInWithPopup(auth, provider)
    .then((result) => {
      const user = result.user;
      console.log("User signed in:", user);

      // If the stored role matches the intended role, proceed to the respective page
      saveUserToDatabase(user, intendedUserType).then(() => {
        // Redirect based on user role
        if (intendedUserType === "student") {
          window.location.href = "../student_section/quiz_list.html"; // Student's page
        } else if (intendedUserType === "faculty") {
          window.location.href = "../faculty_section/course.html"; // Faculty's page
        }
      });
    })
    .catch((error) => {
      console.error("Error during Google sign-in:", error);
    });
};

// Save user to database function with role data
function saveUserToDatabase(user, userType) {
  const userRef = ref(database, "users/" + user.uid);
  return update(userRef, {
    displayName: user.displayName,
    email: user.email,
    photoURL: user.photoURL,
    uid: user.uid,
    userType: userType, // Save the userType consistently
  })
    .then(() => {
      console.log("User data saved to database with role:", userType);
    })
    .catch((error) => {
      console.error("Error saving user data to database:", error);
    });
}

// Function to generate an avatar URL with the user's initial and a random background color
function generateAvatar(name) {
  const initial = name.charAt(0).toUpperCase();
  const colors = ["#FF5733", "#33FF57", "#3357FF", "#FF33A6", "#FFC300"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];

  const avatarUrl = `https://ui-avatars.com/api/?name=${initial}&background=${randomColor.slice(
    1
  )}&color=fff&size=128`;

  return avatarUrl;
}

// Redirect to Sign-Up page
document
  .getElementById("signUpRedirect")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".login-form").style.display = "none";
    document.querySelector(".sign-up-form").style.display = "block";
  });

// Redirect back to Login page
document
  .getElementById("loginRedirect")
  .addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(".sign-up-form").style.display = "none";
    document.querySelector(".login-form").style.display = "block";
  });

// Handle login form submission
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("loginEmail").value;
  const password = document.getElementById("loginPassword").value;

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;

      // Fetch user type from database
      const userRef = ref(database, "users/" + user.uid);
      return get(userRef).then((snapshot) => {
        if (snapshot.exists()) {
          const userData = snapshot.val();

          // Check if the user type matches
          if (userData.userType === userType) {
            alert("Login successful!");

            // Redirect based on user type
            if (userType === "faculty") {
              window.location.href = "/faculty_section/course.html";
            } else {
              window.location.href = "/student_section/quiz_list.html";
            }
          } else {
            alert(
              "Incorrect account type. Please log in with the correct user role."
            );
          }
        } else {
          alert("User not found in database.");
        }
      });
    })
    .catch((error) => {
      console.error("Error during sign-in:", error);
      alert("Login failed: " + error.message);
    });
});

// Handle sign-up form submission
document.getElementById("signUpForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const fullName = document.getElementById("fullName").value;
  const email = document.getElementById("emailSignUp").value;
  const password = document.getElementById("passwordSignUp").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  if (password === confirmPassword) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        // Generate avatar URL
        const avatarUrl = generateAvatar(fullName);

        // Update the user's display name
        return updateProfile(user, {
          displayName: fullName,
          photoURL: avatarUrl,
        }).then(() => ({ user, avatarUrl }));
      })
      .then(({ user, avatarUrl }) => {
        // Save user data with role to Realtime Database
        const userRef = ref(database, "users/" + user.uid);
        return update(userRef, {
          displayName: fullName,
          email: email,
          photoURL: avatarUrl,
          uid: user.uid,
          userType: userType, // Save the user type here
        });
      })
      .then(() => {
        console.log("User data saved to database.");
        alert("Sign Up successful! Please log in.");

        // Redirect to login page
        document.querySelector(".sign-up-form").style.display = "none";
        document.querySelector(".login-form").style.display = "block";
      })
      .catch((error) => {
        console.error("Error during sign up:", error.message);
      });
  } else {
    alert("Passwords do not match. Please try again.");
  }
});
