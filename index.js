import express from "express";
import path from "path";
import { fileURLToPath } from "url";

// Get the current directory name using `import.meta.url`
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3000;

// Serve static files (e.g., images, CSS, JS) from the 'public' folder
app.use(express.static(path.join(__dirname, "public")));

// Serve 'user.html' when accessing the root URL
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "user_type", "user.html"));
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
