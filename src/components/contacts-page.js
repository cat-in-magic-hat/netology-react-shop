import { phoneFormatter } from '../utils';
import { storeContacts } from '../data';

const { city, address, phone, email } = storeContacts;
const getScheduleText = () => {
    const { schedule: {days, workingHours} = {}} = storeContacts;
    const innerText = [days, workingHours].filter(x => x).map(x => x.toLowerCase()).join(': ');
    return innerText && `(${innerText})`;
}

export default function ContactsPage() {
    return (
        <section className="top-sales">
            <h2 className="text-center">Контакты</h2>
            <p>Наш головной офис расположен в {city}, по адресу: {address}.</p>
            <h5 className="text-center">Координаты для связи:</h5>
            { phone && <p>Телефон: <a href={phoneFormatter.formatAsHref(phone)}>{phoneFormatter.displayFormat(phone)}</a> {getScheduleText()}</p>}
            { email && <p>Email: <a href={'mailto:' + email}>{email}</a></p> }
        </section>
    );
}