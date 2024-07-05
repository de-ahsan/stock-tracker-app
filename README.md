# Stock Tracker App

This project is a stock tracking application built with React and TypeScript, styled with TailwindCSS. It fetches stock data from an API and displays it in a visually appealing way with loading spinners and a colorful design.

## Features

- Fetch and display stock data
- Colorful and responsive design
- Loading spinners for data fetching indication
- Organized with atomic design principles

## Technologies Used

- React
- TypeScript
- TailwindCSS
- Axios

## Installation

1. **Clone the repository:**

   ```sh
   git clone ...
   cd stock-tracker-app
   ```

2. **Install the dependencies:**

   ```sh
   npm install
   ```

3. **Start the development server:**

   ```sh
   npm start
   ```

   This will run the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Project Structure

- `src/`
  - `assets/`: Contains image assets.
  - `components/`
    - `atoms/`: Small, reusable components like buttons and labels.
    - `molecules/`: Compound components made up of atoms, like forms and cards.
    - `organisms/`: Larger components made up of molecules, like navigation bars and footers.
  - `hooks/`: Custom React hooks.
  - `pages/`: Top-level components representing different pages.
  - `services/`: API service files.
  - `styles/`: Global and component-specific styles.
  - `types/`: TypeScript type definitions.
  - `utils/`: Utility functions and constants.

## Usage

1. **Fetch Data:**

   The app uses a dummy data service for testing. To switch to a real API, update the service in `src/services/stockService.ts` with your API endpoint and adjust the `StockEntry` type accordingly.

2. **Customize Design:**

   TailwindCSS is used for styling. Modify the `tailwind.config.js` and component styles to customize the design according to your needs.

## Dummy Data Example

Here's an example of how the dummy data is structured in `stockService.ts`:

```typescript
export const getDummyStockData = async (): Promise<StockData> => {
  return {
    "2023-07-01 16:00:00": { ... },
    // More data points...
  };
};
```

Feel free to replace the dummy data with real API responses once your API key is active.

## Contributing

1. **Fork the repository.**
2. **Create a new branch:**

   ```sh
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes and commit them:**

   ```sh
   git commit -m 'Add some feature'
   ```

4. **Push to the branch:**

   ```sh
   git push origin feature/your-feature-name
   ```

5. **Submit a pull request.**

## Contact

If you have any questions or suggestions, feel free to open an issue or reach out to me at your.email@example.com.
