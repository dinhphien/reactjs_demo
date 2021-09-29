import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { applyMiddleware, createStore } from "redux";
import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { compose } from "redux";
import { ConnectedRouter, routerMiddleware } from "connected-react-router";
import { Route } from "react-router";
import thunk from "redux-thunk";
import { tokenMiddleware } from "./middleware";
import createRootReducer from "./reducers";

const history = createBrowserHistory();
const store = createStore(
  createRootReducer(history),
  compose(
    applyMiddleware(thunk, tokenMiddleware, routerMiddleware(history)),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={App} />
    </ConnectedRouter>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
