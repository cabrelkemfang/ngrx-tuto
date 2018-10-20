import { Component, OnInit } from '@angular/core';
import { Article } from './models/article';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { Appstate } from './appstate';
import * as allAction from './actions/article.action';
import { ServiceService } from './services/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'poc-ngrx';
  task: String = "all";
  articles$: Observable<Article[]>


  constructor(
    private store: Store<Appstate>,
    private service :ServiceService) {

    this.articles$ = this.store.select(state=>state.article);
 {
  
}
  }

  ngOnInit() {
    

  }

}
