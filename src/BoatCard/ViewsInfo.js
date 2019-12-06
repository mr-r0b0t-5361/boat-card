import React from 'react';
import { pinkishGrey,
     paleRed, white } from '../constants/colors';

export default function ViewsInfo({ views, isMobile }) {
    return (
        <div style={rootStyle}>
            <div style={{ display: 'flex' }}>
                <div style={hotStyle}>{'HOT'}</div>
                <div style={viewsStyle}>{`${views} views`}</div>
            </div>
            <div>{`in the last 24${isMobile ? 'h' : ' hours'}`}</div>
        </div>
    );
}

const rootStyle = {
    width: '30%',
    borderColor: pinkishGrey,
    borderWidth: '1px',
    borderStyle: 'solid',
    padding: '10px',
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontSize: '12px',
    color: paleRed,
    background: white,
};

const hotStyle = {
    backgroundColor: paleRed,
    color: white,
    marginRight: '2px',
    padding: '2px',
    fontWeight: 'bold',
}

const viewsStyle = {
    padding: '2px',
    fontWeight: 'bold'
}