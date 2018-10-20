import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../models/article';
import { Response, Headers, RequestOptions, ResponseContentType, Http  } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

   url="http://localhost:8087/api/v1/article";

   getAllArticle():Observable<Article[]>{
      return this.http.get<Article[]>(this.url);
   }

   createArticle(article:Article){
    let headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({ headers: headers });
     //return this.http.post(this.url,JSON.stringify(article),options);
     return this.http.post(this.url,JSON.stringify(article));
   }

   getArticleById(id:String):Observable<Article>{
     return this.http.get<Article>(this.url+'/'+id);
   }
}
