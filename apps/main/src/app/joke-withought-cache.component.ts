import { Component, inject } from '@angular/core';
import { JokesService } from '../joke.service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'df-joke-withought-cache',
  standalone: true,
  imports: [AsyncPipe],
  template: `<p>{{ (joke$ | async)?.value }}</p>`,
  styles: [],
})
export class JokeWithoughtCacheComponent {
  joke$ = inject(JokesService).loadJokeWithoughtCashe();
}

