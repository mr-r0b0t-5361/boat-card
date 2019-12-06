import React from 'react';
import { charcoalGrey, pinkishGrey } from '../constants/colors';

export default function NumericInfo({ number, label, unity }) {
    return (
        <div style={rootStyle}>
            <div style={containerStyle}>
                <div style={numberStyle}>
                    {`${number}${unity || ''}`}
                </div>
                <div style={labelStyle}>
                    {label}
            </div>
            </div>
        </div>
    );
}

const rootStyle = {
    width: '20%',
    padding: '5px',
    textAlign: 'center',
    borderColor: pinkishGrey,
    borderWidth: '1px',
    borderStyle: 'solid',
};

const containerStyle = {
    marginTop: '3px',
};

const numberStyle = {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '16px',
    color: charcoalGrey,
};

const labelStyle = {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontSize: '12px',
    color: pinkishGrey,
}