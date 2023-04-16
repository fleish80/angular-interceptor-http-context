import { Component, inject } from '@angular/core';
import { JokesService } from '../joke.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'df-joke-with-cache',
  standalone: true,
  imports: [AsyncPipe],
  template: `<p>{{ (joke$ | async)?.value }}</p>`,
  styles: [],
})
export class JokeWithCacheComponent {
  joke$ = inject(JokesService).loadJokeWithCashe();
}
