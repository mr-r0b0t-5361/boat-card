import React from 'react';
import { pinkishGrey } from '../constants/colors';

export default function ReviewsInfo({ reviews }) {
    return (
        <div style={rootStyle}>
            <div>
                {`⭐️⭐️⭐️⭐️⭐️`}
            </div>
            <div style={labelStyle}>
                {`${reviews} REVIEWS`}
            </div>
        </div>
    );
}

const rootStyle = {
    width: '40%',
    borderColor: pinkishGrey,
    borderWidth: '1px',
    borderStyle: 'solid',
    padding: '10px',
    textAlign: 'center'
};

const labelStyle = {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontSize: '12px',
    color: pinkishGrey,
}