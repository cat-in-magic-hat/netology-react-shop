import Contacts from './contacts';
import Copyright from './copyright';
import FooterMenu from './footer-menu';
import PaymentMethods from './payment-methods';

export default function Footer() {
    return (
        <footer className="container bg-light footer">
            <div className="row">
                <div className="col">
                    <FooterMenu/>
                </div>
                <div className="col">
                    <PaymentMethods/>
                    <Copyright />
                </div>
                <div className="col text-right">
                    <Contacts/>
                </div>
            </div>
        </footer>
    );
}
