export default function Footer({ children }) {
    const childComponents = Array.isArray(children) 
        ? children 
        : children && [children];
    return (
        <footer className="container bg-light footer">
            { 
                childComponents && <div className="row">
                    { childComponents.map((child, index) => 
                        <div key={index} className={getColumnClassName(childComponents, index)}>
                            {child}
                        </div>
                    )}
                </div>
            }
        </footer>
    );
}

function getColumnClassName(components, index) {
    return components.length > 1 && index === components.length - 1
        ? 'col text-right'
        : 'col';
}