# 🍔 Food Ordering System API

A RESTful API simulating a food ordering platform (similar to Talabat or Uber Eats), built with **Node.js**, **Express.js**, and **MongoDB (Mongoose)**.

---

## 🛠 Tech Stack

* **Node.js**
* **Express.js**
* **MongoDB** with Mongoose
* **Joi** — request validation
* **Helmet** — security headers
* **Morgan** — HTTP request logger
* **dotenv** — environment variables

---

## 📸 API Testing Preview

### PowerShell API Testing

> Example of testing all API endpoints using PowerShell and cURL commands.

![API Testing Screenshot](./screenshots/api-testing-blur.png)

---

## 📁 Project Structure

```bash
food-ordering-api/
├── app.js                        # Entry point
├── .env                          # Environment variables
├── package.json
├── Middleware/
│   └── loggerMiddleware.js       # Custom logger middleware
├── models/
│   └── foods.js                  # Mongoose schema + Joi validation
└── router/
    └── foods.js                  # All API routes
```

---

## ⚙️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/food-ordering-api.git
cd food-ordering-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Edit the `.env` file:

```env
PORT=5000
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/?appName=Cluster0
NODE_ENV=DEVELOPMENT
```

### 4. Run the server

```bash
# Development
npm run dev

# Production
npm start
```

---

## 📦 Food Schema

| Field         | Type             | Description         |
| ------------- | ---------------- | ------------------- |
| `name`        | String           | Food item name      |
| `description` | String           | Food description    |
| `price`       | Number           | Price in EGP        |
| `discount`    | Number           | Discount amount     |
| `image`       | String (URL)     | Image URL           |
| `restaurant`  | String           | Restaurant name     |
| `categories`  | Array of Strings | Food categories     |
| `isAvailable` | Boolean          | Availability status |

---

## 🔗 API Endpoints

### Base URL

```bash
http://localhost:5000/api/foods
```

| Method   | Endpoint                          | Description          |
| -------- | --------------------------------- | -------------------- |
| `GET`    | `/api/foods`                      | Get all foods        |
| `GET`    | `/api/foods?restaurant=McDonalds` | Search by restaurant |
| `GET`    | `/api/foods/available`            | Get available foods  |
| `GET`    | `/api/foods/:id`                  | Get food by ID       |
| `POST`   | `/api/foods`                      | Create a food item   |
| `PATCH`  | `/api/foods/:id`                  | Update a food item   |
| `DELETE` | `/api/foods/:id`                  | Delete a food item   |

---

## ✅ Validation Rules (Joi)

| Field         | Validation             |
| ------------- | ---------------------- |
| `name`        | Required, min 3 chars  |
| `description` | Required, min 20 chars |
| `price`       | Required, >= 0         |
| `discount`    | Required, >= 0         |
| `image`       | Required, valid URL    |
| `restaurant`  | Required               |
| `categories`  | Required array         |
| `isAvailable` | Required boolean       |

---

## 🧪 API Tests (PowerShell)

### Create Food Item

```powershell
curl -X POST http://localhost:5000/api/foods `
-H "Content-Type: application/json" `
-d '{"name":"Burger","description":"Delicious beef burger with cheese and vegetables","price":85,"discount":10,"image":"https://example.com/burger.jpg","restaurant":"McDonalds","categories":["Fast Food","Burgers"],"isAvailable":true}'
```

### Get All Foods

```powershell
curl http://localhost:5000/api/foods
```

### Get Available Foods

```powershell
curl http://localhost:5000/api/foods/available
```

### Search By Restaurant

```powershell
curl "http://localhost:5000/api/foods?restaurant=McDonalds"
```

### Get Food By ID

```powershell
curl http://localhost:5000/api/foods/<ID>
```

### Update Food Item

```powershell
curl -X PATCH http://localhost:5000/api/foods/<ID>
```

### Delete Food Item

```powershell
curl -X DELETE http://localhost:5000/api/foods/<ID>
```

### Validation Error Test (400)

```powershell
curl -X POST http://localhost:5000/api/foods `
-H "Content-Type: application/json" `
-d '{"name":"ab","price":-5}'
```

### Not Found Test (404)

```powershell
curl http://localhost:5000/api/foods/000000000000000000000000
```

---

## 🌟 Bonus Features

* 🔍 Search foods by restaurant name
* ✅ Filter available foods only
* 🛡 Request validation using Joi
* 📄 Organized project structure
* ⚡ RESTful API design

---

## 👨‍💻 Author

**Mohamed Sayed**
Full Stack Developer
