import React from 'react';
import {Col, Row} from 'react-bootstrap';

import {BookingService} from '../../services';

import FlightInfoBox from '../../components/flightInfoBox'

import BookingSucceed from './bookingSucceed';

import './style.css';

export class BookingSuccess extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            booking: {}
        }
    }

    async componentWillMount() {
        const bookingId = this.props.match.params.bookingId;
        const booking = await BookingService.get(bookingId);

        this.setState({booking});
    }

    render() {
        const booking = this.state.booking;

        return (
            <div>
                <Components.PageTitle
                    title="Booking Success"
                />

                {booking && booking.hasOwnProperty('flight') &&
                    <Row className="search-tab-content">
                        <Col md={8} sm={6}>
                            <BookingSucceed
                                operator={booking.operator}
                                transactionDetails={booking.transaction}
                                bookingId={booking._id}
                                grossPrice={booking.grossPrice}
                            />
                        </Col>
                        <Col md={4} sm={6} className="flight-info-box-container">
                            <FlightInfoBox
                                aircraft={booking.aircraft}
                                availableSeats={booking.flight.availableSeats}
                                takeOffTime={booking.flight.takeOffTime}
                                landingTime={booking.flight.landingTime}
                                route={booking.flight.route}
                                operator={booking.operator}
                                grossPrice={booking.grossPrice}
                            />
                        </Col>
                    </Row>
                }
            </div>
        )
    }
}

export default BookingSuccess;
