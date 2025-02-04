import React, { FC } from 'react';

interface ListProps<T> {
    items: T[];
    renderItems: (items: T) => React.ReactNode;
}

export default function List<T>(props: ListProps<T>) {
    return <div>{props.items.map(props.renderItems)}</div>;
}
