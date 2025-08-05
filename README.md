# CycleCoach


## Description
A platform for cyclist to create and manage categorized cycling workouts. Users browse and build custom workout schedules.


## Features
- Categorized workout browser (endurance, threshold, etc.)
- Workout detail view (title, duration, intensity)
- Admin panel to create/edit/delete workouts
- User registration and login
- Add workouts to personal schedule



## Architecture Diagram:
```
┌──────────────┐    ┌───────────────┐    ┌───────────────┐
│    User      │    │    category   │    │   workout     │
│              │    │               │    │               │
│ • name       │◄───│ • name        │◄───│ • title       │
│ • email      │    │ • description │    │ • duration    │
│ • password   │    │ • workouts[]  │    │ • description │
│ • workouts[] │    │               │    │ • itensity    │
│              │    │               │    │ • category    │
└──────────────┘    └───────────────┘    └───────────────┘
```

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

## Auth Routes
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| POST | `/auth/signup` | Create new user | No |
| POST | `	/auth/login` | Login user | No |
| POST | `/auth/logout` | Logout user | Yes |


## User Routes
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/users/dashboard` | View user dashboard/workouts | Yes |
| POST | `/users/workouts` | Add workout to workouts | Yes |
| DELETE | `/users/workouts/:id` | Remove workout from workouts | Yes |

## Category Routes
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/categories` | List all categories | No |
| GET | `/categories/:id` | View category & workouts | No |
| POST | `/categories` |Create new category | Yes(admin) |
| GET | `/categories/:id/edit` | Edit category form | Yes(admin) |
| PUT | `/categories/:id` | Update category | Yes(admin) |
| DELETE | `/categories/:id` | Delete category | Yes(admin) |

## Workout Routes
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `	/workouts` | List all workouts | No |
| GET | `/workouts/:id` | View workout details | No |
| POST | `/workouts` | Create new workout | Yes(admin) |
| GET | `/workouts/:id/edit` | Edit workout | Yes(admin) |
| PUT | `/workouts/:id` | Update workout | Yes(admin) |
| DELETE | `/workouts/:id` | 	Delete workout | Yes(admin) |

## API Routes
| Method | Endpoint | Description | Auth Required |
|--------|----------|-------------|---------------|
| GET | `/api/workouts` | Get all workouts as JSON | No |
| GET | `/api/categories` | 	Get all categories as JSON | No |
| GET | `/api/user/workouts` | Get user's workouts as JSON| Yes |
