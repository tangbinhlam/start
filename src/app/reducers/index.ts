import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import {zipCodeReducer, ZipcodesState} from "./zip-codes.reducer";

export interface State {
    zipCodes: ZipcodesState
}

export const reducers: ActionReducerMap<State> = {
  zipCodes: zipCodeReducer,

};

export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
