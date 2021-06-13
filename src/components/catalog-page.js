import { Catalog, Categories, SearchForm } from './catalog';

export default function CatalogPage() {
    return (
        <section className="catalog">
            <h2 className="text-center">Каталог</h2>

            <SearchForm />
            <Categories />
            <Catalog />
        </section>
    );
}