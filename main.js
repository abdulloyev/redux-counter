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

const inc = () => ({ type: "INC" });
const decr = () => ({ type: "DECR" });
const rnd = value => ({ type: "RND", payload: value });

document.querySelector("#inc").addEventListener("click", () => {
  store.dispatch(inc());
});
document.querySelector("#decr").addEventListener("click", () => {
  store.dispatch(decr());
});

document.querySelector("#rnd").addEventListener("click", () => {
  const random = Math.floor(Math.random() * 100);
  store.dispatch(rnd(random));
});
