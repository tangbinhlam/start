import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import {Observable, of} from 'rxjs';
import {mergeMap, catchError, map} from 'rxjs/operators';
import {WeatherService} from '../weather.service';
import {CurrentConditionsLoaded, CurrentConditionsLoadFailed} from '../actions/current-conditions.actions';
import {ZipCodeActionTypes} from '../actions/zip-code.actions';


@Injectable()
export class CurrentConditionsEffects {

  constructor(private actions$: Actions, private weatherService: WeatherService) {}

    @Effect()
    loadCurrentConditions$: Observable<any> = this.actions$.pipe(
        ofType(ZipCodeActionTypes.AddZipCode),
        mergeMap(action =>
            this.weatherService.loadCurrentConditions(action['zipCode']).pipe(
                // If successful, dispatch success action with result
                map(data => new CurrentConditionsLoaded(action['zipCode'], data)),
                // If request fails, dispatch failed action
                catchError((err) => of(new CurrentConditionsLoadFailed(action['zipCode'], err)))
            )
        )
    );
}
