export const AddtoCartService =(customerId) =>({
    method: 'POST',
    url: `CartItem/AddToCart?customerId=${customerId}`,
    headers: {
        'Content-Type': 'application/json'
    }
})
export const GetCartItemService = (customerId) => ({
    method: 'GET',
    url: `CartItem/get-cartitems-by-customerId/${customerId}`,
    headers: {
        'Content-Type': 'application/json'
    }
})
export const DeleteCartService = (itemId) => ({
    method: 'DELETE',
    url: `CartItem/delete/${itemId}`,
    headers: {
        'Content-Type': 'application/json'
    }
})

