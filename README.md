# 📝 Simple-Back-End-API-Goal (Node.js + Express)

A minimal REST API for managing tasks (to-do items). Uses in-memory storage (no database).

## Features
- CRUD endpoints for tasks
- Basic validation (title required; clear error messages)
- Example cURL + Postman collection
- Optional Dockerfile

## Tech Stack
- Node.js + Express

## Prerequisites
- Node.js ≥ 16
- npm

## Getting Started

## 🚀 How to Run

1. Clone this repo:
   ```bash
   git clone https://github.com/rawan-ehab2002/Simple-Back-End-API-Goal.git
   cd Simple-Back-End-API-Goal
   
2. Install dependencies:
   ```bash
   npm install

3. Start the server:
    ```bash
   node index.js
   
4. The API will be running at:
   ```bash
   http://localhost:3000

## 📌 Available Endpoints

| Method | Endpoint     | Description      |
| ------ | ------------ | ---------------- |
| POST   | `/tasks`     | Add a new task   |
| GET    | `/tasks`     | List all tasks   |
| GET    | `/tasks/:id` | Get a task by ID |
| PUT    | `/tasks/:id` | Update a task    |
| DELETE | `/tasks/:id` | Delete a task    |

## 🧪 Example Requests (curl)

1. ➕ Add a new task
   ```bash
   curl -X POST http://localhost:3000/tasks \
   -H "Content-Type: application/json" \
   -d '{"title":"Buy groceries","description":"Milk, eggs"}'

2. 📋 List all tasks 
   ```bash
   curl http://localhost:3000/tasks

3. 🔍 Get a task by ID
   ```bash
   curl http://localhost:3000/tasks/1

4. ✏️ Update a task
   ```bash
   curl -X PUT http://localhost:3000/tasks/1 \
   -H "Content-Type: application/json" \
   -d '{"completed": true}'

5. ❌ Delete a task
   ```bash
   curl -X DELETE http://localhost:3000/tasks/1

6. ✅ Validation \
   title is required when creating or updating tasks.
   If a task is not found, the API returns: \
- Not found → 404 
   ```json
   { "error": "Task not found" }
- Validation error → 400 
   ```json 
   { "error":"Task title is required" }
  
## Postman
**Postman Collection:** [📂 Simple-Task-API.postman_collection.json](./postman/Simple-Task-API.postman_collection.json)
- The collection uses {{baseUrl}} (defaults to http://localhost:3000).
- Import it into Postman and run the requests directly.

## 📂 Project Structure
. \
├─ src/ \
│  └─ index.js \
├─ postman/ \
│  └─ Simple-Task-API.postman_collection.json \
├─ package.json \
├─ package-lock.json   (optional) \
├─ Dockerfile          (optional) \
└─ README.md 

## 🚀 Running with Docker (Optional)
1. Dockerfile
   ```dockerfile
   FROM node:18-alpine
   
   # Set working directory inside container
   WORKDIR /app
   
   # Copy package.json and package-lock.json
   COPY package*.json ./
   
   # Install dependencies
   RUN npm install
   
   # Copy application code
   COPY . .
   
   # Expose port 3000
   EXPOSE 3000
   
   # Start the app
   CMD ["node", "src/index.js"]

2. Build Docker Image
Run the following command in the project root (where Dockerfile and package.json exist):
   ```bash
   docker build -t task-api .

3. Run Container
   ```bash
   docker run -p 3000:3000 task-api



   

   




