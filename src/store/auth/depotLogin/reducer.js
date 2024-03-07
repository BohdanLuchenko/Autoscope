import {
    CREATE_DEPOT,
    CREATE_DEPOT_SUCCESS,
    CREATE_DEPOT_FAIL,
    GET_DEPOT,
    GET_DEPOT_FAIL,
    GET_DEPOT_SUCCESS,
} from "./actionTypes"

/**
 * 1. add depotLoading - so that you can use it in component to start/stop showing loader
 * 
 * 2. add successPostFlag & successGetFlag - so that you can use them in component to show Success Alert
 * 
 * - successPostFlag & successGetFlag & error properties - are going to affect only 
 * CREATE_DEPOT_SUCCESS, CREATE_DEPOT_FAIL, GET_DEPOT_SUCCESS, GET_DEPOT_FAIL
 * 
 * - Set successPostFlag = true ,to only CREATE_DEPOT_SUCCESS & set false to the rest
 * - Set successGetFlag = true ,to only GET_DEPOT_SUCCESS & set false to the rest
 * 
 * 3. add error property - so that you can able to map it and show to the component 
 * 
 * - Set error = action.payload , to only GET_DEPOT_FAIL & CREATE_DEPOT_FAIL -> We store the error coming from saga/action, so that we can able to map it to our component 
 * - Set error = null , to only CREATE_DEPOT_SUCCESS & GET_DEPOT_SUCCESS -> so that you can not show the error when you have a successful result from saga/action 
 * 
 * 
 * */
const INIT_STATE = {
    depot: null,
    error: null,
}

const Depot = (state = INIT_STATE, action) => {
    switch (action.type) {
        case CREATE_DEPOT_SUCCESS:
            return {
                ...state,
                depot: action.payload,
                error: null
            }
        case CREATE_DEPOT_FAIL:
            return {
                ...state,
                error: action.payload,
            }
        case CREATE_DEPOT:
            return {
                ...state,
            }
        case GET_DEPOT:
            return {
                ...state
            }

        case GET_DEPOT_FAIL:
            return {
                ...state,
                error: action.payload,
            }

        case GET_DEPOT_SUCCESS:
            return {
                ...state,
                 depot: action.payload,
                 error: null
            }
    
        default:
            return state
    }
}

export default Depot
