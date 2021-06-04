import MainBanner from './banners/main-banner';
import { mainBanner } from '../data/banners';

export default function ContentWrapper({ children }) {
    return (
        <main className="container">
            <div className="row">
                <div className="col">
                    <MainBanner {...mainBanner}/>
                    {children}
                </div>
            </div>
        </main>
    );
}