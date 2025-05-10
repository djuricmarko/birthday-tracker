# Birthday Tracker

A modern web application that helps you keep track of important birthdays. Never forget a birthday again!

## Description

Birthday Tracker is a Next.js application that allows users to:
- Create an account and log in securely using Clerk authentication
- Add birthdays with names and dates
- View a list of saved birthdays
- Get reminders for upcoming birthdays

The application is built with modern web technologies and provides a clean, responsive user interface.

## Technologies Used

- **Frontend**: Next.js 15, React 19, TailwindCSS
- **Authentication**: Clerk
- **Database**: NeonDB (PostgreSQL) with Drizzle ORM
- **UI Components**: shadcn/ui, Radix UI, React Day Picker
- **Build Tools**: TurboRepo

## Prerequisites

Before running this project, you need to have:

- Node.js (latest LTS version recommended)
- pnpm package manager
- Clerk account for authentication
- NeonDB account for database (or another PostgreSQL database)

## Environment Setup

1. Clone the repository
2. Copy `.env.example` to `.env.local` and fill in the required environment variables:
   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   ```

## Installation

```bash
# Install dependencies
pnpm install
```

## Running the Project

```bash
# Development mode with TurboPack
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Features

- **User Authentication**: Secure login and registration with Clerk
- **Birthday Management**: Add and view birthdays
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean and intuitive user interface

## License

This project is licensed under the MIT License.
