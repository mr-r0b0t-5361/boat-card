import React from 'react';
import Column from './Column';
import Row from './Row';
import { pinkishGrey, charcoalGrey } from '../constants/colors';

export default function FreeExtrasInfo({ freeExtras, isMobile }) {
  const ColumnIfMobile = isMobile ? Column : Row;

  return (
    <ColumnIfMobile style={{...rootStyle, width: isMobile ? '33%' : null }}>
      <div style={labelStyle}>
        {'FREE EXTRAS'}
      </div>
      <div style={freeExtrasStyle}>
        {freeExtras.join(', ')}
      </div>
    </ColumnIfMobile>
  );
}

const rootStyle = {
  padding: '2px',
  margin: '5px',
};

const labelStyle = {
  padding: '2px',
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontSize: '12px',
  color: pinkishGrey,
  marginRight: '10px',
}

const freeExtrasStyle = {
  padding: '2px',
  fontFamily: 'Open Sans',
  fontWeight: 'bold',
  fontStyle: 'normal',
  fontSize: '12px',
  color: charcoalGrey,
};
