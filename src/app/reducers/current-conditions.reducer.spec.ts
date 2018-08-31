import {currentConditionsReducer, initialState} from './current-conditions.reducer';
import {CurrentConditionsLoaded} from '../actions/current-conditions.actions';

describe('CurrentConditions Reducer', () => {
    describe('CurrentConditionsAction', () => {

        it('should return the initial state', () => {
            const action = {} as any;

            const result = currentConditionsReducer(initialState, action);

            expect(result).toBe(initialState);
        });

        it('CurrentConditionsLoaded action should set current condition correct', () => {
            // Given
            const addAction = new CurrentConditionsLoaded('10001', {zip: '00011'});
            // When
            const result = currentConditionsReducer(initialState, addAction);
            // Then
            expect(result.currentConditions.get('10001').zip).toBe('00011');
        });
    });
});
