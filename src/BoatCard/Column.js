import React from 'react';

export default function Column({ children, style }) {
    return (
        <div style={style}>
            {children}
        </div>
    );
}

