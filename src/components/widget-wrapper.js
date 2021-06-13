import React from 'react';
import Loader from './loader';

const DEFAULT_ERROR_TEXT = 'Возникла непредвиденная ошибка';
export default function WidgetWrapper({ children, loading, error }) {
    if (loading) return <Loader />;
    if (error) return <div className="api-error">{DEFAULT_ERROR_TEXT}</div>;
    return children;
}