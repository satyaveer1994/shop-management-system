# Shop Management System

A simple backend system to manage inventory and sales for a small shop. The system allows users to add items to the inventory, create bills for sales transactions, and update the inventory accordingly.

## Features

- Add new items to the inventory
- Retrieve a list of all items in the inventory
- Create a bill for a sale transaction, specifying the items sold and quantities
- Retrieve a list of all bills
- Get details of a specific bill
- Update the inventory automatically when a bill is created (subtract sold items from the inventory)

## Technology Stack

- Node.js
- Express.js
- MongoDB
- Mongoose

## Project Structure

```
shop-management-system
├── src
│   ├── config
│   │   └── db.js              # Database connection setup
│   ├── controller
│   │   ├── itemController.js  # Controller for inventory items
│   │   └── billController.js  # Controller for bills
│   ├── models
│   │   ├── item.js            # Item model schema
│   │   └── bill.js            # Bill model schema
│   ├── routes
│   │   ├── itemRoutes.js      # Routes for inventory items
│   │   └── billRoutes.js      # Routes for bills
│   ├── app.js                 # Main application setup
│   └── server.js              # Entry point for the server
└── .env                       # Environment variables
```

## Prerequisites

- Node.js (v14 or higher)
- MongoDB (running on default port `27017`)

## Setup and Installation

1. **Clone the repository:**

   ```bash
   https://github.com/satyaveer1994/shop-management-system.git
   cd shop-management-system
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env` file in the root directory with the following content:

   ```bash
   MONGO_URI=mongodb+srv://Satyaveer1994:Satyaveer123@cluster0.pn1nk.mongodb.net/shop-management-system-DB
   PORT=5000
   ```

4. **Start the MongoDB server:**

   Ensure MongoDB is running on your machine:

   ```bash
   mongod
   ```

5. **Run the application:**

   ```bash
   nodemon src/server.js
   ```

   The server should start on `http://localhost:5000`.

## API Endpoints

### Inventory Items

- **Add a new item:**

  ```bash
  curl -X POST http://localhost:5000/api/items/additem -H "Content-Type: application/json" -d '{
    "name": "Item c",
  "price": 2500.00,
  "quantity": 1001000,
  "description": "Description for Item c"
  }'
  ```

- **Retrieve all items:**

  ```bash
  curl http://localhost:5000/api/items/getitems
  ```

- **Retrieve an item by ID:**

  ```bash
  curl http://localhost:5000/api/items/{id}
  ```

- **Update an item by ID:**

  ```bash
  curl -X PUT http://localhost:5000/api/items/{id} -H "Content-Type: application/json" -d '{
    "name": "Updated Name",
    "price": 150,
    "quantity": 30,
    "description": "Updated Description"
  }'
  ```

- **Delete an item by ID:**

  ```bash
  curl -X DELETE http://localhost:5000/api/items/{id}
  ```

### Bills

- **Create a new bill:**

  ```bash
  curl -X POST http://localhost:5000/api/bills/createbill -H "Content-Type: application/json" -d '{
    "items": [
      {
        "itemId": "Item ObjectId",
        "quantity": 2
      },
      {
        "itemId": "Another Item ObjectId",
        "quantity": 1
      }
    ]
  }'
  ```

- **Retrieve all bills:**

  ```bash
  curl http://localhost:5000/api/bills/getbill
  ```

- **Retrieve a bill by ID:**

  ```bash
  curl http://localhost:5000/api/bills/{id}
  ```

## Additional Notes

- **Auto Inventory Update:** When a bill is created, the inventory quantities for the sold items are automatically updated by subtracting the sold quantities.
- **Error Handling:** Basic error handling is implemented to manage situations like insufficient inventory or invalid requests.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
