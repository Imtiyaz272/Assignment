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

router.get('/stats', async (req, res) => {
    const { coin } = req.query;
  
    if (!coin) {
        return res.status(400).json({ error: 'Coin name is required' });
      }

    if (!COINS.includes(coin)) {
      return res.status(400).json({ error: 'Invalid coin name' });
    }
  
    try {
      const latestRecord = await Crypto.findOne({ coin }).sort({ timestamp: -1 });
  
      if (!latestRecord) {
        return res.status(404).json({ error: 'No data found for this coin' });
      }
  
      res.json({
        coin: latestRecord.coin,
        price: latestRecord.price,
        marketCap: latestRecord.marketCap,
        '24hChange': latestRecord.change24h,
        timestamp: latestRecord.timestamp,
      });
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

export default router;
