# Image Upload API with Node.js, Express, and MongoDB

## Overview
This is a simple API for uploading and retrieving images using **Node.js**, **Express**, and **MongoDB**. Images are stored locally in the `uploads/` directory, and metadata is saved in a MongoDB database.

## Features
- Upload images with `multer`
- Store metadata in MongoDB
- Retrieve images via API
- File filtering to allow only images

## Technologies Used
- Node.js
- Express.js
- MongoDB (Mongoose)
- Multer (for file upload handling)

## Installation
### Prerequisites
- Install [Node.js](https://nodejs.org/)
- Install [MongoDB](https://www.mongodb.com/try/download/community) and run it locally

### 1. Clone the Repository
```sh
git clone https://github.com/your-repo/image-upload-api.git
cd image-upload-api
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory and add the following:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/image_upload
```

### 4. Run the Server
```sh
npm run dev
```
The API will be available at `http://localhost:5000/`.

## API Endpoints
### 1. Upload an Image
- **Endpoint:** `POST /upload`
- **Headers:** `Content-Type: multipart/form-data`
- **Body:** `image` (file upload field)
- **Response:**
```json
{
  "message": "Image uploaded successfully",
  "image": {
    "_id": "65d2a7c8c8f1a5b1b23a12e3",
    "filename": "1741625477467-w.jpg",
    "path": "uploads/1741625477467-w.jpg",
    "size": 204800,
    "mimetype": "image/jpeg"
  }
}
```

### 2. Retrieve All Images
- **Endpoint:** `GET /images`
- **Response:**
```json
[
  {
    "_id": "65d2a7c8c8f1a5b1b23a12e3",
    "filename": "1741625477467-w.jpg",
    "path": "uploads/1741625477467-w.jpg",
    "size": 204800,
    "mimetype": "image/jpeg"
  }
]
```

### 3. Retrieve a Specific Image
- **Endpoint:** `GET /images/:id`
- **Response:**
The image file is returned as a response.

### 4. Delete an Image
- **Endpoint:** `DELETE /images/:id`
- **Response:**
```json
{
  "message": "Image deleted successfully"
}
```

## Database Schema (MongoDB)
```js
const ImageSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  path: { type: String, required: true },
  uploadDate: { type: Date, default: Date.now },
  size: { type: Number, required: true },
  mimetype: { type: String, required: true },
});

export const Image = mongoose.model("Image", ImageSchema);
```

## Troubleshooting
- **Error: `ENOENT: no such file or directory, open 'uploads/...'`**
  - Ensure the `uploads/` directory exists before running the server.
  - Run `mkdir uploads` manually or include the following code in `server.ts`:
  ```js
  import fs from "fs";
  if (!fs.existsSync("uploads")) {
    fs.mkdirSync("uploads");
  }
  ```
- **Images not appearing in MongoDB Compass**
  - Check if the database `image_upload` exists in Compass.
  - Ensure the API successfully returns image data.

## Future Enhancements
- Implement GridFS for large file storage.
- Integrate AWS S3 for cloud storage.
- Add authentication for file access control.

## License
This project is licensed under the MIT License.

---

Enjoy coding! 🚀# Image Upload API with Node.js, Express, and MongoDB

## Overview
This is a simple API for uploading and retrieving images using **Node.js**, **Express**, and **MongoDB**. Images are stored locally in the `uploads/` directory, and metadata is saved in a MongoDB database.

## Features
- Upload images with `multer`
- Store metadata in MongoDB
- Retrieve images via API
- File filtering to allow only images

## Technologies Used
- Node.js
- Express.js
- MongoDB (Mongoose)
- Multer (for file upload handling)
- GridFS (optional for later enhancement)
- AWS S3 (optional for cloud storage)

## Installation
### Prerequisites
- Install [Node.js](https://nodejs.org/)
- Install [MongoDB](https://www.mongodb.com/try/download/community) and run it locally

### 1. Clone the Repository
```sh
git clone https://github.com/your-repo/image-upload-api.git
cd image-upload-api
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Configure Environment Variables
Create a `.env` file in the root directory and add the following:
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/image_upload
```

### 4. Run the Server
```sh
npm run dev
```
The API will be available at `http://localhost:5000/`.

## API Endpoints
### 1. Upload an Image
- **Endpoint:** `POST /upload`
- **Headers:** `Content-Type: multipart/form-data`
- **Body:** `image` (file upload field)
- **Response:**
```json
{
  "message": "Image uploaded successfully",
  "image": {
    "_id": "65d2a7c8c8f1a5b1b23a12e3",
    "filename": "1741625477467-w.jpg",
    "path": "uploads/1741625477467-w.jpg",
    "size": 204800,
    "mimetype": "image/jpeg"
  }
}
```

### 2. Retrieve All Images
- **Endpoint:** `GET /images`
- **Response:**
```json
[
  {
    "_id": "65d2a7c8c8f1a5b1b23a12e3",
    "filename": "1741625477467-w.jpg",
    "path": "uploads/1741625477467-w.jpg",
    "size": 204800,
    "mimetype": "image/jpeg"
  }
]
```

### 3. Retrieve a Specific Image
- **Endpoint:** `GET /images/:id`
- **Response:**
The image file is returned as a response.


## Database Schema (MongoDB)
```js
const ImageSchema = new mongoose.Schema({
  filename: { type: String, required: true },
  path: { type: String, required: true },
  uploadDate: { type: Date, default: Date.now },
  size: { type: Number, required: true },
  mimetype: { type: String, required: true },
});

export const Image = mongoose.model("Image", ImageSchema);
```



