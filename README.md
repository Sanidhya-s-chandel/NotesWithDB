# 📝 NotesWithDB

A powerful note-taking application built with **Node.js** and **MongoDB** for efficient note management with persistent storage.

## 🚀 Features
✅ Create, read, update, and delete notes
✅ MongoDB integration for data persistence
✅ Simple and intuitive user interface
✅ RESTful API for easy integration

## 🛠 Installation

### 1️⃣ Clone the Repository
```sh
 git clone https://github.com/Sanidhya-s-chandel/NotesWithDB.git
```
### 2️⃣ Navigate to the Project Directory
```sh
 cd NotesWithDB
```
### 3️⃣ Install Dependencies
```sh
 npm install
```
### 4️⃣ Configure Environment Variables
- Create a `.env` file in the root directory
- Add the following details:
```env
PORT=3000
MONGO_URI=your_mongodb_connection_string
```

### 5️⃣ Start the Application
```sh
 npm start
```

## 📌 Usage
- Open your browser and go to `http://localhost:3000`
- Use the API endpoints to manage notes
- Notes are stored securely in MongoDB

## 📜 API Endpoints
| Method | Endpoint       | Description           |
|--------|--------------|----------------------|
| GET    | /            | Get all notes       |
| POST   | /new       | Create a new note   |
| GET    | /view/:filename  | Get a single note   |
| POST   | /update/:id  | Update a note       |
| GET    | /delete/:id   | Delete a note       |

## 🤝 Contributing
1. **Fork** the repository
2. **Create** a new branch:
   ```sh
   git checkout -b feature-branch
   ```
3. **Make changes** and commit them:
   ```sh
   git commit -m "Added new feature"
   ```
4. **Push** to your fork:
   ```sh
   git push origin feature-branch
   ```
5. **Create a pull request** 🚀

## 📜 License
This project is licensed under the **MIT License**.

## 📬 Contact
For any queries, feel free to contact [Sanidhya-s-chandel](https://github.com/Sanidhya-s-chandel).

