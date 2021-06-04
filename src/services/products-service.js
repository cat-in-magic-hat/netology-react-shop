const { REACT_APP_STORE_API_BASE_URL } = process.env;

const TOPSALES_URL = `${REACT_APP_STORE_API_BASE_URL}/api/top-sales`;
const CATEGORIES_URL = `${REACT_APP_STORE_API_BASE_URL}/api/categories`;
const PRODUCTS_BASE_URL = `${REACT_APP_STORE_API_BASE_URL}/api/items`;

const QUERY_KEYS = {
    categoryId: 'categoryId',
    offset: 'offset'
}

export async function getProducts(requestDetails) {
    const apiUrl = PRODUCTS_BASE_URL;
    if (requestDetails) apiUrl += `${apiUrl}?${getProductsQuery(requestDetails)}`;
    try {
        const result = await fetch(apiUrl);
        return await result.json();
    }
    catch (error) {
        console.error(`Attempt to get products list by url ${apiUrl} failed.`);
        console.error(error);
        return { error };
    }
}

function getProductsQuery(requestDetails) {
    return Object.entries(requestDetails)
        .map(([key, value]) => QUERY_KEYS[key] ? `${QUERY_KEYS[key]}=${value}` : null)
        .filter(x => x)
        .join('&');
}

export async function getBestsellers() {
    try {
        const result = await fetch(TOPSALES_URL);
        return await result.json();
    }
    catch (error) {
        console.error(`Attempt to get top sales products failed.`);
        console.error(error);
        return { error };
    }
}

export async function getProductById(id) {
    try {
        const result = await fetch(`${PRODUCTS_BASE_URL}/${id}`);
        return await result.json();
    }
    catch (error) {
        console.error(`Attempt to get product '${id}' failed.`);
        console.error(error);
        return { error };
    }
}

export async function getCategories() {
    try {
        const result = await fetch(CATEGORIES_URL);
        return await result.json();
    }
    catch (error) {
        console.error(`Attempt to get categories failed.`);
        console.error(error);
        return { error };
    }
}