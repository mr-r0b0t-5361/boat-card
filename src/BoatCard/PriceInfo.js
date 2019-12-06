import React from 'react';
import Column from './Column';
import Row from './Row';
import { pinkishGrey, charcoalGrey } from '../constants/colors';

export default function PriceInfo({ price, periodType, isMobile }) {
    const ColumnIfMobile = isMobile ? Column : Row;
    
    return (
        <ColumnIfMobile style={{...rootStyle,  width: isMobile ? '50%' : null}}>
            <div style={labelStyle}>
                {'FROM'}
            </div>
            <Row>
                <div style={priceStyle}>{`$${price}.00`}</div>
                <div style={periodTypeStyle}>{`${periodType}`}</div>
            </Row>
        </ColumnIfMobile>
    );
}

const rootStyle = {
    borderColor: pinkishGrey,
    borderWidth: '1px',
    borderStyle: 'solid',
    padding: '10px'
}

const priceStyle = {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '16px',
    color: charcoalGrey,
    marginLeft: '5px',
    marginRight: '5px',
};

const labelStyle = {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontSize: '12px',
    color: pinkishGrey,
    paddingTop: '5px',
}

const periodTypeStyle = {
    fontFamily: 'Open Sans',
    fontWeight: 'bold',
    fontStyle: 'normal',
    fontSize: '12px',
    color: charcoalGrey,
    paddingTop: '5px',
  };