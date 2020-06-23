const increment = (payload) =>{
    return {
        type: "INCREMENT",
        payload: payload,
    };
}
const decrement = (payload) =>{
    return {
        type: "DECREMENT",
        payload: payload,
    };
}
export default {
    increment: increment,
    decrement: decrement,
}