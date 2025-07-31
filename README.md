# CycleCoach


## Description
A platform for admins (coaches) to create and manage categorized cycling workouts. Users browse and build custom workout schedules.


## Features
- Categorized workout browser (endurance, threshold, etc.)
- Workout detail view (title, duration, intensity, video)
- Admin panel to create/edit/delete workouts
- User registration and login
- Add workouts to personal schedule



## Architecture Diagram:
```
┌──────────────┐    ┌───────────────┐    ┌───────────────┐
│    User      │    │    category   │    │   workout     │
│              │    │               │    │               │
│ • username   │◄───│ • name        │◄───│ • title       │
│ • email      │    │ • description │    │ • duration    │
│ • password   │    │ • workout[]   │    │ • description │
│ • schedule[] │    │               │    │ • itensity    │
│              │    │               │    │ • category    │
└──────────────┘    └───────────────┘    └───────────────┘
```
---
## File Structure:
```
CycleCoach/
├── app.js                  # Express app config
├── server.js               # Entry point (starts the server)
│
├── models/
│   ├── user.js             # User model with JWT
│   ├── category.js         # Workout categories (like: endurance, threshold, sprints...)
│   ├── workout.js          # Workout model (linked to category)
│   └── db.js               # MongoDB connection setup
│
├── controllers/
│   ├── auth/
│   │   ├── dataController.js    # User auth logic (login, register)
│   │   ├── viewController.js    # View logic
│   │   ├── apiController.js     # API responses
│   │   └── routeController.js   # user routes
│   │
│   └── workouts/
│       ├── dataController.js    # Workout/category logic
│       ├── viewController.js    # workout/category view logic
│       ├── apiController.js     # API (/api/workouts)
│       └── routeController.js   # Routes (/workouts, /categories)
│
├── routes/
│   └── apiRoutes.js        # All /api routes grouped here
│
├── views/
│   ├── auth/               # Login/register pages
│   ├── workouts/           # Workout-related views (index, show, new)
│   ├── categories/         # Category views
│   └── layouts/            # Common layout files (e.g., main.jsx)
│
├── tests/                  # Jest test files
│   ├── auth.test.js
│
└── public/                 # Static assets (CSS, images, JS)
    └── styles.css
```
