import { createStore } from "redux";

// initialize value
const value = 0;

const reducer = (state = 0, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DECR":
      return state - 1;
  }
};

const store = createStore(reducer);

store.subscribe(() => {
  // *INFO: result console.log

  console.log(store.getState());
});

store.dispatch({ type: "INC" }); // state + 1
store.dispatch({ type: "INC" }); // state + 1
store.dispatch({ type: "INC" }); // state + 1
store.dispatch({ type: "INC" }); // state + 1
store.dispatch({ type: "DECR" }); // state - 1
store.dispatch({ type: "DECR" }); // state - 1

// *INFO: value buyerda o'zgarmaydi
console.log("Value: " + value);
