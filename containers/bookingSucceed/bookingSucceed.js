import React from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';

import {DataFormatter} from '../../common/utils';

import CreditCard from '../../components/creditCard';

import './style.css';

const BookingSucceed = ({operator, transactionDetails, bookingId, grossPrice}) => {
    return (
        <div className="booking-success-box">
            <h3 className="text-center">Success!<br/> Payment has been accepted for a flight with <br/>{operator.alias || operator.name}.</h3>

            <p>The requesting customer and EasyCopter Admins will receive an email receipt of the transaction with the details of the flight.</p>
            <p>An email will be sent to {operator.alias || operator.name} with the details of the flight and the passenger details, including the contact information for the requesting customer.</p>
            <p>It is recommended that you follow up with {operator.alias || operator.name} to confirm the booking on behalf of the customer.</p>

            {transactionDetails &&
                <div className="payment-info row">
                    <div className="col-md-6 col-md-offset-1">
                        <CreditCard
                            cardNumber={transactionDetails.cardNumber}
                            cardExpiration={transactionDetails.expirationDate}
                            cardHolder={(transactionDetails.cardHolder || '').toUpperCase()}
                            cardTypeIcon={transactionDetails.imageUrl}
                        />
                    </div>
                    <div className="col-md-4 transaction-info">
                        <h4><FontAwesome name="money"/> Amount Paid:</h4>
                        <div className="info">{DataFormatter.price(grossPrice)}</div>
                        <h4><FontAwesome name="id-ticket"/> Booking ID:</h4>
                        <div className="info booking-id">{bookingId.toUpperCase()}</div>
                        <h4><FontAwesome name="credit-card-alt"/> Transaction ID:</h4>
                        <div className="info booking-id">{(transactionDetails.id || '').toUpperCase()}</div>
                    </div>
                </div>
            }
        </div>
    );
};

BookingSucceed.propTypes = {
    bookingId: PropTypes.string,
    grossPrice: PropTypes.number,
    operator: PropTypes.shape({
        alias: PropTypes.string,
        name: PropTypes.string
    }),
    transactionDetails: PropTypes.shape({
        cardNumber: PropTypes.string,
        expirationDate: PropTypes.string
        cardHolder: PropTypes.string
        imageUrl: PropTypes.string
    })
}


export default BookingSucceed;
