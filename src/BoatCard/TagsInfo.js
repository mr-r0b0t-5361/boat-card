import React from 'react';
import Column from './Column';
import Row from './Row';
import { charcoalGrey } from '../constants/colors';

export default function TagsInfo({ tags, isMobile }) {
    const ColumnIfMobile = isMobile ? Column : Row;

    return (
        <ColumnIfMobile style={{...rootStyle, width: isMobile ? '33%' : null }}>
            {tags.map(tag => (
                <div style={tagStyle}>
                    {`✔️ ${tag}`}
                </div>
            ))}
        </ColumnIfMobile>
    );
}

const rootStyle = {
    padding: '2px'
};

const tagStyle = {
    padding: '2px',
    margin: '5px',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '12px',
    color: charcoalGrey,
};
