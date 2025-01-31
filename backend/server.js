require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.error(err));

// Sales Model
const Sale = mongoose.model('Sale', new mongoose.Schema({}, { strict: false }));

// Aggregation API
app.get('/sales-report', async (req, res) => {
    try {
        const result = await Sale.aggregate([
            { $unwind: "$items" },
            {
                $group: {
                    _id: {
                        store: "$store",
                        month: { $dateToString: { format: "%Y-%m", date: "$date" } }
                    },
                    totalRevenue: { $sum: { $multiply: ["$items.quantity", "$items.price"] } },
                    totalPrice: { $sum: "$items.price" },
                    itemCount: { $sum: 1 }
                }
            },
            {
                $project: {
                    _id: 0,
                    store: "$_id.store",
                    month: "$_id.month",
                    totalRevenue: 1,
                    averagePrice: { $divide: ["$totalPrice", "$itemCount"] }
                }
            },
            { $sort: { store: 1, month: 1 } }
        ]);

        res.json(result);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Server Error" });
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
