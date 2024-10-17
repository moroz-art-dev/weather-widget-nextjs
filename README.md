# Weather Widget Next.js

A responsive weather widget built using Next.js that displays the current weather and forecast data. It supports different widget sizes (small, wide, large) and adapts to the user's location using geolocation. The widget allows users to search for weather data by city and uses Material-UI for styling.

### 🌐 [Live Demo on Vercel](https://weather-widget-nextjs-roan.vercel.app/)

## Features

- **Responsive Design**: Supports small (2x2), wide (4x2), and large (4x4) widget sizes.
- **Current Weather & Forecast**: Displays current weather conditions and a forecast for the next few days.
- **Geolocation**: Automatically fetches weather data based on the user's location.
- **City Search**: Allows users to search for weather data by city.
- **Theming**: Light and dark mode support using Material-UI's theming.
- **API Integrations**: Uses OpenWeatherMap and GeoNames APIs for weather and location data.

## Getting Started

To run this project locally, follow these steps:

1. **Clone the repository**:

```bash
   git clone https://github.com/yourusername/weather-widget-nextjs.git
   cd weather-widget-nextjs
```

2. **Install the dependencies**:

```bash
   npm install
```

3. **Create a `.env.local` file in the root directory with your API keys**:

```
   NEXT_PUBLIC_OPENWEATHERMAP_API_KEY=your_openweathermap_api_key
   NEXT_PUBLIC_GEONAMES_USERNAME=your_geonames_username
```

4. **Scripts**:

```bash
   npm run dev: Starts the development server.
   npm run build: Builds the application for production.
   npm run start: Starts the production server.
   npm run lint: Runs ESLint for code linting.
   npm run test: Runs unit tests using Jest.
   npm run test:watch: Runs Jest tests in watch mode.
```

## Project Architecture

**/src/app/**: Contains the main entry point and API routes.
**/src/common/**: Holds shared hooks, services, and configuration files.
**/src/components/**: Reusable UI components and weather-related features.
**/src/store/**: State management using React Context and custom hooks.
**/src/styles/**: Custom styles, themes, and global CSS.
**/public/**: Static assets like icons.

## Linting & Formatting

- ESLint: Configured to enforce coding standards and best practices for JavaScript/TypeScript.
- Prettier: Integrated for consistent code formatting.
- Stylelint: Used for linting and fixing styles in CSS/SCSS files.

## Testing

- Jest: For unit testing and integration testing.
- Testing Library: Simplifies testing React components by focusing on user interactions.
- Cypress: For end-to-end testing, ensuring the app behaves correctly in real user scenarios.

## Technologies Used

- Next.js: React framework for server-side rendering and API routes.
- React: Component-based UI library.
- Material-UI: UI library for React, used for styling and responsive design.
- OpenWeatherMap API: Provides weather data.
- GeoNames API: Provides location data based on coordinates.
- TypeScript: Type safety for better development experience.
