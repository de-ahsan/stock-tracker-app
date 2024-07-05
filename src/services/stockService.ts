import axios from 'axios';
import { ALPHA_VANTAGE_BASE_URL } from '../constants/urls';
import { StockData } from '../types/stock';

const ALPHA_VANTAGE_API_KEY = process.env.REACT_APP_ALPHA_VANTAGE_API_KEY;

export const fetchStockData = async (symbol: string, interval: string): Promise<StockData | null> => {
  try {
    const response = await axios.get(ALPHA_VANTAGE_BASE_URL, {
      params: {
        function: 'TIME_SERIES_INTRADAY',
        symbol,
        interval,
        apikey: ALPHA_VANTAGE_API_KEY,
      },
    });
    return response.data['Time Series (' + interval + ')'] || null;
  } catch (error) {
    throw new Error('Failed to fetch stock data');
  }
};

// import { StockData } from '../types/stock';

// export const fetchStockData = async (symbol: string, interval: string): Promise<StockData | null> => {
//   // return dummy data
//   return {
//     '2021-01-01 09:30:00': {
//       '1. open': '100.0',
//       '2. high': '105.0',
//       '3. low': '95.0',
//       '4. close': '100.0',
//       '5. volume': '1000000',
//     },
//     '2021-01-01 09:45:00': {
//       '1. open': '100.0',
//       '2. high': '105.0',
//       '3. low': '95.0',
//       '4. close': '100.0',
//       '5. volume': '1000000',
//     },
//     '2021-01-01 10:00:00': {
//       '1. open': '100.0',
//       '2. high': '105.0',
//       '3. low': '95.0',
//       '4. close': '100.0',
//       '5. volume': '1000000',
//     },
//   };
// }
