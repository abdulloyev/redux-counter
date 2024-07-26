import { createStore, bindActionCreators } from "redux";
import reducer from "./reducer";
import * as actions from "./actions";

// Redux storeni yaratish
const store = createStore(reducer);
const { dispatch, getState, subscribe } = store; // store dan dispatch, getState va subscribe funksiyalarini olish

// UI ni yangilash funksiyasi
const updateUI = () => {
  document.querySelector("#counter").textContent = getState().count; // state dan count qiymatini olib, #counter elementiga o'rnatish
};

// State o'zgarganda UI ni yangilash uchun subscribe qilish
subscribe(updateUI);

// Action creatorlarni dispatch bilan bog'lash
const { decr, inc, rnd } = bindActionCreators(actions, dispatch);

// Event listenerlarni qo'shish
document.querySelector("#inc").addEventListener("click", inc);
document.querySelector("#decr").addEventListener("click", decr);
document.querySelector("#rnd").addEventListener("click", () => {
  const random = Math.floor(Math.random() * 100);
  dispatch(rnd(random)); // rnd action creatorini tasodifiy qiymat bilan dispatch qilish
});
