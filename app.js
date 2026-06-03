const express = require("express");
const cors = require("cors");

const couponRoutes = require("./routes/couponRoutes");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/coupons", couponRoutes);

app.get("/", (req, res) => {
    res.send("Shopping Coupon Discount Service is running");
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});