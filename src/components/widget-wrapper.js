import React from 'react';
import { Loader, Error } from './shared';

export default function WidgetWrapper({ children, loading, error }) {
    if (loading) return <Loader />;
    if (error) return <Error error={error} />
    return children;
}