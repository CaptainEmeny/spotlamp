import express from "express"
import stylistRoutes from "./src/routes/stylistRoutes.js"

const app = express();
const PORT = 3000;

app.use(express.json());
app.use("/api/stylists", stylistRoutes);

app.listen(PORT, () => {
  console.log("Express backend is running....")
})
