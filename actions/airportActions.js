import * as TYPES from './actionTypes';
import {Utils} from '../easycopter.common';

export default class AirportActions{
    static getNearAirports(lng,lat,query) {
        return async function (dispatch, state, {AirportService}) {
            const airports = await AirportService.near(lat, lng, query);
            dispatch(TYPES.PROXIMITY_AIRPORT_NEAR_SUCCESS({airports}));
        }
    }

    static refresh({gpsLocation, types, maxRadius, includePrivate, onlyPrivate, minRunwayLength, operatorSpecified}) {
        return async function (dispatch, state, {AirportService}) {
            dispatch(TYPES.REDUX_LOADING_BAR());
            const GPSLocation = await ((!gpsLocation || gpsLocation.latitude===0) ? Utils.Geo.getCurrentPosition() : gpsLocation);

            maxRadius = maxRadius || Utils.Geo.getRadius(null, GPSLocation);

            const airports = await AirportService.near(GPSLocation.latitude, GPSLocation.longitude,
                {maxRadius, minRunwayLength, types, includePrivate, onlyPrivate, operatorSpecified});

            dispatch(TYPES.PROXIMITY_LOAD_ALL_SUCCESS({GPSLocation,airports, maxRadius}));
        }
    }
}

