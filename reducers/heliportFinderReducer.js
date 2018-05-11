import * as types from '../actions/actionTypes';

const initialState = {
    loading: false,
    airports: [],
    GPSLocation: {latitude:0, longitude:0},
    minRadius: null,
    maxRunwayLength:null,
    drivingInfo: [],
    map:null,
    googleAutocomplete: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case types.PROXIMITY_AIRPORT_NEAR_SUCCESS().type:
            return Object.assign({}, {airports:action.airports, loading:true});
        case types.PROXIMITY_LOCATION_BY_ADDRESS_SUCCESS().type:
            return Object.assign({}, state, {GPSLocation:action.GPSLocation, loading:true});
        case types.PROXIMITY_LOAD_ALL_SUCCESS().type:
            return Object.assign({}, state, {GPSLocation:action.GPSLocation, airports: action.airports, loading:true});
        case types.PROXIMITY_LOCATION_DRIVE_DISTANCE_SUCCESS().type:
            return Object.assign({}, state, {drivingInfo:action.drivingInfo, loading:true});
        case types.PROXIMITY_GOOGLE_PLACES_AUTOCOMPLETE_SUCCESS().type:
            return Object.assign({}, state, {googleAutocomplete:action.predictions, loading:true});
        default:
            return state;
    }
};
