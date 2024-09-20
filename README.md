# Country Dashboard App

This application fetches and displays country data from a REST API, allowing users to view countries, filter them by region, search by name or capital, and compare them side by side. It is built with React, TypeScript, and Next.js, focusing on performance, usability, and data manipulation.

## Node
Version: 18.17.1

## Next.js
Version: 14.2.10

## Features

### API Integration

- Fetches country data from a REST API endpoint.
- Implements error handling and loading states during data fetching.

### Data Manipulation

- Defines TypeScript interfaces for country data objects.
- Provides functions to:
  - Sort countries by population (ascending and descending).
  - Filter countries by region.
  - Implement search functionality to find countries by name or capital.

### UI Components

- Responsive grid layout to display country cards, each showing:
  - Flag
  - Name
  - Capital
  - Population
  - Region
- Detailed view for each country displaying:
  - Currencies
  - Languages
  - Time zones

### State Management

- Uses React hooks for local state management.
- Utilizes Next.js for server-side rendering (SSR) for initial page load.
- Implements lazy loading for country cards as the user scrolls.
- Includes a dark mode toggle with persistent user preference.

### Advanced Features

- Custom hook for fetching and caching API data.
- Side-by-side comparison of two countries.
- Visualization using Chart.js for comparing country data.

### Testing

- Unit tests for utility functions .
- Component tests using React Testing Library .
- Integration tests for main page functionality .

### Bonus Features (optional)

- CI/CD pipeline setup using GitHub Actions.

## Evaluation Criteria

- Code quality, organization, and best practices.
- Effective TypeScript usage for type safety.
- React and Next.js knowledge demonstrated.
- State management and data flow efficiency.
- UI/UX considerations and responsive design.
- Performance optimizations including lazy loading and SSR.
- Testing coverage and quality.
- Well-maintained Git commit history and documentation.

## Getting Started

*Clone the repository:*
```bash
   git clone https://github.com/vvkgupta16/elanco-nextjs-country.git```

Install the npm

   npm install or npm i

Run the development server:


npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.