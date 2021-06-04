export default function PaymentMethods({ methods }) {
    if (!methods) return null;
    return (
        <section>
            <h5>Принимаем к оплате:</h5>
            <div className="footer-pay">
                { methods.sort((x, y) => x.sortOrder - y.sortOrder).map(({ alias }) => 
                    <div key={alias} className={getClassName(alias)}></div>
                )}
            </div>
        </section>
    );
}

function getClassName(methodAlias) {
    return `footer-pay-systems footer-pay-systems-${methodAlias}`;
}