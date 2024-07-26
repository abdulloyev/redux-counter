// Action creatorlar
const inc = () => ({ type: "INC" });
const decr = () => ({ type: "DECR" });
const rnd = value => ({ type: "RND", payload: value });

export { inc, decr, rnd };
