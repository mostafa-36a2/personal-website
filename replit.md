# Replit Configuration

## Overview

This is a personal portfolio website for Mostafa Alayesh, a software engineer, educator, and entrepreneur. The application is built as a full-stack web application with a React frontend and Express backend, designed to showcase professional background, skills, projects, and services in a modern, responsive interface.

## System Architecture

### Frontend Architecture
- **Framework**: React with TypeScript
- **Styling**: TailwindCSS with shadcn/ui component library
- **State Management**: TanStack Query for server state management
- **Routing**: Wouter for client-side routing
- **Build Tool**: Vite for development and production builds
- **Theme System**: Custom theme provider with light/dark mode support

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: Built-in session storage with connect-pg-simple
- **Development**: Hot reload with Vite integration

### Project Structure
```
├── client/          # React frontend application
├── server/          # Express backend API
├── shared/          # Shared TypeScript schemas and types
├── migrations/      # Database migration files
└── attached_assets/ # Project requirements and assets
```

## Key Components

### UI Components
- Comprehensive shadcn/ui component library implementation
- Custom theme system with CSS variables
- Responsive design with mobile-first approach
- Accessible components following WCAG 2.1 AA standards

### Page Sections
- **Hero**: Main landing section with name, tagline, and CTA buttons
- **About**: Personal story, MBTI badge, and key statistics
- **Skills**: Interactive categorized skill showcase
- **Timeline**: Professional journey visualization
- **Projects**: Filterable project gallery with achievements
- **Services**: "Mostafa as a Service" offerings with pricing
- **Interests**: Personal interests (reading, gaming, movies)
- **Contact**: Contact form with social media integration

### Database Schema
- User management system with basic authentication structure
- PostgreSQL database with Drizzle ORM integration
- Prepared for future content management features

## Data Flow

1. **Client-Side Rendering**: React components render the portfolio sections
2. **Static Content**: Most content is currently static within components
3. **Theme Management**: Client-side theme persistence with localStorage
4. **API Integration**: Prepared Express backend for future dynamic content
5. **Database Operations**: Drizzle ORM handles PostgreSQL interactions

## External Dependencies

### Core Dependencies
- **React Ecosystem**: React, React DOM, React Query
- **UI Library**: Radix UI primitives with shadcn/ui
- **Styling**: TailwindCSS, class-variance-authority, clsx
- **Backend**: Express, Drizzle ORM, Neon Database
- **Development**: Vite, TypeScript, tsx

### Notable Features
- Font integration (Inter, Source Code Pro)
- JSON-LD structured data for SEO
- Open Graph meta tags
- Responsive images with Unsplash integration
- Form handling with React Hook Form (ready for integration)

## Deployment Strategy

### Build Process
1. **Frontend**: Vite builds React app to `dist/public`
2. **Backend**: ESBuild bundles Express server to `dist/index.js`
3. **Database**: Drizzle migrations via `db:push` command

### Environment Variables
- `DATABASE_URL`: PostgreSQL connection string (required)
- `NODE_ENV`: Environment mode (development/production)

### Scripts
- `npm run dev`: Development server with hot reload
- `npm run build`: Production build
- `npm run start`: Production server
- `npm run db:push`: Database schema updates

## User Preferences

Preferred communication style: Simple, everyday language.

## Changelog

Changelog:
- July 07, 2025. Initial setup