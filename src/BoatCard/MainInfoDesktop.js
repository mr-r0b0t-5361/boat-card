import React from 'react';
import { pinkishGrey, charcoalGrey, white } from '../constants/colors';
import Row from './Row';

export default function MainInfoDesktop({ name, year, city, country }) {
    return (
        <div style={rootStyle}>
            <Row>
                <div style={nameStyle}>
                    {name}
                </div>
                <div style={yearStyle}>
                    {year}
                </div>
            </Row>
            <div style={infoStyle}>
                {`${city}, ${country}`}
            </div>
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
    marginLeft: '10px',
};

const infoStyle = {
    fontFamily: 'Open Sans',
    fontStyle: 'normal',
    fontSize: '12px',
    color: charcoalGrey,
    marginRight: '5px',
}