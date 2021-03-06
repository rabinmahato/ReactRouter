import * as actionTypes from './action/actions';

const initialState = {
    employees:[
        {
          name: "Rabin",
          mail: "abc@gmail.com",
          location: "Bangalore"
        },
        {
          name: "XYZ",
          mail: "xyz@gmail.com",
          location: "Bangalore"
        },
        {
          name: "Abc",
          mail: "abcd@gmail.com",
          location: "Bangalore"
        }
    ],
    items: [],
    selectedItem: null,
    loading: true
};

const reducer = ( state = initialState, action ) => {
    let totalPrice;
    switch ( action.type ) {
        case actionTypes.START_LOADER:
            return {
                ...state,
                loading: true
            };
        case actionTypes.STOP_LOADER:
            return {
                ...state,
                loading: false
            };
        case actionTypes.UPDATE_ITEMS:
            return {
                ...state,
                loading: false,
                items: action.payload
            };
        case actionTypes.UPDATE_SELECTED_ITEM:
            return {
                ...state,
                loading: false,
                selectedItem: action.payload
            }
        default:
            return state;
    }
};

export default reducer;