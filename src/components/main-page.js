import { Catalog, Bestsellers, Categories } from './catalog';

export default function MainPage() {
    return (
        <>
            <Bestsellers/>
            <section className="catalog">
                <h2 className="text-center">Каталог</h2>
                <Categories/>
                <Catalog/>
            </section>
        </>
    );
}