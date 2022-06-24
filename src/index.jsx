import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App"
import { Provider } from "react-redux";
import { createStore } from "redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
const initalState = {
  count: 0
};

const reducer = (state = initalState, action) => {
  switch (action.type) {
    case "plus":
      return {...state, count: state.count += 1} 
    case "minus":
      return {...state, count: state.count -= 1} 
      case "Сброс":
      return {...state, count: state.count = 0}
        
    default:
      return state;
  }
};

const store = createStore(reducer);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
