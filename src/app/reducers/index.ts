import {ActionReducerMap, createSelector, MetaReducer} from '@ngrx/store';
import {environment} from '../../environments/environment';
import {zipCodeReducer, ZipcodesState} from './zip-codes.reducer';
import {currentConditionsReducer, CurrentConditionsState} from './current-conditions.reducer';

export interface State {
    zipCodes: ZipcodesState,
    currentConditions: CurrentConditionsState
}

export const reducers: ActionReducerMap<State> = {
    zipCodes: zipCodeReducer,
    currentConditions: currentConditionsReducer,
};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const selectZipCodeState = (state: State) => state.zipCodes;
export const selectCurrentConditionsState = (state: State) => state.currentConditions;
export const selectZipCodeList = createSelector(selectZipCodeState,
    (zipcodesState: ZipcodesState) => zipcodesState.zipCodes);
export const selectCurrentConditions = createSelector(selectCurrentConditionsState,
    (currentConditionsState: CurrentConditionsState) => currentConditionsState.currentConditions);
