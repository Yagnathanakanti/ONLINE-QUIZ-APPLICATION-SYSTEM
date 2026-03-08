import { signOut } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-auth.js";
import { auth } from "../firebaseSDK.js";

document.getElementById("logout").addEventListener("click", (e) => {
  e.preventDefault();

  // Ask for confirmation before logging out
  const confirmation = window.confirm("Are you sure you want to log out?");

  if (confirmation) {
    signOut(auth)
      .then(() => {
        console.log("User signed out.");
        // Redirect to login page after successful logout
        window.location.href = "../user_type/user.html"; // Correct path for logout.js in the same folder
      })
      .catch((error) => {
        console.error("Error signing out:", error);
      });
  }
});
