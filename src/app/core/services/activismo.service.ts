import { Injectable } from '@angular/core';
import {  HttpClient, HttpHeaders  } from '@angular/common/http';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { IPost } from '../../interfaces/ipost';


@Injectable({
  providedIn: 'root'
})
export class ActivismoService {
     // 1. url del servicio:
  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';

  // 2. Inyectar el cliente http en el constructor.
  constructor(private http: HttpClient) {
    console.log('constructor - ActivismoService');
  }

  getActivismo(): Observable<string[]> {
    return this.http.get<IPost[]>( this.apiUrl)
        .pipe (
            map( (posts:IPost[]) => posts.map( post => post.title))
        );

  }

   addActivismo(newItem: string): Observable<unknown>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

      const newPost : IPost = {
        title : newItem,
        body : "Curso Angular",
        userId : 1
      };
      console.log(' Emviando al servidor');
      return this.http.post<unknown>(this.apiUrl, newPost , {headers});
    }
 
  
}
