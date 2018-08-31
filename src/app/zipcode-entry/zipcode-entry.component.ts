import {Component} from '@angular/core';
import {State} from '../reducers';
import {Store} from '@ngrx/store';
import {AddZipCode} from '../actions/zip-code.actions';

@Component({
    selector: 'app-zipcode-entry',
    templateUrl: './zipcode-entry.component.html'
})
export class ZipcodeEntryComponent {

    constructor(private store: Store<State>) {
    }

    addLocation(zipcode: string) {
        this.store.dispatch(new AddZipCode(zipcode));
    }

}
