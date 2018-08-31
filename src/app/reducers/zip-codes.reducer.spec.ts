import {initialState, zipCodeReducer, ZipcodesState} from './zip-codes.reducer';
import {AddZipCode, LoadZipCode, RemoveZipCode} from '../actions/zip-code.actions';

describe('ZipCodes Reducer', () => {
    describe('ZipCodeAction', () => {
        it('should return the initial state', () => {
            const action = {} as any;

            const result = zipCodeReducer(initialState, action);

            expect(result).toBe(initialState);
        });

        it('AddZipCode action should add new zip code to list', () => {
            // Given
            const addAction = new AddZipCode('10001');
            // When
            const result = zipCodeReducer(initialState, addAction);
            // Then
            expect(result.zipCodes[0]).toBe('10001');
        });

        it('LoadZipCode action should load zip code to list', () => {
            // Given
            const loadAction = new LoadZipCode(['10001','10002']);
            // When
            const result = zipCodeReducer(initialState, loadAction);
            // Then
            expect(result.zipCodes.length).toBe(2);
            expect(result.zipCodes[0]).toBe('10001');
            expect(result.zipCodes[1]).toBe('10002');
        });

        it('RemoveZipCode action should remove zip code from list', () => {
            // Given
            const state: ZipcodesState = {
                zipCodes: ['10001','10002'],
            };
            // When
            const removeAction = new RemoveZipCode('10002');
            const result = zipCodeReducer(state, removeAction);
            // Then
            expect(result.zipCodes.length).toBe(1);
            expect(state.zipCodes[0]).toBe('10001');
        });
    });
});
