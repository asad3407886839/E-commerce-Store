//for add item of cart
export const addCart = (product) => {
    return {
        type : "ADDCART",
        payload : product
    }
}

export const adelCart = (product) => {
    return {
        type : "DELLCART",
        payload : product
    }
}