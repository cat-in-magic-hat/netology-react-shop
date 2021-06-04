import { phoneFormatter } from '../../utils';

const DEFAULT_TITLE = 'Контакты:';

export default function Contacts({ title, phone, email, schedule, socialLinks }) {
    const scheduleText = getScheduleText(schedule);
    return (
        <section className="footer-contacts">
            <h5>{title || DEFAULT_TITLE}</h5>
            { phone && <a className="footer-contacts-phone" href={phoneFormatter.formatAsHref(phone)}>{phoneFormatter.displayFormat(phone)}</a> }
            { scheduleText && <span className="footer-contacts-working-hours">{scheduleText}</span> }
            { email && <a className="footer-contacts-email" href={'mailto:' + email}>{email}</a> }
            { socialLinks && <div className="footer-social-links">
                { socialLinks.sort((x, y) => x.sortOrder - y.sortOrder).map(({ alias }) =>
                    <div key={alias} className={'footer-social-link footer-social-link-' + alias}></div>
                )}
            </div> }
        </section>
    );
}

function getScheduleText(schedule) {
    if(!schedule) return null;
    return [schedule.days, schedule.workingHours].filter(x => x).join(': ');
}