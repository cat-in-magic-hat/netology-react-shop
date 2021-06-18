import React from 'react';

const DEFAULT_ERROR_TEXT = 'Возникла непредвиденная ошибка';
export default function Error({ error, errorText }) {
    if (!error) return null;
    return <div className="api-error">{errorText || DEFAULT_ERROR_TEXT}</div>;
}