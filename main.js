// ?Bizning state tashqaridan keladigan parametrlarga qaram bo'lmasligi kerak "clearFunck" - tozaFunksiya bo'lishi kerak

import { createStore } from "redux";

// initialize value
// Bu yerda biz objectni faqatgina count qiymatini o'zgartiramiz, qolgan qismini copy qilib olamiz.
const value = { count: 0, firstName: "John", lastName: "Smith" };

const reducer = (state = value, { type, payload }) => {
  switch (type) {
    case "INC":
      return {
        ...state,
        res: state.count + 1,
      };
    case "DECR":
      return {
        ...state,
        res: state.count - 1,
      };
    case "RND":
      return {
        ...state,
        res: payload,
      };
  }
};

const store = createStore(reducer);

const updateUI = () => {
  document.querySelector("#counter").textContent = store.getState().res;
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
