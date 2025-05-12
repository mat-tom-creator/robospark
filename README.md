# RoboSpark

RoboSpark is a modern web platform for children's robotics education, designed to provide engaging STEM learning experiences for ages 5-16.

## Project Overview

RoboSpark offers a comprehensive educational platform with age-appropriate robotics curriculum:

- Spark Explorers (5-7 years)
- Spark Innovators (8-12 years)
- Spark Engineers (13-16 years)

The platform features a subscription-based model with physical robotics kits, interactive coding platforms, and virtual classes.

## Technology Stack

- **Frontend**: React, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **Routing**: React Router
- **Icons**: Lucide React

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/robospark.git
   cd robospark
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Project Structure

```
robospark/
├── public/                  # Static assets
│   ├── favicon.ico
│   └── assets/
│       ├── images/          # Image assets
│       └── icons/           # Icon assets
├── src/
│   ├── components/          # React components
│   │   ├── common/          # Reusable components
│   │   ├── layout/          # Layout components
│   │   └── sections/        # Page section components
│   ├── hooks/               # Custom React hooks
│   ├── pages/               # Page components
│   │   └── programs/        # Program-specific pages
│   ├── routes/              # Routing configuration
│   ├── utils/               # Utility functions
│   ├── App.tsx              # Root component
│   └── main.tsx             # Entry point
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## Features

- **Responsive Design**: Mobile-friendly interface using Tailwind CSS
- **Component Library**: Reusable UI components including cards, forms, and layout elements
- **Age-Appropriate Programs**: Tailored content for different age groups
- **Dynamic Routing**: Clean URL structure using React Router
- **Form Handling**: Custom hooks for form validation and submission

## Development Phases

The project is being implemented in three phases:

1. **Phase 1**: Project Setup & Homepage

   - Initial project configuration
   - Core components
   - Homepage implementation

2. **Phase 2**: Complete Frontend Implementation

   - Extended component library
   - All page implementations
   - Forms and interactive elements
   - Complete styling and animations (Partial Implementation)

3. **Phase 3**: Backend Integration & Database (Not Started)
   - Backend API implementation
   - Database models
   - Authentication
   - Form submission handling

## Available Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview production build locally

## Color Palette

- Primary Purple (#5B43D6)
- Teal (#2AC4A2)
- Warm Sand (#F5EFE6)
- Coral (#FF6B6B)
- Deep Navy (#2D3047)

## License

[MIT License](LICENSE)
