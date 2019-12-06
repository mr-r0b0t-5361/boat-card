import React from 'react';

export default function Row({ children, style }) {
    return (
        <div style={{...rootStyle, ...style}}>
            {children}
        </div>

    );
}

const rootStyle = {
    display: 'flex',
};
