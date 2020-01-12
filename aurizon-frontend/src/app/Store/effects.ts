import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, exhaustMap } from 'rxjs/operators';
import { HomeService } from '../services/home/home.service';
import { ActionTypes } from './actionType';
import { login } from './action';

@Injectable()
export class HomeEffects {


    loadMovies$ = createEffect(() => this.actions$.pipe(
        // ofType(login),
        exhaustMap(() => this.homeService.getAllFacility()
            .pipe(
                map(facilities => ({ type: ActionTypes.GET_ALL_SERVICES, payload: facilities.data })),
                catchError(() => EMPTY)
            )
        )
    )
    );

    constructor(
        private actions$: Actions,
        private homeService: HomeService
    ) { }
}