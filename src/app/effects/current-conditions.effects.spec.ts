import {TestBed} from '@angular/core/testing';
import {provideMockActions} from '@ngrx/effects/testing';

import {CurrentConditionsEffects} from './current-conditions.effects';
import {WeatherService} from '../weather.service';
import {Observable, of} from 'rxjs';
import {Store} from '@ngrx/store';
import {TestStore} from '../testing/utils/test-store';

describe('CurrentConditionsEffects', () => {
    let actions$: Observable<any>;
    let effects: CurrentConditionsEffects;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                CurrentConditionsEffects,
                provideMockActions(() => actions$),
                {provide: Store, useClass: TestStore}, // use test store instead of ngrx store
                {
                    provide: WeatherService, useValue: {
                        loadCurrentConditions: (zipCode: string) => of({name: 'OsaLam'}),
                    }
                },

            ]
        });
        effects = TestBed.get(CurrentConditionsEffects);
    });

    it('should be created', () => {
        expect(effects).toBeTruthy();
    });
});
