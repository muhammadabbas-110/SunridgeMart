export const ProductDetailsService = (productId) => ({
    method: 'GET',
    url: `Product/get-by-id/${productId}`,
    headers: {
        'Content-Type': 'application/json'
    }
})
