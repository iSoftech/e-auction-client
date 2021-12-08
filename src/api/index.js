import axios from 'axios';

export const url = 'http://localhost:5050/seller/show-products';

export const fetchProducts = async () => {
    try {
        const { data: { products }} = await axios.get(url);
        const response = { products };
        return response;
    } catch (error) {
        console.log(error);
    }
}

export const fetchProduct = async (productId) => {
    let dynamicUrl = url;
    if (productId) {
        dynamicUrl = dynamicUrl + '/' + productId + '/show-bids';
    }
    try {
        const { data: { status, product, seller, bidsPlaced } } = await axios.get(dynamicUrl);
        const response = { status, product, seller, bidsPlaced };
        return response;
    } catch (error) {
        console.log(error);
    }
}