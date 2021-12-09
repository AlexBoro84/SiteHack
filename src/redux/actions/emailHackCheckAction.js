
import {GET_EMAIL_DATA, FETCHING_DATA, RESET_STATE} from '../constants/types'
import axios from 'axios'

const emailCheckURL = 'https://hackcheck.advantasamridhi.com/checkpwn?email='

export const emailHackCheckAction = (email) => async(dispatch) => {

    try {
        dispatch({type: FETCHING_DATA})
        const res = await axios.get(emailCheckURL + email)
        if(res.data){
            dispatch({
                type: GET_EMAIL_DATA,
                payload: res.data
            })
        }
    } catch (error) {
        console.log(error)    
    }
}

export const resetStateAction = () => async(dispatch) => {

    try {
        dispatch({type: RESET_STATE})
    } catch (error) {
        console.log(error)    
    }
}

