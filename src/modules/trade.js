import socketIOClient from 'socket.io-client';

export const ADD_TO_BUY_BOOK = "trade/ADD_TO_BUY_BOOK";
export const ADD_TO_SELL_BOOK = "trade/ADD_TO_SELL_BOOK";

const initialState = {
  count: 0,
  bidBook: {},
  sellBook: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const addToBuyBook = (moneyAmt) => {
  const socket = socketIOClient("http://127.0.0.1:4001");

  // this emits an event to the socket (your server) with an argument of 'red'
  // you can make the argument any color you would like, or any kind of data you want to send.
  socket.emit('add bid', moneyAmt);

  return dispatch => {
    dispatch({
      type: ADD_TO_BUY_BOOK
    });
  };
};

export const addToSellBook = (moneyAmt) => {
  const socket = socketIOClient("http://127.0.0.1:4001");

  // this emits an event to the socket (your server) with an argument of 'red'
  // you can make the argument any color you would like, or any kind of data you want to send.
  socket.emit('add sell', moneyAmt);

  return dispatch => {
    dispatch({
      type: ADD_TO_SELL_BOOK
    });
  };
};