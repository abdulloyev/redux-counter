import { createStore } from "redux";

// initialize value
const value = 0;

const reducer = (state = value, { type, payload }) => {
  switch (type) {
    case "INC":
      return state + 1;
    case "DECR":
      return state - 1;
    case "RND":
      return state + payload;
    default:
  }
};

const store = createStore(reducer);

const updateUI = () => {
  document.querySelector("#counter").textContent = store.getState();
  console.log(store.getState());
};

store.subscribe(updateUI);

document.querySelector("#inc").addEventListener("click", () => {
  store.dispatch({ type: "INC" });
});
document.querySelector("#decr").addEventListener("click", () => {
  store.dispatch({ type: "DECR" });
});

document.querySelector("#rnd").addEventListener("click", () => {
  const random = Math.floor(Math.random() * 100);
  store.dispatch({ type: "RND", payload: random });
});
