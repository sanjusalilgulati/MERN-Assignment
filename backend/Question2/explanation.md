# Question 3: MongoDB Aggregation

## Problem Statement
We need to calculate:
1. **Total revenue per store per month**
2. **Average price of items sold per store per month**
3. **Sort results by store name and month**

## Approach
- **Unwind (`$unwind`)**: Flatten `items` array so each item is processed separately.
- **Group (`$group`)**: Aggregate by `store` and `month`:
  - `totalRevenue = quantity * price (summed)`
  - `totalPrice = sum of all prices`
  - `itemCount = total number of unique items`
- **Project (`$project`)**:
  - Extract final fields: `store`, `month`, `totalRevenue`, `averagePrice`
- **Sort (`$sort`)**:
  - First by `store` (alphabetically)
  - Then by `month` (chronologically)

## Complexity Analysis
- **Time Complexity:** `O(N)`
- **Space Complexity:** `O(N)`

## Example Output
```json
[
  {
    "totalRevenue": 220,
    "store": "Store A",
    "month": "2024-06",
    "averagePrice": 15
  },
  {
    "totalRevenue": 80,
    "store": "Store B",
    "month": "2024-06",
    "averagePrice": 12.5
  }
]

Run Script
Before Start this Setup a MongoDB and .env file you can put it. In the Directory .env.example shared.
node Server.JS
After use this URL : http://localhost:9001/sales-report