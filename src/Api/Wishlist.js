export const AddtoWhishlistService =(customerId) =>({
    method: 'POST',
    url: `WishList/add-to-wishlist?customerId=${customerId}`,
    headers: {
        'Content-Type': 'application/json'
    }
})