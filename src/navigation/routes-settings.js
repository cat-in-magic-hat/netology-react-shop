import { pageUrls } from './page-urls';
import { 
    AboutPage,
    CartPage,
    CatalogPage,
    ContactsPage,
    MainPage,
    NotFoundPage,
    ProductPage
} from '../components';

const routesSettings = [
    {
        path: pageUrls.main,
        component: MainPage,
        title: 'Главная',
        showInFooter: false,
        menuItemOrder: 10,
    },
    {
        path: `${pageUrls.catalog}/:id`,
        component: ProductPage,
        showInFooter: false,
        menuItemOrder: 20,
        hideInMenu: true
    },
    {
        path: pageUrls.catalog,
        component: CatalogPage,
        title: 'Каталог',
        showInFooter: true,
        menuItemOrder: 30,
    },
    {
        path: pageUrls.contacts,
        component: ContactsPage,
        title: 'Контакты',
        showInFooter: true,
        menuItemOrder: 40,
    },
    {
        path: pageUrls.about,
        component: AboutPage,
        title: 'О компании',
        showInFooter: true,
        menuItemOrder: 50,
    },
    {
        path: pageUrls.cart,
        component: CartPage,
        showInFooter: false,
        hideInMenu: true
    },
    {
        path: '*',
        component: NotFoundPage,
        showInFooter: false,
        hideInMenu: true
    },
]

const sortByOrder = (x, y) => x.menuItemOrder - y.menuItemOrder;

export const routes = routesSettings.map(({ path, component }) => ({ path, component }));

export const headerMenuItems = routesSettings
    .filter(({ hideInMenu }) => !hideInMenu)
    .sort(sortByOrder)
    .map(({ path, title }) => ({ path, title }));

export const footerMenuItems = routesSettings
    .filter(({ showInFooter }) => showInFooter)
    .sort(sortByOrder)
    .map(({ path, title }) => ({ path, title }));



export default {
    headerMenuItems,
    footerMenuItems,
    routes
}