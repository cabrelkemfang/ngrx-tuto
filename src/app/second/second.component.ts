import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { Store } from '@ngrx/store';
import { Appstate } from '../appstate';
import { ServiceService } from '../services/service.service';
import * as allAction from '../actions/article.action';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  title = 'poc-ngrx';
  task: String = "all";
  articles$: Observable<Article[]>
  constructor(
    private store: Store<Appstate>,
    private service: ServiceService) {
    this.articles$ = this.store.select(state => state.article);
  }

  ngOnInit() {
    this.loadArticle();
    console.log(this.articles$)
    this.articles$ = this.store.select(state => state.article);

  }

  loadArticle() {
    this.task = "all"
    this.store.dispatch(new allAction.ShowAllAction);
  }

  createArticleView() {
    this.task = "create"

  }

  getArticleByIdView() {
    this.task = "get"
  }

  onSubmit(value) {
    // this.task = "all";
    //this.store.dispatch(new allAction.CreateAction(value));
    this.service.createArticle(value).subscribe((data) => {
      console.log(data)
    })
  }

  search(value) {
    console.log(value.value);
    this.store.dispatch(new allAction.GetByIdAction(value.value));
    this.articles$ = this.store.select(state => state.article);
  }
}

