import { Action } from '@ngrx/store';


export interface State {
    zipCodes: Array<String>;
}

export const initialState: State = {
    zipCodes: [],
};

export function reducer(state = initialState, action: Action): State {
  switch (action.type) {

    default:
      return state;
  }
}
