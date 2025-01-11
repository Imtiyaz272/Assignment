import { Crypto } from "../models/cryptoModel.js";
import express from 'express';
import cron from 'node-cron';
import axios from 'axios';

const router = express.Router();

const COINS = ['bitcoin', 'matic-network', 'ethereum'];
const COINGECKO_API = 'https://api.coingecko.com/api/v3/simple/price';

async function fetchAndSaveCryptoData() {
    try {
      for (const coin of COINS) {
        const { data } = await axios.get(COINGECKO_API, {
          params: {
            ids: coin,
            vs_currencies: 'usd',
            include_market_cap: true,
            include_24hr_change: true,
          },
        });
  
        const record = new Crypto({
          coin,
          price: data[coin].usd,
          marketCap: data[coin].usd_market_cap,
          change24h: data[coin].usd_24h_change,
        });
  
        await record.save();
      }
      console.log('Data fetched and stored successfully');
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  }

cron.schedule('0 */2 * * *', fetchAndSaveCryptoData);  

export default router;
