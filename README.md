# WanderLust

WanderLust is a full-stack web application inspired by Airbnb, allowing users to list, explore, and review unique places to stay around the world. Built with Node.js, Express, MongoDB, and EJS, it features user authentication, image uploads, interactive maps, and a robust review system.

## Features

- User authentication (sign up, login, logout)
- Create, edit, and delete property listings
- Upload listing images (Cloudinary integration)
- Interactive Mapbox maps for each listing
- Leave and manage reviews with ratings
- Filter and explore listings by category
- Flash messages for user feedback
- Responsive, modern UI with Bootstrap

## Tech Stack

- Node.js, Express.js
- MongoDB & Mongoose
- Passport.js (local strategy)
- EJS templating & EJS-Mate
- Cloudinary & Multer for image uploads
- Mapbox for maps/geocoding
- Bootstrap 5, custom CSS

## Getting Started

### Prerequisites
- Node.js (v22.13.0 recommended)
- MongoDB Atlas or local MongoDB
- Cloudinary account
- Mapbox account

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/SujalP21/WanderLust
   cd WanderLust
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Set up environment variables:**
   Create a `.env` file in the root directory with the following:
   ```env
   ATLAS_DB_URL=<your_mongodb_connection_string>
   SECRET=<your_session_secret>
   CLOUD_NAME=<your_cloudinary_cloud_name>
   CLOUD_API_KEY=<your_cloudinary_api_key>
   CLOUD_API_SECRET=<your_cloudinary_api_secret>
   MAP_TOKEN=<your_mapbox_token>
   ```
4. **(Optional) Seed the database:**
   - Edit `init/index.js` and run it to populate sample listings.

### Running the App

```bash
node app.js
```

The server will start on [http://localhost:8080](http://localhost:8080).

## Usage
- Sign up for a new account or log in.
- Create new listings with images and location.
- Browse and filter listings.
- View listing details, map, and reviews.
- Leave reviews and ratings for listings.
- Edit or delete your own listings and reviews.

## Folder Structure
- `app.js` - Main application entry point
- `models/` - Mongoose models (User, Listing, Review)
- `routes/` - Express route handlers
- `controllers/` - Route logic
- `views/` - EJS templates
- `public/` - Static assets (CSS, JS)
- `utils/` - Utility classes (error handling, async wrapper)
- `init/` - Sample data and DB seeding

## Environment Variables
- `ATLAS_DB_URL` - MongoDB connection string
- `SECRET` - Session secret
- `CLOUD_NAME`, `CLOUD_API_KEY`, `CLOUD_API_SECRET` - Cloudinary credentials
- `MAP_TOKEN` - Mapbox API token

## License
ISC

---
**Author:** Sujal Pareek
