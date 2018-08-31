import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {selectCurrentConditions, selectZipCodeList, State} from '../reducers';
import {WeatherService} from '../weather.service';
import {RemoveZipCode} from '../actions/zip-code.actions';

@Component({
    selector: 'app-current-conditions',
    templateUrl: './current-conditions.component.html',
    styleUrls: ['./current-conditions.component.css']
})
export class CurrentConditionsComponent {

    zipcodes: Array<String>;

    currentConditions: Map<string, any>;

    // Should inject WeatherService because CurrentConditionsEffects need WeatherService
    constructor(private store: Store<State>, public weatherService: WeatherService) {
        store.select(selectZipCodeList).subscribe(zipcodes => this.zipcodes = zipcodes);
        store.select(selectCurrentConditions).subscribe(conditions => this.currentConditions = conditions);
    }

    getConditions(zip: string) {
        return this.currentConditions.get(zip);
    }

    removeZip(zip: string) {
        return this.store.dispatch(new RemoveZipCode(zip));
    }
}
