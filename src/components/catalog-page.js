import { Catalog, Categories, SearchForm } from "./catalog";

export default function CatalogPage() {
    return (
        <section className="catalog">
            <h2 className="text-center">Каталог</h2>

            <SearchForm />
            <Categories />
            <Catalog />
            <div className="text-center">
                <button className="btn btn-outline-primary">Загрузить ещё</button>
            </div>
        </section>
    );
}