import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { appReducer } from "./redux/app/reducer";
import { authReducer } from "./redux/auth/reducer";
const logger = (store) => (next) => (action) => {
  console.log("dispatching action", action);
  console.log(store.getState());
  const val = next(action);
  console.log("exiting logger", val);
  //return val
};
const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose;

const enhancer = composeEnhancers(
  applyMiddleware(logger)
  // other store enhancers if any
);

const rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer
});
export const store = createStore(rootReducer, enhancer);
