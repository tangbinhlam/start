import {ZipCodeActions, ZipCodeActionTypes} from "../actions/zip-code.actions";


export interface ZipcodesState {
    zipCodes: Array<String>;
}

export const initialState: ZipcodesState = {
    zipCodes: [],
};

export function zipCodeReducer(state = initialState, action: ZipCodeActions): ZipcodesState {
    switch (action.type) {
        case ZipCodeActionTypes.AddZipCode: {
            return {...state, zipCodes: [...state.zipCodes, action.zipCode]}
        }
        case ZipCodeActionTypes.RemoveZipCode: {
            return {
                ...state, zipCodes: state.zipCodes
                    .filter(item => item !== action.zipCode)
            };
        }
        default:
            return state;
    }
}
