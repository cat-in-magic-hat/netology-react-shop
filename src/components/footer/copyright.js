import { COPYRIGHT_TEXT, DELIVERY_TEXT } from '../../constants';

export default function Copyright() {
    return (
        <section>
            <div className="footer-copyright">{COPYRIGHT_TEXT}<br/>{DELIVERY_TEXT}</div>
        </section>
    );
}