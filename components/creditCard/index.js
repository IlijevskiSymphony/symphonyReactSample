import React from 'react';
import PropTypes from 'prop-types';

import './style.css';

const CreditCard = ({cardNumber, cardExpiration, cardHolder, cardTypeIcon}) => {
    return (
        <div className="credit-card">
            <div className="credit-card-header">
                <div className="header">
                    Payment details
                </div>
                <div><img src={cardTypeIcon} alt={cardTypeIcon}/></div>
            </div>
            <div className="credit-card-number-container">
                <div className="credit-card-number-header">Card number</div>
                <div className="credit-card-number">{cardNumber}</div>
            </div>
            <div className="credit-card-details-container">
                <div className="credit-card-sub-container">
                    <div className="credit-card-sub-header">Expiration</div>
                    <div className="credit-card-details">{cardExpiration}</div>
                </div>
                <div className="credit-card-sub-container">
                    <div className="credit-card-sub-header">Card Holder</div>
                    <div className="credit-card-details">{cardHolder}</div>
                </div>
            </div>
        </div>
    )
}

CreditCard.propTypes = {
    cardNumber: PropTypes.string,
    cardExpiration: PropTypes.string,
    cardHolder: PropTypes.string,
    cardTypeIcon: PropTypes.string
}

export default CreditCard;
