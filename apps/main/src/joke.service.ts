import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { cacheIt } from './cashe.interceptor';
import { Joke } from './joke.model';


@Injectable({providedIn: 'root'})
export class JokesService  {
  #httpClient = inject(HttpClient);

  loadJokeWithCashe(): Observable<Joke> {
    return this.#httpClient.get<Joke>('https://api.chucknorris.io/jokes/random', { context: cacheIt() });
  }

  loadJokeWithoughtCashe(): Observable<Joke> {
    return this.#httpClient.get<Joke>('https://api.chucknorris.io/jokes/random');
  }
}
