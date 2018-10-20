import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import * as allAction from './actions/article.action';
import { ServiceService } from './services/service.service';
import { map, switchMap, mergeMap, catchError, exhaustMap, tap } from 'rxjs/operators';
import { Article } from './models/article';
import { Router } from '@angular/router';



@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private _service: ServiceService,
    private route:Router
  ) { }

  @Effect()
  loadAllArticle$ = this.actions$.pipe(
    ofType(allAction.SHOW_ALL),
    switchMap(() =>
      this._service.getAllArticle()
        .pipe(
          map(data => new allAction.ShowAllSuccessAction(data))
        )
    )
  );

  /* @Effect()
   createArticle$: Observable<Action> = this.actions$.pipe(
     ofType(allAction.CREATE),
     map(action => action.payload),
     mergeMap(article =>
       this._service.createArticle(article).pipe(
         map(res =>
           new allAction.CreateSuccessAction(res)))
      // catchError(error => new allAction.CreateFailureAction(error))
     )
   );*/

  /*@Effect()
  createArticle$:Observable<Action> = this.actions$.pipe(
    ofType(allAction.CREATE),
    switchMap((action: allAction.CreateAction) => this._service.createArticle(action.payload).pipe(
      map(article => new allAction.CreateAction(article)),
      catchError(error => of(new allAction.CreateFailureAction(error))
      ))
    )
    );*/
  @Effect()
  createArticle$ = this.actions$.pipe(
    ofType(allAction.CREATE),
    map((action: allAction.CreateAction) => action.payload),
    exhaustMap((article: Article) => this._service.createArticle(article)
      .pipe(
        catchError(error => of(new allAction.CreateFailureAction(error)))
      ))
  );

  @Effect()
  SearchArticle$: Observable<Action> = this.actions$.pipe(
    ofType(allAction.GET_BY_ID),
    switchMap((action: allAction.GetByIdAction) =>
      this._service.getArticleById(action.payload).pipe(
        map(res => new allAction.GetByIdSuccessAction(res)),
        catchError(error => of(new allAction.CreateFailureAction(error)))
      )
    )
  )

  @Effect({dispatch:false})
  getById$=this.actions$.pipe(
    ofType(allAction.GET_BY_ID_SUCCESS),
    tap(()=>this.route.navigate(['/com']))
  );
}
