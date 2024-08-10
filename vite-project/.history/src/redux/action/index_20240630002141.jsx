//for add item of cart
export const addCart = (product) => {
    return {
        type : "ADDITEM",
        payload : product
    }
}

export const adelCart = (product) => {
    return {
        type : "DELLITEM",
        payload : product
    }
}