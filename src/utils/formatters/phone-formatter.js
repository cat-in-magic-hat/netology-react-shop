const formattingSettings = {
    href: {
        regex: /^(\d)(\d{3})(\d{3})(\d{2})(\d{2})$/,
        format: 'tel:+$1-$2-$3-$4-$5'
    },
    display: {
        regex: /^(\d)(\d{3})(\d{2})(\d{2})(\d)(\d{2})$/,
        format: '+$1 $2 $3 $4 $5 $6'
    }
}

function formatNumber(phone, settingName) {
    const { regex, format } = formattingSettings[settingName];
    return phone && phone.replace(regex, format);
}

const phoneFormatter = {
    formatAsHref: phone => formatNumber(phone, 'href'),
    displayFormat: phone => formatNumber(phone, 'display'),
}

export default phoneFormatter;