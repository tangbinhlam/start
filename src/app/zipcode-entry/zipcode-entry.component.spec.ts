import {ZipcodeEntryComponent} from './zipcode-entry.component';
import {async, ComponentFixture, inject, TestBed} from '@angular/core/testing';
import {Store} from '@ngrx/store';
import {TestStore} from '../testing/utils/test-store';
import {ZipcodesState} from '../reducers/zip-codes.reducer';
import {AddZipCode} from '../actions/zip-code.actions';

describe('ZipcodeEntryComponent', () => {
    let component: ZipcodeEntryComponent;
    let fixture: ComponentFixture<ZipcodeEntryComponent>;
    let store: TestStore<ZipcodesState>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ZipcodeEntryComponent],
            providers: [
                {provide: Store, useClass: TestStore}   // use test store instead of ngrx store
            ]
        }).compileComponents();
    }));

    beforeEach(inject([Store], (testStore: TestStore<ZipcodesState>) => {
        store = testStore;
        fixture = TestBed.createComponent(ZipcodeEntryComponent);
        component = fixture.componentInstance;
    }));

    it('should add new zipCode when function addLocation is called', () => {
        let addLocationSpy = spyOn(store, 'dispatch');
        component.addLocation('10001');
        expect(addLocationSpy).toHaveBeenCalledTimes(1);
        expect(addLocationSpy).toHaveBeenCalledWith( new AddZipCode('10001'));
    });
});