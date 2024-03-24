export interface Coin {
  id: string,
  name: string,
  symbol: string,
  image: string,
  current_price: number,
  price_change_24h: number,
  total_volume: number,
  high_24h: number,
  low_24h: number,
}