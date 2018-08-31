import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';
import {Store} from '@ngrx/store';
import {TestStore} from '../testing/utils/test-store';
import {ZipcodesState} from '../reducers/zip-codes.reducer';
import {CurrentConditionsComponent} from './current-conditions.component';
import {RouterTestingModule} from '@angular/router/testing';
import {AddZipCode} from '../actions/zip-code.actions';

describe('CurrentConditionsComponent', () => {
    let component: CurrentConditionsComponent;
    let fixture: ComponentFixture<CurrentConditionsComponent>;
    let store: TestStore<ZipcodesState>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [CurrentConditionsComponent],
            imports: [
                RouterTestingModule,
            ],
            providers: [
                {provide: Store, useClass: TestStore}   // use test store instead of ngrx store
            ]
        }).compileComponents();
    }));

    beforeEach(inject([Store], (testStore: TestStore<ZipcodesState>) => {
        store = testStore;
        store.dispatch(new AddZipCode('10001'));
        fixture = TestBed.createComponent(CurrentConditionsComponent);
        component = fixture.componentInstance;
    }));

    it('should create component successful', () => {
        expect(component).toBeTruthy();
    });
});