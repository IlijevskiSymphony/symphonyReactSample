import React from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';

import {DataFormatter} from '../../utils';

import './style.css';

const url = process.env.REACT_APP_SERVER_URL;

const FlightInfoBox = ({aircraft, takeOffTime, landingTime, route, operator, grossPrice, availableSeats}) => {
    const {source, destination, estimate} = route;
    return (
        <div className="flight-info-box">
            <div className="flight-name">
                <h3>{source.address} - {destination.address}</h3>
            </div>
            <div>
                <div className="padding">
                    <h4><FontAwesome name="plane"/> {source.iata} ({source._id})</h4>
                    <p>{DataFormatter.dateToTimezone(takeOffTime, source.tzName, 'llll')}</p>
                    <p>{source.name}</p>
                    <p>{source.address}</p>
                </div>
                <div className="padding">
                    <h4><FontAwesome name="clock-o"/> {DataFormatter.estimate(estimate)}</h4>
                </div>
                <div className="padding">
                    <h4><FontAwesome name="plane" flip="vertical"/> {destination.iata} ({destination._id})</h4>
                    <p>{DataFormatter.dateToTimezone(landingTime, destination.tzName, 'llll')}</p>
                    <p>{destination.name}</p>
                    <p>{destination.address}</p>
                </div>
                <div className="padding operator-logo" style={{backgroundImage: `url(${url}/api/v3/operators/image/` + operator._id + ')'}}>
                    <h4><FontAwesome name="info-circle"/> Additional</h4>
                    <p>Operator ID: {operator._id}</p>
                    <p>Operator Name: {operator.alias || operator.name}</p>
                    <p>Call <a href={"tel://"+operator.phone}> +{operator.phone} </a></p>
                    <p>Send an email to <a href={"mailto:"+operator.email}>{operator.email}</a></p>
                    <p>Certificate: {operator.certNumb}</p>
                    <p>Aircraft Type: {aircraft.model}</p>
                    <p>Aircraft Class: {aircraft.aircraftClass}</p>
                    <p>Capacity: {aircraft.capacity} {aircraft.capacity <=1 ? 'Seat' : 'Seats'}</p>
                    <p>Available Seats: {availableSeats} {availableSeats <=1 ? 'Seat' : 'Seats'}</p>
                </div>
            </div>
            <div className="price-container padding">
                Price: <span className="price"><h3>{DataFormatter.price(grossPrice)}</h3></span>
            </div>
        </div>
    );
};

FlightInfoBox.propTypes = {
    takeOffTime: PropTypes.string,
    landingTime: PropTypes.string,
    grossPrice: PropTypes.number,
    availableSeats: PropTypes.number,
    aircraft: PropTypes.shape({
        model: PropTypes.string,
        aircraftClass: PropTypes.string
        capacity: PropTypes.number
    }),
    route: PropTypes.shape({
        source: PropTypes.shape({
            address: PropTypes.string,
            iata: PropTypes.string,
            _id: PropTypes.string,
            tzName: PropTypes.string,
            name: PropTypes.string,
            address: PropTypes.string
        }),
        destination: PropTypes.shape({
            address: PropTypes.string,
            iata: PropTypes.string,
            _id: PropTypes.string,
            tzName: PropTypes.string,
            name: PropTypes.string,
            address: PropTypes.string
        }),
        estimate: PropTypes.string
    }),
    operator: PropTypes.shape({
        _id: PropTypes.string,
        alias: PropTypes.string,
        name: PropTypes.string,
        phone: PropTypes.string,
        email: PropTypes.string,
        certNumb: PropTypes.string
    }),
}

export default FlightInfoBox;
