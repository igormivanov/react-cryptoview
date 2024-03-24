import axios from "axios"
import { PricesDataRequest } from "../types/PricesDataRequest"
import { Price } from "../types/Prices"
import { Coin } from "../types/Coin"

const api = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
  headers: {
    'x-cg-demo-api-key': import.meta.env.VITE_GECKO_KEY,
  },
})


interface GeckoServiceType {
  get10Coins: () => Promise<Coin[]>,
  getPrices: (params: PricesDataRequest) => Promise<Price[]>
}

export const geckoService = (): GeckoServiceType => ({
  
  get10Coins: async () => {
    const coins = await api.get('/coins/markets?vs_currency=usd&per_page=10&precision=2')
      .then((response) => {
        return response.data
      })
      .catch((err) => {
        console.log(err.message)
      })

      return coins
  },
  getPrices: async ({id, days, priceType})  => {
    const prices = await api.get(`coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`)
      .then((response) => {
        
        if (response.data) {
          if (priceType == "market_caps") {
            return response.data.market_caps;
          } else if (priceType == "total_volumes") {
            return response.data.total_volumes;
          } else {
            return response.data.prices;
          }
        }
      })
      .catch((err) => {
        console.log(err.message)
      })

      return prices
  }

})