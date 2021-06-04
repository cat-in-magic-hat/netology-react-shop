export const pageUrls = {
    main: '/',
    catalog: '/catalog',
    contacts: '/contacts',
    about: '/about',
    cart: '/cart'
}

export function getProductUrl(id) {
    return `${pageUrls.catalog}/${id}`;
}