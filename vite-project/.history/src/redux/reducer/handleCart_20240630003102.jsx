const cart = [];

const handleCart = (state = cart, action) => {
    switch (action.type) {
        case "ADDITEM":
            return [
                ...state,
                action.payload
            ];
        case "DELITEM":
            return state.filter(item => item.id !== action.payload.id);
        default:
            return state;
    }
}

export default handleCart;
