import React from 'react'

const initialState = {
    loading: false,
    isLeaked: null,
    breaches: null
}

const emailCheckReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch(type) {
        case "FETCHING_DATA": 
            return{
                ...state,
                loading: true
            }
        case "GET_EMAIL_DATA":
            return {
                ...state,
                isLeaked: payload.isLeaked,
                breaches: payload.breaches,
                loading: false
            }
        case "RESET_STATE":
            return initialState

        default: return state;
    }
}

export default emailCheckReducer
