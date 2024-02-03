const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 3001;

// const corsOptions = {
//   origin: "http://localhost:3000",
// };
// app.use(cors(corsOptions));
app.use(cors());

// Mock user data
const mockUser = {
  id: 1,
  name: "John Doe",
  // orders: [...],
  // wishlist: [...],
};

// Endpoint to get user profile
app.get("/api/user/:userId", (req, res) => {
  console.log(`Received request for user ID ${req.params.userId}`);
  res.json(mockUser);
});

// Other endpoints as needed

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
