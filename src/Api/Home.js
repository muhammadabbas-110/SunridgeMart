export const AllProductService = {
    method: 'POST',
    url: 'Product/get-all',
    headers: {
        'Content-Type': 'application/json'
    }
}
export const AllCategoriesService = {
    method: 'GET',
    url: 'Category/get-all',
    headers: {
        'Content-Type': 'application/json'
    }
}
export const GetProductByCategoryService = (catId) => ({
    method: 'GET',
    url: `Product/get-by-category-id/${catId}`,
    headers: {
        'Content-Type': 'application/json'
    }
})