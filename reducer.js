// Dastlabki state qiymatlarini o'rnatish
const initialState = { count: 0, firstName: "John", lastName: "Smith" };

// Reducer funksiyasi
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "INC": // "INC" action turi uchun
      return {
        ...state, // eski state ni nusxalash
        count: state.count + 1, // count qiymatini oshirish
      };
    case "DECR":
      return {
        ...state,
        count: state.count - 1,
      };
    case "RND":
      return {
        ...state,
        count: payload, // count qiymatini payload ga tenglash
      };
    default: // default holat
      return state; // eski state ni qaytarish
  }
};

export default reducer;
