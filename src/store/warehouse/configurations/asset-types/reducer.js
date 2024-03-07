import {
    CREATE_ASSET_TYPE,
    CREATE_ASSET_TYPE_SUCCESS,
    CREATE_ASSET_TYPE_FAIL,
    GET_ASSET_TYPES,
    GET_ASSET_TYPES_FAIL,
    GET_ASSET_TYPES_SUCCESS,
} from "./actionTypes"

/**
 * 1. add assetTypesLoading - so that you can use it in component to start/stop showing loader
 * 
 * 2. add successPostFlag & successGetFlag - so that you can use them in component to show Success Alert
 * 
 * - successPostFlag & successGetFlag & error properties - are going to affect only 
 * CREATE_ASSET_TYPE_SUCCESS, CREATE_ASSET_TYPE_FAIL, GET_ASSET_TYPES_SUCCESS, GET_ASSET_TYPES_FAIL
 * 
 * - Set successPostFlag = true ,to only CREATE_ASSET_TYPE_SUCCESS & set false to the rest
 * - Set successGetFlag = true ,to only GET_ASSET_TYPE_SUCCESS & set false to the rest
 * 
 * 3. add error property - so that you can able to map it and show to the component 
 * 
 * - Set error = action.payload , to only GET_ASSET_TYPES_FAIL & CREATE_ASSET_TYPE_FAIL -> We store the error coming from saga/action, so that we can able to map it to our component 
 * - Set error = null , to only CREATE_ASSET_TYPE_SUCCESS & GET_ASSET_TYPE_SUCCESS -> so that you can not show the error when you have a successful result from saga/action 
 * 
 * 
 * */
const INIT_STATE = {
    assetTypes: [],
    assetTypesLoading: false,
    error: null,
    successPostFlag: false,
    successGetFlag: false,
}

const AssetTypes = (state = INIT_STATE, action) => {
    switch (action.type) {
        case CREATE_ASSET_TYPE_SUCCESS:
            return {
                ...state,
                assetTypes: [...state.assetTypes],
                assetTypesLoading: false,
                successPostFlag: true,
                successGetFlag: false,
                error: null
            }
        case CREATE_ASSET_TYPE_FAIL:
            return {
                ...state,
                assetTypesLoading: false,
                error: action.payload,
                successPostFlag: false,
                successGetFlag: false,
            }
        case CREATE_ASSET_TYPE:
            return {
                ...state,
                assetTypesLoading: true
            }
        case GET_ASSET_TYPES:
            return {
                assetTypesLoading: true,
            }

        case GET_ASSET_TYPES_FAIL:
            return {
                ...state,
                assetTypesLoading: false,
                error: action.payload,
                successGetFlag: false,
                successPostFlag: false
            }

        case GET_ASSET_TYPES_SUCCESS:
            return {
                ...state,
                 assetTypes: action.payload,
                 assetTypesLoading: false,
                 successGetFlag: true,
                 successPostFlag: false,
                 error: null
            }
    
        default:
            return state
    }
}

export default AssetTypes
