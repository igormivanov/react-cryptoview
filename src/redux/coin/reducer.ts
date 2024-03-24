import { Coin } from "../../types/Coin";
import CoinActionTypes from "./action-types";
import { ActionTypes } from "./actions";

const initialState = {
  coins: []
};

type Action = {
  type: ActionTypes.FETCH_COINS_SUCCESS; 
  payload: Coin[]
}

const coinReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case CoinActionTypes.FETCH_COINS_SUCCESS:
      return {
        ...state,
        coins: action.payload
      };
    default:
      return state
  }
}

export default coinReducer