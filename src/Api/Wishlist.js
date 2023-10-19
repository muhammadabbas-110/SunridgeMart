export const AddtoWhishlistService =(customerId) =>({
    method: 'POST',
    url: `WishList/add-to-wishlist?customerId=${customerId}`,
    headers: {
        'Content-Type': 'application/json'
    }
})
export const GetWhishlistService =(customerId)=>({
    method: 'GET',
    url: `WishList/get-wishlistItems-by-customerId/${customerId}`,
    headers: {
        'Content-Type': 'application/json'
    }
})
export const DeleteWishListService = (cId) => ({
    method: 'DELETE',
    url: `WishList/delete?customerId=${cId}`,
    headers: {
        'Content-Type': 'application/json'
    }
})
