import React from 'react';
import { pinkishGrey, charcoalGrey, white, paleRed } from '../constants/colors';

export default function ViewDetails({ isMobile }) {
    return (
        <div style={{...rootStyle,  width: isMobile ? '50%' : null}}>
        <div style={labelStyle}>
          {'⚡️ DIRECT BOOKING'}
        </div>
        <div style={buttonStyle}>
          {'VIEW DETAILS'}
        </div>
          <svg style={imageStyle} width={160} height={30}>
            <polygon
              points={"0,0 8,15, 0,30, 150,30, 158,15 150,0"}
              style={{ fill: paleRed }}>
            </polygon>
          </svg>
      </div>
    );
}

const rootStyle = {
    borderColor: pinkishGrey,
    borderWidth: '1px',
    borderStyle: 'solid',
    padding: '10px',
    textAlign: 'center',
    position: 'relative'
};

const labelStyle = {
  padding: '2px',
  fontFamily: 'Open Sans',
  fontWeight: 'bold',
  fontStyle: 'normal',
  fontSize: '12px',
  color: charcoalGrey,
};

const buttonStyle = {
  fontFamily: 'Open Sans',
  fontStyle: 'normal',
  fontWeight: 'bold',
  fontSize: '16px',
  color: white,
  padding: '5px',
  zIndex: 10,  
  position: 'relative',
};

const imageStyle = {
  position: 'absolute',
  top: 32,
  left: '50%',
  transform: 'translate(-50%, 0)',
  zIndex: -1,
  display: 'block',
}