const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
const port = process.env.PORT || 3001;
const corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));

// Serve static files from the 'public' folder
app.use("/public", express.static(path.join(__dirname, "public")));

// Mock user data
const mockUser = {
  id: 1,
  name: "John Doe",
  profilePicture: "/public/images/profile.jpeg",
  orders: [],
  wishlist: [],
};

app.get("/api/user/:userId", (req, res) => {
  console.log(`Received request for user ID ${req.params.userId}`);
  res.json(mockUser);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
