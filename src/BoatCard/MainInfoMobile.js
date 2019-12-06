import React from 'react';
import { pinkishGrey, charcoalGrey, white } from '../constants/colors';
import Row from './Row';

export default function MainInfoMobile({ name, year, city, country }) {
    return (
        <div style={rootStyle}>
            <div style={nameStyle}>
                {name}
            </div>
            <Row>
                <div style={yearStyle}>
                    {year}
                </div>
                <div style={infoStyle}>
                    {`${city}, ${country}`}
                </div>
            </Row>
        </div>
    );
}

const rootStyle = {
    width: '70%',
    borderColor: pinkishGrey,
    borderWidth: '1px',
    borderStyle: 'solid',
    padding: '10px',
    background: white,
};

const nameStyle = {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: '16px',
    color: charcoalGrey,
};

const yearStyle = {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontSize: '16px',
    color: charcoalGrey,
    marginRight: '10px',
};

const infoStyle = {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontSize: '12px',
    marginRight: '5px',
    marginTop: '3px'
};