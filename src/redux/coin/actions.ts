import { Coin } from "../../types/Coin";
import CoinActionTypes from "./action-types";

export enum ActionTypes {
  FETCH_COINS_SUCCESS = 'FETCH_COINS_SUCCESS'
}

export const fetchCoinsSuccess = (payload: Coin[]) => ({
  type: CoinActionTypes.FETCH_COINS_SUCCESS,
  payload
});