import {ActionReducerMap, MetaReducer} from '@ngrx/store';
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
