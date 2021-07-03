import { phoneFormatter } from '../../utils';
import { storeContacts } from '../../data';

const DEFAULT_TITLE = 'Контакты:';

export default function Contacts() {
    const { title, phone, email, schedule, socialLinks } = storeContacts;
    const scheduleText = getScheduleText(schedule);
    return (
        <section className="footer-contacts">
            <h5>{title || DEFAULT_TITLE}</h5>
            <a className="footer-contacts-phone" href={phoneFormatter.formatAsHref(phone)}>{phoneFormatter.displayFormat(phone)}</a>
            { scheduleText && <span className="footer-contacts-working-hours">{scheduleText}</span> }
            <a className="footer-contacts-email" href={'mailto:' + email}>{email}</a>
            <div className="footer-social-links">
                { socialLinks.sort((x, y) => x.sortOrder - y.sortOrder).map(({ alias }) =>
                    <div key={alias} className={'footer-social-link footer-social-link-' + alias}></div>
                )}
            </div>
        </section>
    );
}

function getScheduleText(schedule) {
    if(!schedule) return null;
    return [schedule.days, schedule.workingHours].filter(x => x).join(': ');
}